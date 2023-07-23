"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CowModel = void 0;
const mongoose_1 = require("mongoose");
const cow_enums_1 = require("./cow.enums");
const cowSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    price: { type: Number, required: true },
    location: { type: String, enum: Object.values(cow_enums_1.Location), required: true },
    breed: { type: String, enum: Object.values(cow_enums_1.Breed), required: true },
    weight: { type: Number, required: true },
    label: { type: String, enum: Object.values(cow_enums_1.Label), default: cow_enums_1.Label.ForSale },
    category: { type: String, enum: Object.values(cow_enums_1.Category), required: true },
    seller: { type: String, required: true }, // Assuming the seller is a User model
});
exports.CowModel = (0, mongoose_1.model)('Cow', cowSchema);
