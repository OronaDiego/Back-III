import express from "express";
import { initMongoDB } from "./config/db-connection";
import { logger } from "./utils/logs/logger";
import { errorHandler } from "./middlewares/error-handler";
import apiRouter from "./routes/index";
import config from "./config/config";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = config.PORT;

initMongoDB()
  .then(() => logger.info("MongoDB connected successfully"))
  .catch((error) => logger.error("MongoDB connection error:", error));

app.use('/api', apiRouter);

//@ts-ignore
app.use(errorHandler);

app.listen(PORT, () =>
  logger.info(`Server is running on http://localhost:${PORT}`)
);
