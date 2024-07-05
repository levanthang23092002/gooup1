"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.DecoratorController = void 0;
// src/modules/decorator/decorator.controller.ts
var common_1 = require("@nestjs/common");
// eslint-disable-next-line @typescript-eslint/no-unused-vars
var log_body_decorator_1 = require("./log-body.decorator");
var DecoratorController = /** @class */ (function () {
    function DecoratorController() {
    }
    DecoratorController.prototype.create = function (body) {
        return body; // Trả về nội dung của request body
    };
    __decorate([
        common_1.Post(),
        __param(0, log_body_decorator_1.LogBody())
    ], DecoratorController.prototype, "create");
    DecoratorController = __decorate([
        common_1.Controller('decorator')
    ], DecoratorController);
    return DecoratorController;
}());
exports.DecoratorController = DecoratorController;
