import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    username: 'root',
    password: 'password',
    database: 'prueba-api',
    port: 3306,
    synchronize: true,
    logging: true,
    entities: ['dist/models/**/*.js'],
    subscribers: ['dist/subscribe/**/*.js'],
    migrations: ['dist/migration/**/*.js']
})