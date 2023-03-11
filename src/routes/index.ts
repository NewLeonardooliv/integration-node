import { Router } from "express";
import { gitlab } from "./gitlab.routes";

const router = Router();

router.get("/", (req, res) => {
  return res.status(201).json({
    response: "API Online",
  });
});

router.use("/gitlab", gitlab);


export { router };
