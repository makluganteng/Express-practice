import express, { Express, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
const router = express.Router();
const tokenSecret = process.env.TOKEN_KEY || "MY_NAME"


router.use((req: Request, res: Response, next)=>{
    console.log('authenticate endpoint is in');
    next();
})

router.post('/login',async(req: Request, res: Response)=>{
    try{
        let {email,password} = req.body;
        if(!(email && password)){
            res.status(400).send("Please have a correct input");
        }
        if(email === "vincent@gmail.com" && password === "vincent"){
            const token = jwt.sign(
                { Email: email },
                tokenSecret,
                {
                  expiresIn: "1h",
                }
              );
            const user = {
                email : email,
                password : password,
                token : token
            }
              res.send(user);
        }
    }catch(err){
        console.log(err)
    }
})

module.exports = router;