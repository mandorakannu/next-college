import { model, models, Schema } from "mongoose";
import { IStudent } from "@myTypes/server/models/IStudents";

const studentSchema = new Schema<Required<IStudent>>({
  role: { type: String, required: true, lowercase: true, default: "student" },
  _id: Schema.Types.ObjectId || String || Number,
  name: { type: String, required: true, lowercase: true },
  email: { type: String, required: true, lowercase: true },
  number: { type: Number, required: true },
  age: { type: Number, required: true },
  class: { type: String, required: true, lowercase: true },
  classId: { type: String, required: true, lowercase: true },
  gender: { type: String, required: true, lowercase: true },
  subjects: [
    {
      subject: { type: String, required: true, lowercase: true },
      marks: { type: Number, required: true },
    },
  ],

  address: {
    city: { type: String, required: true, lowercase: true },
    state: { type: String, required: true, lowercase: true },
    country: { type: String, required: true, lowercase: true },
  },

  attendance: {
    total: { type: Number, required: true },
    present: { type: Number, required: true },
    absent: { type: Number, required: true },
  },

  fees: {
    total: { type: Number, required: true },
    paid: { type: Number, required: true },
    remaining: { type: Number, required: true },
  },

  hostel: {
    isHosteler: { type: Boolean, required: true },
    hostelName: { type: String, required: true, lowercase: true },
    roomNumber: { type: Number, required: true },
    hostelType: { type: String, required: true, lowercase: true },
  },

  library: {
    isLibraryMember: { type: Boolean, required: true },
    books: { type: [String], required: true, lowercase: true },
    fine: { type: Number, required: true },
    isOwnerOnFine: { type: Boolean, required: true },
  },

  transport: {
    isTransport: { type: Boolean, required: true },
    route: { type: String, required: true, lowercase: true },
    transportType: { type: String, required: true, lowercase: true },
  },
});

export default models.students || model("students", studentSchema);
