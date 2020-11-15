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
   
  async getAllBooks(): Promise<Book[]>{
      return await this.bookModel.find({},{ __v: false }).exec();
  }
   
  async findById(bookID: string): Promise<Book>{
    return await this.bookModel.findById(bookID, { __v : false});
  }
   
  async saveBook(newBook : BookDTO): Promise<Book>{
    const createdBook = new this.bookModel(newBook);
    return createdBook.save();
  }
  async deleteBook(bookID: string): Promise<Book>{
    return await this.bookModel.findOneAndDelete({ _id : bookID});
  }
  
  async updateBook(bookID: string, book: BookDTO): Promise<Book>  {
    return await this.bookModel.replaceOne({ _id: bookID}, book);
}
}