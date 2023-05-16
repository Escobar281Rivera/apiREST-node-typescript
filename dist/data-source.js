"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
exports.AppDataSource = new typeorm_1.DataSource({
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
});
//# sourceMappingURL=data-source.js.map