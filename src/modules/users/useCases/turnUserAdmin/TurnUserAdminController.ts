import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

interface IParams {
  user_id: string;
}

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;
    const user = this.turnUserAdminUseCase.execute(<IParams>{ user_id });
    return response.status(200).json(user);
  }
}

export { TurnUserAdminController };
