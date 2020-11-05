import {Schema} from 'mongoose';

export const AutorSchema = new Schema({
    nome: String,
    ativo: Boolean

})