"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = require("express");
//ruta desde el model
const client_routes_1 = __importDefault(require("./client.routes"));
const roles_routes_1 = __importDefault(require("./roles.routes"));
const users_routes_1 = __importDefault(require("./users.routes"));
const auth_routes_1 = __importDefault(require("./auth.routes"));
dotenv_1.default.config();
const URL = process.env.URL;
const routes = (0, express_1.Router)();
//ruta
routes.use(`${URL}/client`, client_routes_1.default);
routes.use(`${URL}/rol`, roles_routes_1.default);
routes.use(`${URL}/user`, users_routes_1.default);
routes.use(`${URL}/auth`, auth_routes_1.default);
exports.default = routes;
//# sourceMappingURL=index.routes.js.map