import { v4 as uuidv4 } from "uuid";
let users = [];
// CREATE
export const createUser = (req, res) => {
    const user = req.body;
    users.push({ ...user, id: uuidv4() });
    res.send(`User with the name ${user.firstName} added to the database!`);
};
// READ ALL
export const getUsers = (req, res) => {
    res.json(users);
};
// READ ONE
export const getUser = (req, res) => {
    const { id } = req.params;
    const foundUser = users.find((user) => user.id === id);
    if (!foundUser) {
        res.status(404).send("User not found");
        return;
    }
    res.json(foundUser);
};
// DELETE
export const deleteUser = (req, res) => {
    const { id } = req.params;
    users = users.filter((user) => user.id !== id);
    res.send(`User with the id ${id} deleted from the database.`);
};
// UPDATE (PATCH)
export const updateUser = (req, res) => {
    const { id } = req.params;
    const user = users.find((user) => user.id === id);
    if (!user) {
        res.status(404).send("User not found");
        return;
    }
    const { firstName, lastName, age } = req.body;
    if (firstName)
        user.firstName = firstName;
    if (lastName)
        user.lastName = lastName;
    if (age)
        user.age = age;
    res.send(`User with the id ${id} has been updated`);
};
//# sourceMappingURL=users.controller.js.map