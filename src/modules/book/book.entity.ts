import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}