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
const Detail_Investment_1 = require("./../models/Detail-Investment");
const data_source_1 = require("../data-source");
const detailInvestmentRepository = data_source_1.AppDataSource.getRepository(Detail_Investment_1.DetailInvestment);
class DetailInvestmentController {
}
_a = DetailInvestmentController;
DetailInvestmentController.createDetailInvestment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { startDate, endDate } = req.body;
    try {
        const detailInvestment = new Detail_Investment_1.DetailInvestment();
        detailInvestment.startDate = startDate,
            detailInvestment.endDate = endDate,
            detailInvestment.total = 0;
        yield detailInvestmentRepository.save(detailInvestment);
        return res.json({
            ok: true,
            msg: 'created'
        });
    }
    catch (e) {
        return res.json({
            ok: false,
            msg: `Error => ${e}`
        });
    }
});
DetailInvestmentController.listDetailInvestment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    try {
        const detailInvestment = yield detailInvestmentRepository.find({
            where: { state: true },
        });
        return detailInvestment.length > 0
            ? res.json({ ok: true, detailInvestment })
            : res.json({ ok: false, msg: `Data not found` });
    }
    catch (e) {
        return res.json({
            ok: false,
            msg: `Error => ${e}`
        });
    }
});
exports.default = DetailInvestmentController;
//# sourceMappingURL=detailInvestment.controller.js.map