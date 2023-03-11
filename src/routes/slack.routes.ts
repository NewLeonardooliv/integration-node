import { Router } from "express";
import { adapterRoute } from "../core/infra/adapters/ExpressRouteAdapter";
import { allUsersController } from "../infra/factories/controllers/AllUsersControllerFactory";
import { findUserByIdOrNameController } from "../infra/factories/controllers/FindUserByIdOrNameControllerFactory";
import { sendMensageToUserController } from "../infra/factories/controllers/SendMessageToUserControllerFactory";

const slack = Router();

slack.get("/allUsers", adapterRoute(allUsersController));
slack.post("/userByIdOrName", adapterRoute(findUserByIdOrNameController));
slack.post("/sendMessageToUser", adapterRoute(sendMensageToUserController));

export { slack }