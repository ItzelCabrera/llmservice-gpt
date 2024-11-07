import { ExampleService } from './example.service';
import { CreateExampleDto } from './dto/create-example.dto';
import { UpdateExampleDto } from './dto/update-example.dto';
export declare class ExampleController {
    private readonly exampleService;
    constructor(exampleService: ExampleService);
    create(createExampleDto: CreateExampleDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateExampleDto: UpdateExampleDto): string;
    remove(id: string): string;
}
