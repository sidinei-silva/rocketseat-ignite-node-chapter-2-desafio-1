import express, { NextFunction, Request, Response } from "express";

import { usersRoutes } from "./routes/users.routes";
import { AppError } from "./shared/errors/AppError";

const app = express();

app.use(express.json());

app.use("/users", usersRoutes);

app.use((err: Error, request: Request, response: Response, _next: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      error: err.message,
    });
  }
  return response.status(500).json({
    status: "error",
    message: `Internal server error - ${err.message}`,
  });
});

export { app };
