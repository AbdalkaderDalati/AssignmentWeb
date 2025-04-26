"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
let cars = [];
// Get all cars
router.get('/', (req, res) => {
    res.json(cars);
});
// Add new car
router.post('/', (req, res) => {
    const { brand, model, classType } = req.body;
    cars.push({ brand, model, classType });
    res.status(201).json({ message: 'Car added successfully!' });
});
// Delete existing car by index
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (id >= 0 && id < cars.length) {
        cars.splice(id, 1);
        res.json({ message: 'Car deleted successfully!' });
    }
    else {
        res.status(404).json({ message: 'Car not found.' });
    }
});
// Get car using id (index)
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const car = cars[id];
    if (car) {
        res.json(car);
    }
    else {
        res.status(404).json({ message: 'Car not found.' });
    }
});
exports.default = router;
