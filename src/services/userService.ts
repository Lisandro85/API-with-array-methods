import users from "../data/data";

import { User } from "../interfaces/user";
import crypto from "crypto";

export const getUserService = async (): Promise<User[]> => {
  return await users;
};

export const getUserByIdService = async (id: User["id"]): Promise<User> => {
  const foundUser = await users.find((user) => user.id === id);
  if (!foundUser) {
    throw new Error("user not found");
  }
  return foundUser;
};

export const updateUserService = async (
  id: User["id"],
  data: Partial<User>
): Promise<Partial<User>> => {
  const userFaund = await users.find((user) => user.id === id);
  console.log("Usuario encontrado:", userFaund);
  if (!userFaund) {
    throw new Error("user not found");
  }
  Object.assign(userFaund, data);
  return userFaund;
};

export const createUserService = async (
  data: Omit<User, "id">
): Promise<User> => {
  const { name, email, age, isActive } = data;

  if (!name || !email || age === undefined || isActive === undefined) {
    throw new Error("complete todos los campos");
  }
  if (age < 18) {
    throw new Error("Debes ser mayor de edad para registrarte");
  }
  const id = crypto.randomUUID();
  const newuser = { id, ...data };
  users.push(newuser);
  return newuser;
};

export const deleteUserService = async (
  id: User["id"]
): Promise<{ message: string }> => {
  const foundUser = await users.findIndex((user) => user.id === id);
  if (foundUser === -1) {
    throw new Error("Usuario no encontrado");
  }

  users.splice(foundUser, 1);
  return { message: "Usuario eliminado con exito" };
};
