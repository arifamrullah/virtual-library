import { Controller, Get, Post, Body } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';

@Controller('book')
export class BookController {
    constructor(private bookService: BookService) {}

    @Get('/')

    getAllBooks() {
        return this.bookService.getAllBooks();
    }

    @Post('/create')

    createBook(@Body() bookData: CreateBookDto) {
        return { data: bookData };
    }
}
