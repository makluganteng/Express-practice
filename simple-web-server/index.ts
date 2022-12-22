import express, { Express, Request, Response } from 'express';


const app: Express = express();
const port = 3000;

app.use(express.json()).use('/users',require("./routes/users")).use('/authenticate',require("./routes/authenticate"))

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});