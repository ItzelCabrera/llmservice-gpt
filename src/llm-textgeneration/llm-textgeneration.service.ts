import { Inject, Injectable, OnModuleInit} from '@nestjs/common';
import { ClientKafka, MessagePattern, Payload } from '@nestjs/microservices';
import OpenAI from "openai";

import { CreateLlmTextgenerationDto } from './dto/create-llm-textgeneration.dto';
import { UpdateLlmTextgenerationDto } from './dto/update-llm-textgeneration.dto';
import { generateQuestionsUseCase } from './use-cases/generateQuestions.use-case';
import { scoreAnswersUseCase } from './use-cases/scoreAnswers.use-case';
import { QuestionsJoinAnswersDTO } from './dto/QuestionsJoinAnswers.dto';

@Injectable()
export class LlmTextgenerationService{
  constructor(
    @Inject('KAFKA_SERVICE')
    private readonly kafkaClient: ClientKafka, //se inyecta el módulo registrado para enviar o recibir mensajes
  ) {}
  
  private openai = new OpenAI({
      apiKey: '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',
  });

  async onModuleInit() {
    // Suscribimos el cliente Kafka a los tópicos que queremos escuchar
    console.log("onModuleInit()")
    this.kafkaClient.subscribeToResponseOf('cvFieldsPublishJSON');
    this.kafkaClient.subscribeToResponseOf('userAnswersPublishJSON');
    await this.kafkaClient.connect();
  }

  /*create(createLlmTextgenerationDto: CreateLlmTextgenerationDto) {
    return 'This action adds a new llmTextgeneration';
  }

  findAll() {
    return `This action returns all llmTextgeneration`;
  }

  findOne(id: number) {
    return `This action returns a #${id} llmTextgeneration`;
  }

  update(id: number, updateLlmTextgenerationDto: UpdateLlmTextgenerationDto) {
    return `This action updates a #${id} llmTextgeneration`;
  }

  remove(id: number) {
    return `This action removes a #${id} llmTextgeneration`;
  }*/

  @MessagePattern('cvFieldsPublishJSON')
  async generateQuestions(@Payload() message: any/*CVFieldsDTO:CVFieldsDTO,cvId:number*/){
    console.log('generateQuestions')
    console.log(message)
    return await generateQuestionsUseCase(this.openai, message);
  }

  @MessagePattern('userAnswersPublishJSON')
  async scoreAnswers(QuestionsJoinAnswersDTO:QuestionsJoinAnswersDTO, userId: number, interviewId: number){
    return await scoreAnswersUseCase(this.openai, QuestionsJoinAnswersDTO, userId, interviewId );
  }
}
