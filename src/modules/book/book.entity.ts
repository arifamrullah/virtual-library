import { BaseEntity, Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Member } from "../member/member.entity";

@Entity('books')

export class Book extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar' })
    code: string;

    @Column({ type: 'text' })
    title: string;

    @Column({ type: 'text' })
    author: string;

    @Column({ type: 'int' })
    stock: number;

    @ManyToOne(() => Member, (member) => member.books)
    member: Member;
}