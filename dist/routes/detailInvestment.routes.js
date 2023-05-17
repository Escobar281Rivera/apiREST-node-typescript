"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const detailInvestment_controller_1 = __importDefault(require("../controllers/detailInvestment.controller"));
const detailInvestment = detailInvestment_controller_1.default;
const router = (0, express_1.Router)();
router.post('/', detailInvestment.createDetailInvestment);
exports.default = router;
//# sourceMappingURL=detailInvestment.routes.js.map