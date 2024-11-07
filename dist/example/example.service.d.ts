import { CreateExampleDto } from './dto/create-example.dto';
import { UpdateExampleDto } from './dto/update-example.dto';
export declare class ExampleService {
    create(createExampleDto: CreateExampleDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateExampleDto: UpdateExampleDto): string;
    remove(id: number): string;
}
