import express from 'express';
import cors from 'cors';
import taskRouter from './routes/tasks';

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use('/tasks', taskRouter);

app.listen(port, () => console.log(`Server running on port ${port}`));