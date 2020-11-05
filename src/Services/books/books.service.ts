import { Injectable } from '@nestjs/common';
import { BookDTO } from 'src/DTO/books.dto';
import { BookRepository } from 'src/Mongo/Repository/book.repository';

@Injectable()
export class BooksService {

    constructor(
        private readonly bookRepository: BookRepository
    ){}

    async getAllBooks(): Promise<BookDTO[]>
    {
        return await this.bookRepository.getAllBooks();
    };

    async saveBook( newBook: BookDTO ): Promise<BookDTO> {
        return await this.bookRepository.saveBook(newBook);
    }
}
