import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { Inject, Injectable } from '@nestjs/common';
import { ClientKafka, MessagePattern, Payload } from '@nestjs/microservices';

import { LlmTextgenerationService } from './llm-textgeneration.service';
import { CreateLlmTextgenerationDto } from './dto/create-llm-textgeneration.dto';
import { UpdateLlmTextgenerationDto } from './dto/update-llm-textgeneration.dto';
import { CVFieldsDTO } from './dto/CVFields.dto';
import { QuestionsJoinAnswersDTO } from './dto/QuestionsJoinAnswers.dto';

@Controller('llm-textgeneration')
export class LlmTextgenerationController {
  constructor(
    private readonly llmTextgenerationService: LlmTextgenerationService
  ) {}

  /*@Post()
  create(@Body() createLlmTextgenerationDto: CreateLlmTextgenerationDto) {
    return this.llmTextgenerationService.create(createLlmTextgenerationDto);
  }

  @Get()
  findAll() {
    return this.llmTextgenerationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.llmTextgenerationService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLlmTextgenerationDto: UpdateLlmTextgenerationDto) {
    return this.llmTextgenerationService.update(+id, updateLlmTextgenerationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.llmTextgenerationService.remove(+id);
  }*/

  //@EventPattern('')
  /*@Post('generateQuestions/:userId')
  async generateQuestions(
    @Body() CVFieldsDTO: CVFieldsDTO,
    @Param('userId') userId: number
   // data:any
  ){
    return this.llmTextgenerationService.generateQuestions(CVFieldsDTO, userId);
  }

  @Post('setAnswersScore/:userId/:interviewId')
  async setAnswersScore(
    @Body() QuestionsJoinAnswersDTO: QuestionsJoinAnswersDTO, 
    @Param('userId') userId: number, 
    @Param('interviewId') interviewId: number
  ){
    return this.llmTextgenerationService.scoreAnswers(QuestionsJoinAnswersDTO, userId, interviewId);
  }*/


}
