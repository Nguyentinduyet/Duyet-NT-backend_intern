import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';
import AddItemDto from '../dto/add-items.dto';

export type CartsDocument = Carts & Document;

@Schema({ timestamps: true, versionKey: false, collection: 'carts' })

export class Carts {
  @Prop({ required: true, type: Types.ObjectId, ref: 'User' }) 
  userId: Types.ObjectId;

  
  

  @Prop({
    type: [{ 
      productId: { type: Types.ObjectId, ref: 'Product', required: true }, 
      sku: { type: String, required: true },
      price: { type: Number, required: true, default: 0 },
      quantity: { type: Number, required: true, min: 1 }
    }], 
    default: []
  })
  
  items: AddItemDto[];
  
  @Prop({ default: 0 })
  total: number;
}

export const CartsSchema = SchemaFactory.createForClass(Carts);
CartsSchema.plugin(mongoosePaginate);
