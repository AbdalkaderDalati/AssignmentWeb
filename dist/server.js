"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const car_routes_1 = __importDefault(require("./routes/car.routes"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const interest_routes_1 = __importDefault(require("./routes/interest.routes"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const PORT = 3000;
// Make sure you have this middleware!
app.use(express_1.default.json());
// Routes
app.use('/cars', car_routes_1.default);
app.use('/users', user_routes_1.default);
app.use('/interests', interest_routes_1.default);
// Serve static file
app.get('/', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../index.html'));
});
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
