"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const validate_helper_1 = __importDefault(require("../helpers/validate.helper"));
const userValidate = [
    (0, express_validator_1.check)('rolId')
        .exists()
        .not()
        .isEmpty(),
    (0, express_validator_1.check)('email')
        .exists()
        .isEmail() //type email
        .not() //no va basio
        .isEmpty(),
    (0, express_validator_1.check)('pass')
        .exists()
        .isLength({ min: 4, max: 8 })
        .not()
        .isEmpty(),
    (0, express_validator_1.check)('name')
        .exists()
        .not()
        .isEmpty(),
    (0, express_validator_1.check)('last')
        .exists()
        .not()
        .isEmpty(),
    (0, express_validator_1.check)('age')
        .exists()
        .custom((value, { req }) => {
        if (value < 18 || value > 50) {
            throw new Error('La edad no puede ser menor a 18 o mayor 50');
        }
        return true;
    })
        .isNumeric()
        .not()
        .isEmpty(),
    //Verifica, Retornar error o Seguir el flujo del controlador
    (req, res, next) => {
        (0, validate_helper_1.default)(req, res, next);
    },
];
exports.default = userValidate;
//# sourceMappingURL=user.validate.js.map