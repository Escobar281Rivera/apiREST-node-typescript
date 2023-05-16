"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const clients_controller_1 = __importDefault(require("../controllers/clients.controller"));
const express_1 = require("express");
const router = (0, express_1.Router)();
const client = clients_controller_1.default;
router.get('/', client.listClient);
exports.default = router;
//# sourceMappingURL=client.routes.js.map