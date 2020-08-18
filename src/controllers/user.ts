import { Request, Response, NextFunction, RequestHandler } from "express";

export const signup: RequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.json({ body: req.body });
};
