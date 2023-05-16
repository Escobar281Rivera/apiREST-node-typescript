"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_controller_1 = __importDefault(require("../controllers/auth.controller"));
const express_1 = require("express");
const router = (0, express_1.Router)();
const auth = auth_controller_1.default;
router.post('/login', auth.login);
exports.default = router;
//# sourceMappingURL=auth.routes.js.map