import { ObjectId } from "mongoose";

export interface ITeachers {
  _id: ObjectId | string | number;
  role: "teacher";
  name: string;
  age: number;
  email: string;
  phoneNumber: number;
  subject: string;
  department: string;
  departmentId: string | number;
  salary: number;
  password?: string;
}