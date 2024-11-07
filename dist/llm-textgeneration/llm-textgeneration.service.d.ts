import { ClientKafka } from '@nestjs/microservices';
import { QuestionsJoinAnswersDTO } from './dto/QuestionsJoinAnswers.dto';
export declare class LlmTextgenerationService {
    private readonly kafkaClient;
    constructor(kafkaClient: ClientKafka);
    private openai;
    onModuleInit(): Promise<void>;
    generateQuestions(message: any): Promise<string>;
    scoreAnswers(QuestionsJoinAnswersDTO: QuestionsJoinAnswersDTO, userId: number, interviewId: number): Promise<string>;
}
