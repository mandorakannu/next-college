import { IDegree } from "@myTypes/server/models/IDegrees";
import React from "react";

export const useDegree = () => {
  const degrees: IDegree[] = [
    { _id: "1", degree: "B.Tech", branch: "CSE", students: [], faculty: [] },
    { _id: "2", degree: "M.Tech", branch: "CSE", students: [], faculty: [] },
    { _id: "3", degree: "MCA", branch: "CSE", students: [], faculty: [] },
    { _id: "4", degree: "MBA", branch: "MBA", students: [], faculty: [] },
    { _id: "5", degree: "BBA", branch: "BBA", students: [], faculty: [] },
    { _id: "6", degree: "BCA", branch: "BCA", students: [], faculty: [] },
    {
      _id: "7",
      degree: "B.Com",
      branch: "Commerce",
      students: [],
      faculty: [],
    },
    {
      _id: "8",
      degree: "M.Com",
      branch: "Commerce",
      students: [],
      faculty: [],
    },
    { _id: "9", degree: "B.Sc", branch: "Science", students: [], faculty: [] },
    { _id: "10", degree: "M.Sc", branch: "Science", students: [], faculty: [] },
    { _id: "11", degree: "B.A", branch: "Arts", students: [], faculty: [] },
    { _id: "12", degree: "M.A", branch: "Arts", students: [], faculty: [] },
  ];
    return degrees;
};
