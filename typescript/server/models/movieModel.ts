import { Document, Schema, Types } from "mongoose";
import mongoose from "mongoose";

interface MovieAwards {
  wins: number;
  nominations: number;
  text: string;
}
interface MovieIMD {
  rating: number;
  votes: number;
  id: number;
}
interface MovieTomatoes {
  viewer: {
    rating: number;
    numReviews: number;
    meter: number;
  };
  lastUpdate: Date;
}

export interface IMovie extends Document<Types.ObjectId> {
  poster?: string;
  plot: string;
  genres: string[];
  runtime: number;
  cast: string[];
  num_mflix_comments: string;
  title: string;
  fullplot: string;
  countries: string[];
  released: Date;
  directors: string[];
  rated: string;
  awards: MovieAwards;
  lastUpdated: Date;
  year: string;
  imdb: MovieIMD;
  type: string;
  tomatoes: MovieTomatoes;
}

const MovieSchema = new Schema<IMovie>({});

const MovieModel = mongoose.model<IMovie>("Movie", MovieSchema);

export default MovieModel;
