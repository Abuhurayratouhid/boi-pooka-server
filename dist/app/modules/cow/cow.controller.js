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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cowController = void 0;
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const http_status_1 = __importDefault(require("http-status"));
const cow_service_1 = require("./cow.service");
const pic_1 = __importDefault(require("../../../shared/pic"));
const paginationFields_1 = require("../../../pagination/paginationFields");
const createCow = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const cowInfo = __rest(req.body, []);
        const result = yield cow_service_1.cowService.createCow(cowInfo);
        // console.log('created user', result);
        (0, sendResponse_1.default)(res, {
            success: true,
            statusCode: http_status_1.default.OK,
            message: 'Cow created successfully',
            data: result,
        });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
const getAllCows = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const filters = (0, pic_1.default)(req.query, [
            'searchTerm',
            'name',
            'location',
            'breed',
            'category',
        ]);
        const paginationOptions = (0, pic_1.default)(req.query, paginationFields_1.paginationFields);
        // console.log(paginationOptions);
        const result = yield cow_service_1.cowService.getAllCows(filters, paginationOptions);
        // console.log(result);
        (0, sendResponse_1.default)(res, {
            success: true,
            statusCode: http_status_1.default.OK,
            message: 'Cows retrieved successfully',
            meta: result.meta,
            data: result.data,
        });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
const getSingleCow = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield cow_service_1.cowService.getSingleCow(id);
        // console.log(result);
        (0, sendResponse_1.default)(res, {
            success: true,
            statusCode: http_status_1.default.OK,
            message: 'Cow retrieved successfully',
            data: result,
        });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
const updateCow = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const result = yield cow_service_1.cowService.updateCow(id, updatedData);
        // console.log(id);
        (0, sendResponse_1.default)(res, {
            success: true,
            statusCode: http_status_1.default.OK,
            message: 'Cow updated successfully',
            data: result,
        });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
const deleteCow = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const result = yield cow_service_1.cowService.deleteCow(id);
        // console.log(id);
        (0, sendResponse_1.default)(res, {
            success: true,
            statusCode: http_status_1.default.OK,
            message: 'Cow deleted successfully',
            data: result,
        });
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
exports.cowController = {
    createCow,
    getAllCows,
    getSingleCow,
    updateCow,
    deleteCow,
};
