import { Router } from "express";
import {
  countAllUsers,
  createUser,
  deleteUser,
  findAllUsers,
  findUserById,
  updateUser,
} from "../controllers/usersController";

const usersRouter = Router();

usersRouter.get("/", findAllUsers);
usersRouter.get("/count", countAllUsers);
usersRouter.get("/:_id", findUserById);
usersRouter.post("/", createUser);
usersRouter.delete("/:_id", deleteUser);
usersRouter.patch("/:_id", updateUser);

export default usersRouter;
