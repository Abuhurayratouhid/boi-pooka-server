"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersRoutes = void 0;
const express_1 = __importDefault(require("express"));
const users_controller_1 = require("./users.controller");
const router = express_1.default.Router();
router.get('/:id', users_controller_1.usersController.getSingleUser);
router.patch('/:id', users_controller_1.usersController.updateUser);
router.delete('/:id', users_controller_1.usersController.deleteUser);
router.get('/', users_controller_1.usersController.getAllUsers);
exports.usersRoutes = router;
