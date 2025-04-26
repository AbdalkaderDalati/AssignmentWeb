import { Router, Request, Response } from 'express';

const router = Router();

let cars: { brand: string; model: string; classType: 'A' | 'B' | 'C' }[] = [];

router.get('/', (req: Request, res: Response) => {
  res.json(cars);
});

router.post('/', (req: Request, res: Response) => {
  const { brand, model, classType } = req.body;
  cars.push({ brand, model, classType });
  res.status(201).json({ message: 'Car added successfully!' });
});

router.delete('/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  if (id >= 0 && id < cars.length) {
    cars.splice(id, 1);
    res.json({ message: 'Car deleted successfully!' });
  } else {
    res.status(404).json({ message: 'Car not found.' });
  }
});

router.get('/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const car = cars[id];
  if (car) {
    res.json(car);
  } else {
    res.status(404).json({ message: 'Car not found.' });
  }
});

export default router;
