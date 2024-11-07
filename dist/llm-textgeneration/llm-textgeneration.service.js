"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LlmTextgenerationService = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const openai_1 = require("openai");
const generateQuestions_use_case_1 = require("./use-cases/generateQuestions.use-case");
const scoreAnswers_use_case_1 = require("./use-cases/scoreAnswers.use-case");
const QuestionsJoinAnswers_dto_1 = require("./dto/QuestionsJoinAnswers.dto");
let LlmTextgenerationService = class LlmTextgenerationService {
    constructor(kafkaClient) {
        this.kafkaClient = kafkaClient;
        this.openai = new openai_1.default({
            apiKey: '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',
        });
    }
    async onModuleInit() {
        console.log("onModuleInit()");
        this.kafkaClient.subscribeToResponseOf('cvFieldsPublishJSON');
        this.kafkaClient.subscribeToResponseOf('userAnswersPublishJSON');
        await this.kafkaClient.connect();
    }
    async generateQuestions(message) {
        console.log('generateQuestions');
        console.log(message);
        return await (0, generateQuestions_use_case_1.generateQuestionsUseCase)(this.openai, message);
    }
    async scoreAnswers(QuestionsJoinAnswersDTO, userId, interviewId) {
        return await (0, scoreAnswers_use_case_1.scoreAnswersUseCase)(this.openai, QuestionsJoinAnswersDTO, userId, interviewId);
    }
};
exports.LlmTextgenerationService = LlmTextgenerationService;
__decorate([
    (0, microservices_1.MessagePattern)('cvFieldsPublishJSON'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LlmTextgenerationService.prototype, "generateQuestions", null);
__decorate([
    (0, microservices_1.MessagePattern)('userAnswersPublishJSON'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [QuestionsJoinAnswers_dto_1.QuestionsJoinAnswersDTO, Number, Number]),
    __metadata("design:returntype", Promise)
], LlmTextgenerationService.prototype, "scoreAnswers", null);
exports.LlmTextgenerationService = LlmTextgenerationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('KAFKA_SERVICE')),
    __metadata("design:paramtypes", [microservices_1.ClientKafka])
], LlmTextgenerationService);
//# sourceMappingURL=llm-textgeneration.service.js.map