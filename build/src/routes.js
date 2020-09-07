"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ClassesController_1 = __importDefault(require("./controllers/ClassesController"));
const Connectionscontroller_1 = __importDefault(require("./controllers/Connectionscontroller"));
const routes = express_1.default.Router();
const classesController = new ClassesController_1.default();
const connectiomsController = new Connectionscontroller_1.default();
routes.post('/classes', classesController.create);
routes.get('/classes', classesController.index);
routes.post('/connections', connectiomsController.create);
routes.get('/connections', connectiomsController.index);
exports.default = routes;
