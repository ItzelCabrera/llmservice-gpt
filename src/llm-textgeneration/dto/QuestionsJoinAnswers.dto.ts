import { IsString, IsArray, ArrayNotEmpty, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { QuestionJoinAnswerDTO } from './QuestionJoinAnswer.dto';

export class QuestionsJoinAnswersDTO{
    @IsArray()
    //@ArrayNotEmpty()
    @ValidateNested({ each: true }) //cada elemento del array debe validarse por las reglas del DTO
    @Type(() => QuestionJoinAnswerDTO) //cada elemento del array se puede transformar a un tipo QuestionJoinAnswer
    readonly questions_answers: QuestionJoinAnswerDTO[];
}