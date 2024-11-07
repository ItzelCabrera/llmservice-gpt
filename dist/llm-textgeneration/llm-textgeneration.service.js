"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LlmTextgenerationService = void 0;
const common_1 = require("@nestjs/common");
const openai_1 = require("openai");
let LlmTextgenerationService = class LlmTextgenerationService {
    constructor() {
        this.openai = new openai_1.default({
            apiKey: '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',
        });
    }
};
exports.LlmTextgenerationService = LlmTextgenerationService;
exports.LlmTextgenerationService = LlmTextgenerationService = __decorate([
    (0, common_1.Injectable)()
], LlmTextgenerationService);
//# sourceMappingURL=llm-textgeneration.service.js.map