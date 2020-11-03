import { Controller,Delete,Get,Patch,Post } from '@nestjs/common';

@Controller('books')
export class BooksController {

    @Get()
    getAllBooks(): string {
        return "Retorna todos os livros"
    }

    @Post()
    saveBook(): string {
        return "Livro salvo com sucesso!"
    }

    @Patch()
    updateBook(): string {
        return "Livro atualizado com sucesso!!"
    }

    @Delete()
    deleteBook(): string {
        return "Livro deletado"
    }
}
