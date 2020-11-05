import { Injectable } from '@nestjs/common';
import { BookDTO } from 'src/DTO/books.dto';
import { BookRepository } from 'src/Mongo/Repository/book.repository';

@Injectable()
export class BooksService {

    constructor(
        private readonly bookRepository: BookRepository
    ){}
    saveBook( newBook: BookDTO ): BookDTO {
        return this.bookRepository.saveBook(newBook);
    }
}
