import OpenAI from "openai";
import { QuestionsJoinAnswersDTO } from '../dto/QuestionsJoinAnswers.dto';
export declare const scoreAnswersUseCase: (openai: OpenAI, QuestionsJoinAnswersDTO: QuestionsJoinAnswersDTO, userId: number, interviewId: number) => Promise<string>;
