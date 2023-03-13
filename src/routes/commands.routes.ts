import { Router } from "express";
import { adapterRoute } from "../core/infra/adapters/ExpressRouteAdapter";
import { updateDatabaseController } from "../infra/factories/controllers/UpdateDatabaseControllerFactory";

const commands = Router();

commands.get('/updateDatabase/:script', adapterRoute(updateDatabaseController));

export { commands }
