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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductControllers = void 0;
const product_service_1 = require("./product.service");
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productData = req.body;
    const result = yield product_service_1.ProductServices.createProduct(productData);
    res.json({
        success: true,
        message: "Movie is created successfully !",
        data: result,
    });
});
// geat all movice 
const getAllProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield product_service_1.ProductServices.getAllProduct();
        res.status(200).json({
            success: true,
            message: "Product are fetched successfully !",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Could not fetch movies!",
            error: err,
        });
    }
});
// product single id create data 
const getProductId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield product_service_1.ProductServices.getProductId(productId);
        res.status(200).json({
            success: true,
            message: "Product are fetched successfully !",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Could not fetch movies!",
            error: err,
        });
    }
});
// delte data  api 
const deleteProductId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield product_service_1.ProductServices.deleteProductId(productId);
        res.status(200).json({
            success: true,
            message: "Product are delete successfully !",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Could not fetch movies!",
            error: err,
        });
    }
});
const putProductId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield product_service_1.ProductServices.putProductId(productId);
        res.status(200).json({
            success: true,
            message: "Product are update  successfully !",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Could not fetch movies!",
            error: err,
        });
    }
});
//  Product  Search searchTerm
const searchTermProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { search } = req.params;
        const result = yield product_service_1.ProductServices.searchTermProduct(search);
        res.status(200).json({
            success: true,
            message: "Product are Search successfully !",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Could not fetch movies!",
            error: err,
        });
    }
});
exports.ProductControllers = {
    createProduct,
    getAllProduct,
    getProductId,
    deleteProductId,
    putProductId,
    searchTermProduct
};
