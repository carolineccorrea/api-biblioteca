import { Module } from '@nestjs/common';
import { BooksController } from './Controllers/books/books.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BooksService } from './Services/books/books.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://admin:xpto123@cluster0.snge5.mongodb.net/catalogo?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
  ],
  controllers: [BooksController],
  providers: [BooksService],
})
export class AppModule {}
