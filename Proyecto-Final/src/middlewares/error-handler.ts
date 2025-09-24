import { Request, Response } from "express";
import { logger } from "../utils/logs/logger";
import { NotFoundError, UnhauthorizedError } from "../utils/error-custom";
import { httpResponse } from "../utils/http-response";

export const errorHandler = (error: Error, req: Request, res: Response): Response => {
  logger.error({
    name: error.name,
    message: error.message,
    stack: error.stack,
    url: req.url,
  });
  if (error instanceof NotFoundError)
    return httpResponse.NotFound(res, error.message);
  if (error instanceof UnhauthorizedError)
    return httpResponse.Unauthorized(res, error.message);
  return httpResponse.ServerError(res, error, req.url);
};
