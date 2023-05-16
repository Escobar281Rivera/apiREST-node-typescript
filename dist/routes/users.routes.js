"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_controller_1 = __importDefault(require("../controllers/users.controller"));
const user_validate_1 = __importDefault(require("../validators/user.validate"));
const router = (0, express_1.Router)();
const user = users_controller_1.default;
router.get("/", user.listUsers);
router.post('/', user_validate_1.default, user.createUser);
//router.post("/createRol:id", user.createUsers)
router.get("/:id", user.byIdUser);
router.put("/:id", user.updateUser);
router.delete("/:id", user.deleteUser);
exports.default = router;
//# sourceMappingURL=users.routes.js.map