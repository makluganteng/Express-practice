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
const axios_1 = __importDefault(require("axios"));
const globals_1 = require("@jest/globals");
const app = (0, express_1.default)();
app.use('/users', require('./users'));
(0, globals_1.describe)('Test get all user', () => {
    (0, globals_1.test)("Should return a 200 OK response and return all user", () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield axios_1.default.get('http://localhost:3000/users');
        (0, globals_1.expect)(response.status).toBe(200);
    }));
});
