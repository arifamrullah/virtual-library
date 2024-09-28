import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Book } from "../book/book.entity";

@Entity('members')

export class Member extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar' })
    code: string;

    @Column({ type: 'text' })
    name: string;

    @Column({
        type: 'date',
        nullable: true
    })
    borrow_date: Date;

    @Column({
        type: 'boolean',
        default: false
    })
    isPenalty: boolean;

    @Column({
        type: 'date',
        nullable: true
    })
    penalty_date: Date;

    @OneToMany(() => Book, (book) => book.member)
    books: Book[];
}