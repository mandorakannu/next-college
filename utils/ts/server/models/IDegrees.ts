import { ObjectId } from "mongoose";

export interface IDegree {
  _id: ObjectId | string | number;
  degree:
    | "B.Tech"
    | "M.Tech"
    | "MCA"
    | "MBA"
    | "BBA"
    | "BCA"
    | "B.Com"
    | "M.Com"
    | "B.Sc"
    | "M.Sc"
    | "B.A"
    | "M.A";
  branch: string;
  students: ObjectId[];
  faculty: ObjectId[];
}
