import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { BookDTO } from "src/DTO/books.dto";
import {Model} from 'mongoose';
import { Book } from 'src/Mongo/Interfaces/book.interface';


@Injectable()
export class BookRepository {
    constructor(
        @InjectModel('book') private readonly bookModel: Model<Book>
    ){}

    saveBook (newBook: BookDTO){
        const savedBook = this.bookModel(newBook);
        return savedBook.save();
    }
}