import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { Book } from '../book/book.entity';
import { Member } from '../member/member.entity';
import { AppDataSource } from 'src';
import { In } from 'typeorm';

@Controller('borrow')
export class BorrowController {
    @Get()
    @Render('borrow')
    async getAll() {
        const memberRepository = AppDataSource.getRepository(Member);
        const bookRepository = AppDataSource.getRepository(Book);
        const members = await memberRepository
            .createQueryBuilder('member')
            .leftJoinAndSelect('member.books', 'books')
            .where('member.borrow_date IS NULL')
            .getMany()
            .then((result) => result ? { members: result } : { members: [] });
        const books = await bookRepository
            .createQueryBuilder('book')
            .leftJoinAndSelect('book.member', 'member')
            .where('book.memberId IS NULL')
            .getMany()
            .then((result) => result ? { books: result } : { books: [] });
        return { members, books };
    }
    
    @Post()
    async updateAll(@Body() book: Book) {
        const booksIdString = (book.id || []) as string[];
        const booksId = booksIdString.map(Number);
        await AppDataSource
            .createQueryBuilder()
            .update(Book)
            .set({ memberId: book.memberId })
            .where({ id: In(booksId) })
            .execute();
    }
}
