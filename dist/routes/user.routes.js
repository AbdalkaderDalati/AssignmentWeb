"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
let users = [];
// Add new user
router.post('/', (req, res) => {
    const { name, age } = req.body;
    users.push({ name, age });
    res.status(201).json({ message: 'User added successfully!' });
});
// Get user info by id (index)
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users[id];
    if (user) {
        res.json(user);
    }
    else {
        res.status(404).json({ message: 'User not found.' });
    }
});
// Remove user by id (index)
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (id >= 0 && id < users.length) {
        users.splice(id, 1);
        res.json({ message: 'User deleted successfully!' });
    }
    else {
        res.status(404).json({ message: 'User not found.' });
    }
});
exports.default = router;
