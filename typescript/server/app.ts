import express, { Express, Request, Response } from "express";
import cors from "cors";
import moviesRouter from "./routers/MoviesRouter";

const app: Express = express();

app.use(cors());
app.use(express.json());
app.get("/", (req: Request, res: Response) => {
  res.json("Hello world!");
});

app.use("/api/movies", moviesRouter);

export default app;
