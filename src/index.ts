import "reflect-metadata"
import { DataSource } from "typeorm"
import { Member } from "./modules/member/member.entity";
import { Book } from "./modules/book/book.entity";

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '',
    database: 'virtual_library',
    entities: [Member, Book],
    synchronize: true
});

AppDataSource.initialize()
    .then(() => {
      console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })