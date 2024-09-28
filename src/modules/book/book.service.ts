import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './book.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BookService {
    constructor(@InjectRepository(Book) private readonly bookRepository: Repository<Book>) {}

    async findAll(): Promise<Book[]> {
        return await this.bookRepository.find();
    }

    async findOne(id: number): Promise<Book> {
        return await this.bookRepository.findOne({ where : { id } });
    }

    async update(id: number, book: Book): Promise<Book> {
        await this.bookRepository.update(id, book);
        return await this.bookRepository.findOne({ where : { id } });
    }
}
