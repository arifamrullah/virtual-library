import { Controller, Get, Render } from '@nestjs/common';
import { BookService } from './book.service';

@Controller('book')
export class BookController {
    constructor(private readonly bookService: BookService) {}

    @Get('/')
    @Render('book')
    async getAllBooks() {
        return await this.bookService
                   .findAllBooks()
                   .then((result) => result ? { books: result } : { books: [] });
    }
}
