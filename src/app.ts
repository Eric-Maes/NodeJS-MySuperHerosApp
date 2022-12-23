import express, {Response, Request, NextFunction }  from "express";
import superHeros from './routes/superHeros';

const app = express();
app.use(express.json());
const port = 8080;

app.use(superHeros);

app.listen(port, () => {
    console.log(`Mon serveur est lancé sur le port : ${port}`);
});

