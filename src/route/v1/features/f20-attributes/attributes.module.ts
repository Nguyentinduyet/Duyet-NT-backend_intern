import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Attributes, AttributesSchema } from './schemas/attributes.schema';
import AttributesController from './attributes.controller';
import AttributesRepository from './attributes.repository';
import AttributesService from './attributes.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Attributes.name,
        schema: AttributesSchema,
      },
    ]),
  ],
  controllers: [AttributesController],
  providers: [AttributesService, AttributesRepository],
  exports: [AttributesService, AttributesRepository],
})
export default class AttributesModule {}
