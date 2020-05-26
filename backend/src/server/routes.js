import { Router } from "express";

import UserController from "../app/controllers/UserController";
import LocationController from "../app/controllers/LocationController";

const routes = new Router();

routes.post("/users", UserController.store);
routes.post("/locations", LocationController.store);

export default routes;
