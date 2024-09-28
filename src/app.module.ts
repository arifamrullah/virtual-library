import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { MemberModule } from './modules/member/member.module';
import { BookModule } from './modules/book/book.module';
import { BorrowModule } from './modules/borrow/borrow.module';
import { ReturnController } from './modules/return/return.controller';
import { ReturnModule } from './modules/return/return.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), MemberModule, BookModule, BorrowModule, ReturnModule],
  controllers: [AppController, ReturnController],
  providers: [AppService],
})
export class AppModule {}
