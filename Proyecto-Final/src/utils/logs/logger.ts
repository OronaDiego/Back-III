import log4js from "log4js";

log4js.configure({
  appenders: {
    fileAppender: { type: "file", filename: "./src/utils/logs/logs.log" },
    consoleAppender: { type: "console" },
  },
  categories: {
    default: { appenders: ["fileAppender", "consoleAppender"], level: "info" },
  },
});

export const logger = log4js.getLogger();
