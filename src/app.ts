import express from 'express';
import { sortArray } from './controllers/sortArray';
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;
app.use(express.json())

app.post('/sort', sortArray);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});


export default app;