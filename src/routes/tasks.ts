import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

router.get('/', async (_req, res) => {
  try {
    const tasks = await prisma.task.findMany({ orderBy: { createdAt: 'desc' } });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch tasks' });
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const task = await prisma.task.findUnique({ where: { id: Number(id) } });
    if (!task) return res.status(404).json({ error: 'Task not found' });
    res.json(task);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch task' });
  }
});

router.post('/', async (req, res) => {
  const { title, color, completed } = req.body;
  if (!title) return res.status(400).json({ error: 'Title is required' });
  try {
    const task = await prisma.task.create({
      data: { title, color: color || 'bg-red-200', completed: completed ?? false },
    });
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create task' });
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { title, color, completed } = req.body;
  if (!title) return res.status(400).json({ error: 'Title is required' });
  try {
    const task = await prisma.task.update({
      where: { id: Number(id) },
      data: { title, color, completed },
    });
    res.json(task);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update task' });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.task.delete({ where: { id: Number(id) } });
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete task' });
  }
});

export default router;