import { Request, Response, NextFunction, RequestHandler } from "express";
import { User, UserDocument } from "../models/User";

export const signup: RequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body;

  // Search for existing user

  // Create user w/ username and password

  const user: UserDocument = new User({ email, password });

  user.save((err, user) => {
    if (err) {
      res.json({ err });
    } else {
      res.json({ msg: "Signup Successful!" });
    }
  });
};
