import { Request, Response } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    const { name, email } = request.body;
    const user = this.createUserUseCase.execute({ email, name });
    return response.status(201).json(user);
  }
}

export { CreateUserController };
