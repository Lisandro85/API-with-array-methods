import { Router } from "express";
import {
  getUsersController,
  getUserByIdController,
  updateUserController,
  createUserController,
  deleteUserController,
} from "../controllers/userController";

const routerUser: Router = Router();

routerUser.get("/", getUsersController);
routerUser.get("/:id", getUserByIdController);
routerUser.patch("/:id", updateUserController);
routerUser.post("/", createUserController);
routerUser.delete("/:id", deleteUserController);
export default routerUser;
