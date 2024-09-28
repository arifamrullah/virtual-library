import { Body, Controller, Get, Param, Patch, Render } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './book.entity';
import { AppDataSource } from 'src';

@Controller('book')
export class BookController {
    constructor(private readonly bookService: BookService) {}

    @Get()
    @Render('book')
    async getAllBooks() {
        const memberRepository = AppDataSource.getRepository(Book);
        return await memberRepository
            .createQueryBuilder('book')
            .where('book.memberId IS NULL')
            .getMany()
            .then((result) => result ? { books: result } : { books: [] });
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<Book> {
        return await this.bookService.findOne(id);
    }

    @Patch(':id')
    async update(
        @Param('id') id: number,
        @Body() book: Book
    ): Promise<Book> {
        return await this.bookService.update(id, book);
    }
}
