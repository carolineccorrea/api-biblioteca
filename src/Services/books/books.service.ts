import { Injectable } from '@nestjs/common';
import { BadRequestException } from '@nestjs/common/exceptions/bad-request.exception';
import { BookDTO } from 'src/DTO/books.dto';
import { Book } from 'src/Mongo/Interfaces/book.interface';
import { BookRepository } from 'src/Mongo/Repository/book.repository';

@Injectable()
export class BooksService {

    constructor(
        private readonly bookRepository: BookRepository
    ){}

    async getAllBooks(): Promise<Book[]>
    {
        return await this.bookRepository.getAllBooks();
    };
    async getBookById(bookID: string) : Promise<Book> {
        
        try{
            return await this.bookRepository.findById(bookID);
        } catch(e){
            throw new BadRequestException('Esse livro nao existe');
        }
    }

    async saveBook( newBook: BookDTO ): Promise<Book> {
        return await this.bookRepository.saveBook(newBook);
    }

    async deleteBook(bookID: string) {
        try{
            const bookExists = await this.bookRepository.findById(bookID);
            if(bookExists){
                const deletedBook = await this.bookRepository.deleteBook(bookID);
                if(deletedBook)
                    return 'O livro foi deletado com sucesso';
            } else {
                throw new BadRequestException('Esse livro nao existe');
            }
        } catch(e) {
            throw new BadRequestException('Esse livro nao existe');
        }

    }

    async updateBook(bookID: string, book: BookDTO) {
        
        try{
            const bookExists = await this.bookRepository.findById(bookID);

            if(bookExists){
                const updatedBook = await this.bookRepository.updateBook(bookID, book);

                if(updatedBook)
                    return 'Esse livro foi atualizado com sucesso!';

            } else {
                throw new BadRequestException('Esse livro nao existe');
            }

        } catch(e) {
            throw new BadRequestException('Esse livro nao existe');
        }
    }
}