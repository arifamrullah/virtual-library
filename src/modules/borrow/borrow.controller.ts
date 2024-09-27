import { Controller, Get, Render } from '@nestjs/common';
import { MemberService } from '../member/member.service';
import { BookService } from '../book/book.service';

@Controller('borrow')
export class BorrowController {
    constructor(
        private memberService: MemberService,
        private bookService: BookService
    ) {}

    @Get('/')
    @Render('borrow')
    async getAll() {
        const members = await this.memberService
                     .findAllMembers()
                     .then((result) => result ? { members: result } : { members: [] });
        const books = await this.bookService
                   .findAllBooks()
                   .then((result) => result ? { books: result } : { books: [] });
        return { members, books };
    }
}
