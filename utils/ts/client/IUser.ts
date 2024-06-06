import { IStudent } from "@myTypes/server/models/IStudents";
import { ITeachers } from "@myTypes/server/models/ITeachers";
import { IAdmins } from "@myTypes/server/models/IAdmins";

/**
 * Represents a generic user type based on the provided type parameter.
 * @template T - The type parameter representing the user type.
 * @typeparam T - The type parameter representing the user type.
 * @returns The corresponding user interface based on the provided type parameter.
 */

export type IUser<T> = T extends "student"
  ? IStudent
  : T extends "teacher"
  ? ITeachers
  : T extends "admin"
  ? IAdmins
  : never;
