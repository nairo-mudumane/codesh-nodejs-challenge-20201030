import { ObjectId } from "mongoose";

export interface IMongoData {
  _id: ObjectId;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
