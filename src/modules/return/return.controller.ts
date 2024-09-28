import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { AppDataSource } from 'src';
import { Member } from '../member/member.entity';
import { Book } from '../book/book.entity';
import { In } from 'typeorm';
// import { Book } from '../book/book.entity';

@Controller('return')
export class ReturnController {
    @Get()
    @Render('return')
    async getAll() {
        const memberRepository = AppDataSource.getRepository(Member);
        const members = await memberRepository
            .createQueryBuilder('member')
            .leftJoinAndSelect('member.books', 'books')
            .where('member.borrow_date IS NOT NULL')
            .getMany()
            .then((result) => result ? { members: result } : { members: [] });
        return members;
    }

    @Post()
    async updateAll(@Body() book: Book) {
        const booksIdString = (book.id || []) as string[];
        const booksId = booksIdString.map(Number);
        console.log(book)
        await AppDataSource
            .createQueryBuilder()
            .update(Book)
            .set({ memberId: null })
            .where({ id: In(booksId) })
            .execute();
    }
}
