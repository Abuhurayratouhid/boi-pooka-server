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
exports.BookService = void 0;
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const book_model_1 = require("./book.model");
const paginationCalculate_1 = require("../../../pagination/paginationCalculate");
const createBook = (book) => __awaiter(void 0, void 0, void 0, function* () {
    const createdBook = yield book_model_1.Book.create(book);
    if (!createBook)
        throw new ApiError_1.default(400, 'Failed to create book');
    return createdBook;
});
const getAllBooks = (filters, paginationOptions) => __awaiter(void 0, void 0, void 0, function* () {
    const { searchTerm } = filters, filtersData = __rest(filters, ["searchTerm"]);
    const { page, limit, skip, sortBy, sortOrder } = paginationCalculate_1.paginationHelpers.calculatePagination(paginationOptions);
    const cowSearchableFields = ['title', 'author', 'genre'];
    const andConditions = [];
    if (searchTerm) {
        andConditions.push({
            $or: cowSearchableFields.map(field => ({
                [field]: {
                    $regex: searchTerm,
                    $options: 'i',
                },
            })),
        });
    }
    if (Object.keys(filtersData).length) {
        andConditions.push({
            $and: Object.entries(filtersData).map(([field, value]) => ({
                [field]: value,
            })),
        });
    }
    const sortConditions = {};
    if (sortBy && sortOrder) {
        sortConditions[sortBy] = sortOrder;
    }
    const whereConditions = andConditions.length > 0 ? { $and: andConditions } : {};
    const total = yield book_model_1.Book.countDocuments(whereConditions);
    const result = yield book_model_1.Book.find(whereConditions)
        .sort(sortConditions)
        .skip(skip)
        .limit(limit);
    //   console.log(allUsers);
    return {
        meta: {
            page,
            limit,
            total,
        },
        data: result,
    };
});
const getSingleBook = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const singleBook = yield book_model_1.Book.find({ _id: id });
    return singleBook;
});
const updateBook = (id, updatedData) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedBook = yield book_model_1.Book.findOneAndUpdate({ _id: id }, updatedData, {
        new: true,
    });
    return updatedBook;
});
const updateReview = (id, newReview) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedBook = yield book_model_1.Book.findOneAndUpdate({ _id: id }, { $push: { reviews: newReview } });
    return updatedBook;
});
const deleteBook = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedBook = yield book_model_1.Book.findByIdAndDelete(id);
    return deletedBook;
});
exports.BookService = {
    createBook,
    getAllBooks,
    getSingleBook,
    updateBook,
    deleteBook,
    updateReview,
};
