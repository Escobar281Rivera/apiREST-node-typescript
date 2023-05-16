"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const validate_helper_1 = __importDefault(require("../helpers/validate.helper"));
const rolValidate = [
    (0, express_validator_1.check)('rol')
        .exists()
        .not()
        .isEmpty(),
    (req, res, next) => {
        (0, validate_helper_1.default)(req, res, next);
    },
];
exports.default = rolValidate;
//# sourceMappingURL=rol.validate.js.map