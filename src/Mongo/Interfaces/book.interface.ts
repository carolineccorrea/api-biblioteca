import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';

export interface Book extends Document {
    readonly _id: mongoose.Schema.Types.ObjectId,
    readonly nome: string,
    readonly autor: object,
    readonly lingua: string,
    readonly paginas: number 
}