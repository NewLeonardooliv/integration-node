import { Router } from "express";
import { commands } from "./commands.routes";
import { gitlab } from "./gitlab.routes";
import { slack } from "./slack.routes";

const router = Router();

router.get("/", (req, res) => {
  return res.status(201).json({
    response: "API Online",
  });
});

router.use("/gitlab", gitlab);
router.use("/slack", slack);
router.use("/command", commands);


export { router };
