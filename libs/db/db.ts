import z from "zod";
import { connect, disconnect } from "mongoose";

const connectToDatabase = async () => {
  const MONGO_URI = z.string().parse(process.env.MONGO_MONGO_URI);
  try {
    if (!MONGO_URI)
      throw new Error(
        "MONGO_URI is not defined, Please define it in .env file"
      );
    await connect(MONGO_URI);
    console.log("Connected To Database...");
  } catch (error) {
    console.log("Failed To Connect With Database...", error);
  }
};
const disconnectFromDatabase = async () => {
  try {
    await disconnect();
    console.log("Disconnected From Database...");
  } catch (error) {
    console.log("Failed To Disconnect From Database...", error);
  }
};

export { connectToDatabase, disconnectFromDatabase };
