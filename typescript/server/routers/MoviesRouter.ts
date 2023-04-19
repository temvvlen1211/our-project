import { Router } from "express";
import {
  countAllMovies,
  createMovies,
  deleteMovies,
  findAllMovies,
  findMoviesById,
  updateMovies,
} from "../controllers/MoviesController";

const usersRouter = Router();

usersRouter.get("/", findAllMovies);
usersRouter.get("/count", countAllMovies);
usersRouter.get("/:_id", findMoviesById);
// usersRouter.post("/", createMovies);
// usersRouter.delete("/:_id", deleteMovies);
// usersRouter.patch("/:_id", updateMovies);

export default usersRouter;
