import { Body, Controller,Delete,Get,Patch,Post } from '@nestjs/common';
import { BooksService } from 'src/Services/books/books.service';
import { BookDTO } from '../../DTO/books.dto'; 

@Controller('books')
export class BooksController {

    constructor(
        private readonly bookService: BooksService
    ){}

    @Get()
    getAllBooks(): string {
        return "Retorna todos os livros"
    }

    @Post()
    saveBook(
        @Body() newBook: BookDTO
    ): BookDTO {
        return this.bookService.saveBook(newBook);
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
