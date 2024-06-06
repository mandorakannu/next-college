import { IAdmins } from "@myTypes/server/models/IAdmins";
import { model, models, Schema } from "mongoose";

const adminSchema = new Schema<IAdmins>({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: Number, required: true, max: 10 },
  department: { type: String, required: true },
  departmentId: { type: String, required: true },
  salary: { type: Number, required: true },
  password: { type: String },
});

export const Admins = models.admins || model<IAdmins>("admins", adminSchema);
