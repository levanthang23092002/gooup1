"use strict";
exports.__esModule = true;
exports.LogBody = void 0;
// src/modules/decorator/log-body.decorator.ts
var common_1 = require("@nestjs/common");
exports.LogBody = common_1.createParamDecorator(function () {
    return 'Đây là Custom decorators mới tạo'; // Trả về nội dung của request body
});
