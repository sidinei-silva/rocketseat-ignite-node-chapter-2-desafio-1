import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

interface IHeaders {
  user_id: string;
}

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers;

    if (!user_id) {
      throw new Error("user_id not send");
    }

    const users = this.listAllUsersUseCase.execute(<IHeaders>{ user_id });

    return response.status(200).json(users);
  }
}

export { ListAllUsersController };
