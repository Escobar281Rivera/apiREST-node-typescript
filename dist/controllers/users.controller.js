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
const data_source_1 = require("../data-source");
const User_1 = require("../models/User");
//Method by get
class UsersController {
}
_a = UsersController;
UsersController.listUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const repoUsers = data_source_1.AppDataSource.getRepository(User_1.User);
    try {
        const users = yield repoUsers.find({
            where: { state: true },
        });
        return users
            ? res.json({
                ok: true,
                msg: 'list of roles',
                users
            }) : res.json({ ok: false, msg: 'data not found', users });
    }
    catch (e) {
        return res.json({
            ok: false,
            msg: `Error = ${e}`,
        });
    }
});
// save
// static createUsers = async (req: Request, res: Response) => {
//     const id = req.params.id 
//     //const querysName = req.query.querysName
//     const { email, pass,name, last, age, rolId } = req.body
//     const repoUsers = AppDataSource.getRepository(User)
//     try {
//         // console.log(name, last, age)
//         // console.log(id)
//         // console.log(querysName)
//         const users = new User()
//         users.email = email,
//         users.pass = pass
//         users.name = name
//         users.last = last
//         users.age = age
//         users.rol = rolId
//         await repoUsers.save(users)
//         return res.json({
//             ok: true,
//             msg: 'Users was create',
//             users
//         });
//     } catch (e) {
//         return res.json({
//             ok: false,
//             msg: `Error => ${e}`,
//         });
//     }
// };
UsersController.createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, pass, name, last, age, rolId } = req.body;
    const repoUser = data_source_1.AppDataSource.getRepository(User_1.User);
    try {
        const userExist = yield repoUser.findOne({ where: { email } });
        if (userExist) {
            return res.json({
                ok: false,
                msg: `Email => ${email} already exist`,
            });
        }
        else {
            const user = new User_1.User();
            user.email = email,
                user.name = name,
                user.last = last,
                user.age = age,
                user.pass = pass,
                user.rol = rolId,
                //encripta la pass
                user.hashPassword();
            const data = yield repoUser.save(user);
            return res.json({
                ok: true,
                msg: 'User was create success',
                user: data,
            });
        }
    }
    catch (e) {
        return res.json({
            ok: false,
            msg: `Error => ${e}`,
        });
    }
});
// by-Id
UsersController.byIdUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const repoUser = data_source_1.AppDataSource.getRepository(User_1.User);
    try {
        const user = yield repoUser.findOne({
            where: { id },
        });
        return user
            ? res.json({ ok: true, user })
            : res.json({ ok: false, msg: "The id dont exist" });
    }
    catch (e) {
        return res.json({
            ok: false,
            msg: "Server error",
        });
    }
});
// update 
UsersController.updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const { email, name, last, age, rolId } = req.body;
    const repoUser = data_source_1.AppDataSource.getRepository(User_1.User);
    let user;
    try {
        user = yield repoUser.findOneOrFail({
            where: { id, state: true, },
        });
        if (!user) {
            throw new Error("User dont exist in data base");
        }
        user.name = name,
            user.last = last,
            user.email = email,
            user.age = age,
            user.rol = rolId;
        yield repoUser.save(user);
        return res.json({
            ok: true,
            msg: "User was update",
        });
    }
    catch (error) {
        return res.json({
            ok: false,
            msg: "Server error",
        });
    }
});
// delete
UsersController.deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const repoUser = data_source_1.AppDataSource.getRepository(User_1.User);
    try {
        const user = yield repoUser.findOne({
            where: { id },
        });
        console.log(user);
        if (!user) {
            throw new Error("User dont exist in data base");
        }
        user.state = false;
        yield repoUser.save(user);
        return res.json({
            ok: true,
            msg: "User was delete",
        });
    }
    catch (e) {
        return res.json({
            ok: false,
            msg: "Server error",
        });
    }
});
exports.default = UsersController;
//# sourceMappingURL=users.controller.js.map