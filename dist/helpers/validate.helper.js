"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const validateResult = (req, res, next) => {
    try {
        (0, express_validator_1.validationResult)(req).throw();
        return next();
    }
    catch (e) {
        res.status(403);
        res.json({
            error: e.array(),
        });
    }
};
exports.default = validateResult;
//# sourceMappingURL=validate.helper.js.map