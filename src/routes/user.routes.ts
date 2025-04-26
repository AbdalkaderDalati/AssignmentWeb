import { Router, Request, Response } from 'express';

const router = Router();

let users: { name: string; age: number }[] = [];

router.post('/', (req: Request, res: Response) => {
  const { name, age } = req.body;
  users.push({ name, age });
  res.status(201).json({ message: 'User added successfully!' });
});

router.get('/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const user = users[id];
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'User not found.' });
  }
});

router.delete('/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  if (id >= 0 && id < users.length) {
    users.splice(id, 1);
    res.json({ message: 'User deleted successfully!' });
  } else {
    res.status(404).json({ message: 'User not found.' });
  }
});

export default router;
