"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globalErrorhandlear = ((error, req, res, next) => {
    let statusCode = 5000;
    let message = "message" || 'somthing is worning!';
    return res.status(statusCode).json({
        success: false,
        message: "Order not found"
    });
});
exports.default = globalErrorhandlear;
