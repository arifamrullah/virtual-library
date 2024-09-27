import { Module } from '@nestjs/common';
import { BorrowController } from './borrow.controller';
import { MemberModule } from '../member/member.module';
import { BookModule } from '../book/book.module';

@Module({
  imports: [MemberModule, BookModule],
  controllers: [BorrowController]
})
export class BorrowModule {}
