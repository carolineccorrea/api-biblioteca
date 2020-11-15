import { Body, Controller,Delete,Get,Patch,Post,Param } from '@nestjs/common';
import { Book } from 'src/Mongo/Interfaces/book.interface';
import { BooksService } from 'src/Services/books/books.service';
import { BookDTO } from '../../DTO/books.dto'; 

@Controller('books')
export class BooksController {

    constructor(
        private readonly bookService: BooksService
    ){}

    @Get()
    async getAllBooks(): Promise<Book[]> {
       return this.bookService.getAllBooks();
    }

    @Get(':bookID')
    async getBookById(@Param('bookID') bookID: string) {
        return await this.bookService.getBookById(bookID);
    }

    @Post()
    async saveBook(
        @Body() newBook: BookDTO
    ): Promise<Book> {
        return await this.bookService.saveBook(newBook);
    }

    @Patch(':bookID')
    async updateBook(@Param('bookID') bookID: string, @Body() book: BookDTO) {
        return await this.bookService.updateBook(bookID, book);
    }

    @Delete(':bookID')
    async deleteBook(@Param('bookID') bookID: string) {
        return await this.bookService.deleteBook(bookID);
    }
}
