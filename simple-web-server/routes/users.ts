import express, { Express, Request, Response } from 'express';
import { nextTick } from 'process';
const router = express.Router();

router.use(function timeLog(req: Request, res: Response, next) {
    console.log('Time: ', Date.now());
    next();
  });

router.get("/",(req: Request, res: Response)=>{
    res.send({
        data:[
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
    })
})

module.exports = router;