import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { BookModule } from './api/books/book.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
  ConfigModule.forRoot(),
  MongooseModule.forRoot(process.env.DB_URI),
  BookModule,
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}