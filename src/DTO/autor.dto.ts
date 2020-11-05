import { IsBoolean, IsNotEmpty, IsNumber, IsPositive, IsString } from "class-validator";

export class AutorDTO{
    @IsNotEmpty()
    @IsString()
    readonly nome: string;

    @IsBoolean()
    @IsNotEmpty()
    readonly ativo: boolean;
}