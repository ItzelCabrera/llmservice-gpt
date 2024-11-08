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
exports.ExampleController = void 0;
const common_1 = require("@nestjs/common");
const example_service_1 = require("./example.service");
const create_example_dto_1 = require("./dto/create-example.dto");
const update_example_dto_1 = require("./dto/update-example.dto");
let ExampleController = class ExampleController {
    constructor(exampleService) {
        this.exampleService = exampleService;
    }
    create(createExampleDto) {
        return this.exampleService.create(createExampleDto);
    }
    findAll() {
        return this.exampleService.findAll();
    }
    findOne(id) {
        return this.exampleService.findOne(+id);
    }
    update(id, updateExampleDto) {
        return this.exampleService.update(+id, updateExampleDto);
    }
    remove(id) {
        return this.exampleService.remove(+id);
    }
};
exports.ExampleController = ExampleController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_example_dto_1.CreateExampleDto]),
    __metadata("design:returntype", void 0)
], ExampleController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ExampleController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ExampleController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_example_dto_1.UpdateExampleDto]),
    __metadata("design:returntype", void 0)
], ExampleController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ExampleController.prototype, "remove", null);
exports.ExampleController = ExampleController = __decorate([
    (0, common_1.Controller)('example'),
    __metadata("design:paramtypes", [example_service_1.ExampleService])
], ExampleController);
//# sourceMappingURL=example.controller.js.map