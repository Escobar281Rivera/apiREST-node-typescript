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
const Client_1 = require("../models/Client");
const data_source_1 = require("../data-source");
class ClientController {
}
_a = ClientController;
//List
ClientController.listClient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const repoClients = data_source_1.AppDataSource.getRepository(Client_1.Client);
    try {
        const clients = yield repoClients.find({
            where: { state: true },
        });
        return clients
            ? res.json({ ok: true, msg: 'List of Clients' })
            : res.json({ ok: false, msg: 'Data not found in data base', clients });
    }
    catch (e) {
        return res.json({
            ok: false,
            msg: `Error => ${e}`
        });
    }
});
//byId
ClientController.byIdClient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const repoClient = data_source_1.AppDataSource.getRepository(Client_1.Client);
    try {
        const client = yield repoClient.findOne({
            where: { id },
        });
        return client
            ? res.json({ ok: true, client })
            : res.json({ ok: false, msg: `The id ${id} not found in data base` });
    }
    catch (e) {
        return res.json({
            ok: false,
            msg: `Error => ${e}`
        });
    }
});
ClientController.createClient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, last } = req.body;
    const repoClient = data_source_1.AppDataSource.getRepository(Client_1.Client);
    try {
        const client = new Client_1.Client();
        client.name = name,
            client.last = last;
        yield repoClient.save(client);
        return res.json({
            ok: true,
            msg: 'Client was create'
        });
    }
    catch (e) {
        return res.json({
            ok: true,
            msg: `Error => ${e}`
        });
    }
});
//update
ClientController.updateClient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const { name, last } = req.body;
    const repoClient = data_source_1.AppDataSource.getRepository(Client_1.Client);
    let client;
    try {
    }
    catch (e) {
        return res.json({
            ok: true,
            msg: `Error => ${e}`
        });
    }
});
exports.default = ClientController;
//# sourceMappingURL=clients.controller.js.map