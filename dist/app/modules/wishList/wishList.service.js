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
exports.WishListService = void 0;
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const wishList_model_1 = require("./wishList.model");
const createWishList = (wish) => __awaiter(void 0, void 0, void 0, function* () {
    //   const isExist = await WishList.find({ id: wish.id });
    //   if (isExist) {
    //     throw new ApiError(400, 'Already Exist');
    //   }
    //   console.log('from service', isExist);
    const createdWishList = yield wishList_model_1.WishList.create(wish);
    if (!createdWishList)
        throw new ApiError_1.default(400, 'Failed to add wishList');
    return createdWishList;
});
const getAllWishList = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const createdWishList = yield wishList_model_1.WishList.find({ creatorEmail: email });
    //   console.log('from service all wishList', createdWishList);
    if (!createdWishList)
        throw new ApiError_1.default(400, 'Failed to add wishList');
    return createdWishList;
});
exports.WishListService = {
    createWishList,
    getAllWishList,
};
