import { Type } from "class-transformer";
import { IsNotEmpty, IsNotEmptyObject, IsNumber, IsPositive, IsString, ValidateNested } from "class-validator";
import { AutorDTO } from "./autor.dto";

export class BookDTO{

    @IsNotEmpty()
    @IsString()
    readonly nome: string;

    @IsNotEmpty()
    @Type(()=> AutorDTO)
    @IsNotEmptyObject({each: true})
    @ValidateNested({each: true})
    readonly autor: AutorDTO[]; //UM ARRAY DO TIPO AUTOR DTO, PODE TER MAIS DE UM AUTOR UM LIVRO

    @IsNotEmpty()
    @IsString()
    readonly lingua: string;

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    readonly paginas: number;

}