import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { MemberModule } from './modules/member/member.module';
import { BookModule } from './modules/book/book.module';
import { BorrowModule } from './modules/borrow/borrow.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), MemberModule, BookModule, BorrowModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
