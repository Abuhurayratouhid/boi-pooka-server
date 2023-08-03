"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
const mongoose_1 = require("mongoose");
const bookSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    creatorEmail: { type: String, required: true },
    author: { type: String, required: true },
    genre: { type: String, required: true },
    publicationDate: { type: String, required: true },
    imageUrl: { type: String, required: true },
    wishList: { type: Boolean, default: false },
    isReading: { type: Boolean, default: false },
    readSoon: { type: Boolean, default: false },
    isCompleted: { type: Boolean, default: false },
    reviews: [
        {
            comment: { type: String },
        },
    ],
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.Book = (0, mongoose_1.model)('Book', bookSchema);
