import { ObjectId } from "mongoose";

export interface IAdmins {
  _id: ObjectId | string | number;
  role: "admin";
  name: string;
  age: number;
  email: string;
  phoneNumber: number;
  department: string;
  departmentId: string | number;
  salary: number;
  password?: string;
}
