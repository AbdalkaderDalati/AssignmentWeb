"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
let interests = [];
// Add user interest (connects user and car)
router.post('/', (req, res) => {
    const { userId, carId } = req.body;
    interests.push({ userId, carId });
    res.status(201).json({ message: 'Interest added successfully!' });
});
// Get all user interests by user id
router.get('/:userId', (req, res) => {
    const userId = parseInt(req.params.userId);
    const userInterests = interests.filter((interest) => interest.userId === userId);
    res.json(userInterests);
});
exports.default = router;
