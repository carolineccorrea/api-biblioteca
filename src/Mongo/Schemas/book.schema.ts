import {Schema} from 'mongoose';
import { AutorSchema } from './autor.schema';

export const BookSchema = new Schema({
    nome: String,
    autor: [AutorSchema],
    lingua: String,
    paginas: Number

})