import express from "express";
import Youch from "youch";

import routes from "./routes";

import "../database";

class App {
    constructor() {
        this.server = express();

        this.routes();
        this.exceptionHandler();
    }

    routes() {
        this.server.use(routes);
    }

    exceptionHandler() {
        this.server.use(async (err, req, res, next) => {
            const errors = await new Youch(err, req).toJSON();
            return res.status(500).json(errors);
        });
    }
}

export default new App().server;
