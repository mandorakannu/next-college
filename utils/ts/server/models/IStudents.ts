import { ObjectId } from "mongoose";

export interface IStudent {
  _id: ObjectId | string | number;
  name: string;
  email: string;
  age: number;
  class: string;
  classId: string;
  gender: "Male" | "Female";
  subjects: [{ subject: string; marks: number }][];
  fees: {
    total: number;
    paid: number;
    remaining: number;
  };
  attendance: {
    total: number;
    present: number;
    absent: number;
  };
  address: {
    city: string;
    state: string;
    country: string;
  };
  hostel: {
    isHosteler: boolean;
    hostelName: string | "NIL";
    roomNumber: number | "NIL";
    hostelType: "Boys" | "Girls" | "None";
  };
  transport: {
    isTransport: boolean;
    route: string;
    transportType: "Bus" | "Van" | "None";
  };
  library: {
    isLibraryMember: boolean;
    books: string | string[];
    fine: number | "NIL";
  };
}
