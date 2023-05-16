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
const Rol_1 = require("../models/Rol");
class RolesController {
}
_a = RolesController;
//List
RolesController.listRoles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const repoRoles = data_source_1.AppDataSource.getRepository(Rol_1.Rol);
    try {
        const roles = yield repoRoles.find({
            where: { state: true },
        });
        return roles
            ? res.json({
                ok: true,
                msg: 'LIST OF ROLES',
                roles,
            })
            : res.json({ ok: false, msg: 'DATA NOT FOUND', roles });
    }
    catch (e) {
        return res.json({
            ok: false,
            msg: `ERROR => ${e}`,
        });
    }
});
//CREATE
RolesController.createRoles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { rol } = req.body;
    const repoRoles = data_source_1.AppDataSource.getRepository(Rol_1.Rol);
    try {
        const roles = new Rol_1.Rol();
        roles.rol = rol;
        yield repoRoles.save(roles);
        return res.json({
            ok: true,
            msg: 'ROL WAS CREATE',
        });
    }
    catch (e) {
        return res.json({
            ok: false,
            msg: ` ERROR => ${e}`,
        });
    }
});
//UPDATE
RolesController.updateRol = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const { rol } = req.body;
    const repoRol = data_source_1.AppDataSource.getRepository(Rol_1.Rol);
    let role;
    try {
        role = yield repoRol.findOneOrFail({
            where: { id, state: true },
        });
        if (!role) {
            throw new Error("Role dont exist in data base");
        }
        role.rol = rol;
        yield repoRol.save(role);
        return res.json({
            ok: true,
            msg: "Rol was update",
        });
    }
    catch (e) {
        return res.json({
            ok: false,
            msg: "Server error",
        });
    }
});
//SEARCH BYID
RolesController.byIdRol = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const repoRol = data_source_1.AppDataSource.getRepository(Rol_1.Rol);
    try {
        const rol = yield repoRol.findOne({
            where: { id },
        });
        return rol
            ? res.json({ ok: true, rol })
            : res.json({ ok: false, msg: "The id dont exist" });
    }
    catch (e) {
        return res.json({
            ok: false,
            msg: "Server error",
        });
    }
});
//DELETE
RolesController.deleteRol = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const repoRol = data_source_1.AppDataSource.getRepository(Rol_1.Rol);
    try {
        const rol = yield repoRol.findOne({
            where: { id },
        });
        if (!rol) {
            throw new Error('ROL DONT EXIST IN DATA BASE');
        }
        rol.state = false;
        yield repoRol.save(rol);
        return res.json({
            ok: true,
            msg: 'ROL WAS DELETE'
        });
    }
    catch (e) {
        return res.json({
            ok: false,
            msg: 'SERVER ERROR'
        });
    }
});
exports.default = RolesController;
//# sourceMappingURL=roles.controller.js.map