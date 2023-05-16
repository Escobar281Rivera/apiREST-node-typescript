"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("./../models/User");
const data_source_1 = require("../data-source");
const jwt_helper_1 = require("../helpers/jwt.helper");
class AuthController {
}
_a = AuthController;
AuthController.login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, pass } = req.body;
    const repoAuth = data_source_1.AppDataSource.getRepository(User_1.User);
    let user;
    try {
        //Consulta a la entidad
        user = yield repoAuth.findOneOrFail({
            relations: { rol: true },
            select: ['id', 'email', 'pass'],
            where: { email: email },
        });
    }
    catch (e) {
        return res.status(400).json({
            ok: false,
            msg: 'Email or password incorrect',
        });
    }
    //Verifica contraseña encriptada
    if (!user.checkPassword(pass)) {
        return res.status(400).json({
            ok: false,
            msg: 'Email or password incorrect',
        });
    }
    if (user.state == false) {
        res.json({ ok: false, msg: 'Acceso denegado' });
    }
    else {
        user.pass = undefined;
        //Agregamos el tokken
        const token = yield (0, jwt_helper_1.tokenSign)(user);
        //le enviamos la data
        return res.json({
            ok: true,
            msg: 'authorized',
            data: user,
            token,
        });
    }
});
exports.default = AuthController;
//# sourceMappingURL=auth.controller.js.map