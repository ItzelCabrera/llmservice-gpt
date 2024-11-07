import {IsString} from 'class-validator';

export class CVFieldDTO{
    @IsString()
    readonly field: string;

    @IsString()
    readonly level: string;

    @IsString()
    readonly category: string;
}