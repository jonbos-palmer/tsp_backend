import { Router } from "express";
import { signup } from "../controllers/user";
const router = Router();

router.post("/signup", signup);

module.exports = router;
