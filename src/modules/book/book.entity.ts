import { BaseEntity, Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
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

    @Column({
        name: 'member_id',
        type: 'int',
        nullable: true
    })
    memberId: number;
    @ManyToOne(() => Member, (member) => member.books, {onDelete: 'SET NULL'})
    @JoinColumn({ name: 'member_id' })
    member: Member;
}