import { ITeachers } from "@myTypes/server/models/ITeachers";
import { model, models, Schema } from "mongoose";

const teachersSchema = new Schema<ITeachers>({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: Number, required: true, max: 10 },
  subject: { type: String, required: true },
  department: { type: String, required: true },
  departmentId: { type: String, required: true },
  salary: { type: Number, required: true },
});

export const Teachers =
  models.Teachers || model<ITeachers>("Teachers", teachersSchema);
