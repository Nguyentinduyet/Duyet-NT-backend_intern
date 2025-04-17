import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Flashsale, FlashsaleSchema } from './schemas/flash-sale.schema';
import FlashsaleController from './flash-sale.controller';
import FlashsaleRepository from './flash-sale.repository';
import FlashsaleService from './flash-sale.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Flashsale.name,
        schema: FlashsaleSchema,
      },
    ]),
  ],
  controllers: [FlashsaleController],
  providers: [FlashsaleService, FlashsaleRepository],
  exports: [FlashsaleService, FlashsaleRepository],
})
export default class FlashsaleModule {}
