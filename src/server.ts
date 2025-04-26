import express, { Request, Response } from 'express';
import carRoutes from './routes/car.routes';
import userRoutes from './routes/user.routes';
import interestRoutes from './routes/interest.routes';
import path from 'path';

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/cars', carRoutes);
app.use('/users', userRoutes);
app.use('/interests', interestRoutes);

app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
