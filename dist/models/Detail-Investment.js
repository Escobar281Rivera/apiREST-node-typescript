"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetailInvestment = void 0;
const typeorm_1 = require("typeorm");
const Investment_1 = require("./Investment");
let DetailInvestment = class DetailInvestment {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], DetailInvestment.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => Investment_1.Investment, investment => investment.detailInvestment),
    __metadata("design:type", Array)
], DetailInvestment.prototype, "investment", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 19, scale: 2, default: 0.0 }),
    __metadata("design:type", Number)
], DetailInvestment.prototype, "total", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", Date)
], DetailInvestment.prototype, "startDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", Date)
], DetailInvestment.prototype, "endDate", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: true }),
    __metadata("design:type", Boolean)
], DetailInvestment.prototype, "state", void 0);
DetailInvestment = __decorate([
    (0, typeorm_1.Entity)()
], DetailInvestment);
exports.DetailInvestment = DetailInvestment;
//# sourceMappingURL=Detail-Investment.js.map