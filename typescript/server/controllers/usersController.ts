import { Request, Response } from "express";
import UserModel, { UserInterface } from "../models/userModel";

export const countAllUsers = async (req: Request, res: Response) => {
  res.json(await UserModel.count({}));
};

export const findAllUsers = async (req: Request, res: Response) => {
  const { limit = "10", skip = "0" } = req.query;
  const result: UserInterface[] = await UserModel.find({})
    .limit(Number(limit))
    .skip(Number(skip));
  res.json(result);
};

export const findUserById = async (req: Request, res: Response) => {
  const { _id } = req.params;

  const result: UserInterface | null = await UserModel.findById(_id);
  res.json(result);
};

export const createUser = async (
  req: Omit<Request, "body"> & { body: UserInterface },
  res: Response
) => {
  const newUser = await UserModel.create(req.body);
  res.json(newUser);
};
export const deleteUser = async (req: Request, res: Response) => {
  const { _id } = req.params;
  const result = await UserModel.deleteOne({ _id });
  res.json(result);
};
export const updateUser = async (req: Request, res: Response) => {
  const { _id } = req.params;
  const { name, email, password } = req.body;
  const result: UserInterface | null = await UserModel.updateOne({
    name,
    email,
    password,
  }).findById(_id);
  res.json(result);
};
