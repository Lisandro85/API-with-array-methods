import { Request, Response } from "express";
import {
  getUserByIdService,
  getUserService,
  updateUserService,
  createUserService,
  deleteUserService,
} from "../services/userService";

export const getUsersController = async (req: Request, res: Response) => {
  try {
    const result = await getUserService();
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: "Error al obtener usuarios" });
  }
};

export const getUserByIdController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await getUserByIdService(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: "Error al obtener el usuario" });
  }
};

export const updateUserController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const result = await updateUserService(id, data);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error: "Error al actualizar el usuario" });
  }
};

export const createUserController = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const result = await createUserService(data);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};

export const deleteUserController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await deleteUserService(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};
