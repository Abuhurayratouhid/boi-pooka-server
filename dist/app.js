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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const http_status_1 = __importDefault(require("http-status"));
const globalErrorHandler_1 = __importDefault(require("./middleware/globalErrorHandler"));
const book_route_1 = require("./app/modules/books/book.route");
const wishList_route_1 = require("./app/modules/wishList/wishList.route");
// import globalErrorHandler from './app/middleware/globalErrorHandler';
// import routes from './app/routes';
const app = (0, express_1.default)();
// middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
//Application routes
app.use('/api/v1', book_route_1.BookRoutes);
app.use('/api/v1', wishList_route_1.WishListRoutes);
// testing route
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send('boiPooka sever is running 👍👍');
}));
app.use(globalErrorHandler_1.default);
// Handle Not Found Route
app.use((req, res, next) => {
    res.status(http_status_1.default.NOT_FOUND).json({
        success: false,
        message: 'Route Not Found',
        errorMessages: [
            {
                path: req.originalUrl,
                message: 'Api Not Found',
            },
        ],
    });
    next();
});
exports.default = app;
