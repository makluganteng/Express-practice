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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const router = express_1.default.Router();
const tokenSecret = process.env.TOKEN_KEY || "MY_NAME";
router.use((req, res, next) => {
    console.log('authenticate endpoint is in');
    next();
});
router.post('/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let { email, password } = req.body;
        if (!(email && password)) {
            res.status(400).send("Please have a correct input");
        }
        if (email === "vincent@gmail.com" && password === "vincent") {
            const token = jsonwebtoken_1.default.sign({ Email: email }, tokenSecret, {
                expiresIn: "1h",
            });
            const user = {
                email: email,
                password: password,
                token: token
            };
            res.send(user);
        }
    }
    catch (err) {
        console.log(err);
    }
}));
module.exports = router;
