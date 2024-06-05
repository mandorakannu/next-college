import { model, models, Schema } from "mongoose";
import { IBook } from "@myTypes/server/models/IBooks";

const bookSchema = new Schema<Partial<IBook>>({
  _id: Schema.Types.ObjectId || String || Number,
  bookName: { type: String, required: true, lowercase: true },
  edition: { type: String, required: true, lowercase: true },
  isIssued: { type: Boolean, required: true },
  issuedTo: { type: Schema.Types.ObjectId, ref: "students" },
  isAvailable: { type: Boolean, required: true },
  previousOwners: [{ type: Schema.Types.ObjectId, ref: "students" }],
  price: { type: Number, required: true },
  barcode: { type: String, required: true },

  optional: {
    author: { type: String, lowercase: true },
    category: { type: String, lowercase: true },
    tags: [{ type: String, lowercase: true }],
    description: { type: String, lowercase: true },
  },
});

export default models.books || model("books", bookSchema);
