"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});
router.get("/", (req, res) => {
    res.send({
        data: [
            {
                name: "vincent",
                age: 19,
                address: "Ohio"
            },
            {
                name: "ken",
                age: 19,
                address: "Ohio"
            },
            {
                name: "bryan",
                age: 19,
                address: "Ohio"
            },
        ]
    });
});
module.exports = router;
