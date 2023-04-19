import { Request, Response } from "express";
import MovieModel, { IMovie } from "../models/movieModel";

export const countAllMovies = async (req: Request, res: Response) => {
  res.json(await MovieModel.count({}));
};

export const findAllMovies = async (req: Request, res: Response) => {
  const {
    limit = "10",
    skip = "0",
    ordering = "releasedAsc",
    genres = "",
  } = req.query;
  let sort = "";
  switch (ordering) {
    case "releasedDesc":
      sort = "-released";
      break;
    case "imdbRatingDesc":
      sort = "-awards.wins";
      break;
    case "titleAsc":
      sort = "title";
      break;
    case "titleDesc":
      sort = "-title";
      break;
    default:
      sort = "released";
      break;
  }
  let filter = undefined;
  switch (genres) {
    case "Drama":
      filter = "Drama";
      break;
    case "Romance":
      filter = "Romance";
      break;
    case "War":
      filter = "War";
      break;
    case "Comedy":
      filter = "Comedy";
      break;
    case "Adventure":
      filter = "Adventure";
      break;
    case "Western":
      filter = "Western";
      break;
    case "History":
      filter = "History";
      break;
    case "Biography":
      filter = "Biography";
      break;
    case "SCI-FI":
      filter = "SCI-FI";
      break;
    case "Thriller":
      filter = "Thriller";
      break;
    case "Fantasy":
      filter = "Fantasy";
      break;
    case "Mystery":
      filter = "Mystery";
      break;
    case "Crime":
      filter = "Crime";
      break;
    default:
      filter = {
        $in: [
          "Drama",
          "Comedy",
          "War",
          "Romance",
          "Adventure",
          "Western",
          "History",
          "Biography",
          "SCI-FI",
          "Thriller",
          "Fantasy",
          "Mystery",
          "Crime",
        ],
      };
      break;
  }
  const result: IMovie[] = await MovieModel.find({ genres: filter })
    .sort(sort)
    .limit(Number(limit))
    .skip(Number(skip));
  try {
    res.json(result);
  } catch (error) {
    console.log("aldaa garlaa");
  }
};

export const findMoviesById = async (req: Request, res: Response) => {
  const { _id } = req.params;
  const result: IMovie | null = await MovieModel.findById(_id);
  res.json(result);
};

export const createMovies = async (
  req: Omit<Request, "body"> & { body: IMovie },
  res: Response
) => {
  const newUser = await MovieModel.create(req.body);
  res.json(newUser);
};

export const deleteMovies = async (req: Request, res: Response) => {
  const { _id } = req.params;
  const result = await MovieModel.deleteOne({ _id });
  res.json(result);
};

export const updateMovies = async (req: Request, res: Response) => {
  const { _id } = req.params;
  const { name, email, password } = req.body;
  const result: IMovie | null = await MovieModel.updateOne({
    name,
    email,
    password,
  }).findById(_id);
  res.json(result);
};
