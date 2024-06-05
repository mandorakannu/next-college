import { ObjectId } from "mongoose";

export interface IBook {
  _id: string | number | ObjectId;
  bookName: string | string[];
  edition: "first" | "second" | "third" | "fourth" | "fifth";
  isIssued: boolean;
  issuedTo: ObjectId | "NIL";
  isAvailable: boolean;
  previousOwners: ObjectId[];
  price: number;
  barcode: string;
  isOwnerOnFine: boolean;
  fine: number;

  optional?: {
    author?: string;
    category?: string;
    tags?: string[];
    description?: string;
  };
}
