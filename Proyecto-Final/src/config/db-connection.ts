import config from "./config";
import { connect } from "mongoose";

export const initMongoDB = async (): Promise<void> => {
  await connect(config.MONGO_URL);
};
