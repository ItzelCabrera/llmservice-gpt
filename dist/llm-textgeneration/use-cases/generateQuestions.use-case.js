"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateQuestionsUseCase = void 0;
const generateQuestionsUseCase = async (openai, message) => {
    const jsonData = JSON.parse(message.value);
    console.log(jsonData.cvId);
    console.log(jsonData.cvFieldsDTOs);
    return "content";
};
exports.generateQuestionsUseCase = generateQuestionsUseCase;
//# sourceMappingURL=generateQuestions.use-case.js.map