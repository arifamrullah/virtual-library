import { Injectable } from '@nestjs/common';

@Injectable()
export class BookService {
    getAllBooks() {
        return {
            "id": 1,
            "title": "Amazing"
        };
    }
}
