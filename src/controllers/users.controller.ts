import type { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import type { User } from "../types/user.type.js";

let users: User[] = [];

// CREATE
export const createUser = (req: Request, res: Response): void => {
  const user = req.body as User;

  users.push({ ...user, id: uuidv4() });

  res.send(`User with the name ${user.firstName} added to the database!`);
};

// GET ALL USERS
export const getUsers = (req: Request, res: Response): void => {
  res.json(users);
};

// GET ONE USER
export const getUser = (req: Request, res: Response): void => {
  const { id } = req.params;

  const foundUser = users.find((user) => user.id === id);

  if (!foundUser) {
    res.status(404).send("User not found");
    return;
  }

  res.json(foundUser);
};

// DELETE
export const deleteUser = (req: Request, res: Response): void => {
  const { id } = req.params;

  users = users.filter((user) => user.id !== id);

  res.send(`User with the id ${id} deleted from the database.`);
};

// UPDATE (PATCH)
export const updateUser = (req: Request, res: Response): void => {
  const { id } = req.params;
  const user = users.find((user) => user.id === id);

  if (!user) {
    res.status(404).send("User not found");
    return;
  }

  const { firstName, lastName, age } = req.body as User;

  if (firstName) user.firstName = firstName;
  if (lastName) user.lastName = lastName;
  if (age) user.age = age;

  res.send(`User with the id ${id} has been updated`);
};