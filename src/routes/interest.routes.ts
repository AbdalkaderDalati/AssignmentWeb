import { Router, Request, Response } from 'express';

const router = Router();

let interests: { userId: number; carId: number }[] = [];

router.post('/', (req: Request, res: Response) => {
  const { userId, carId } = req.body;
  interests.push({ userId, carId });
  res.status(201).json({ message: 'Interest added successfully!' });
});

router.get('/:userId', (req: Request, res: Response) => {
  const userId = parseInt(req.params.userId);
  const userInterests = interests.filter((interest) => interest.userId === userId);
  res.json(userInterests);
});

export default router;
