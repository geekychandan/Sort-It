import express from 'express';
import quickSort from './sort/sorting';
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;
app.use(express.json())

app.post('/sort', (req, res) => {
    const array = req.body.array;
    if (!array) {
        return res.status(400).send({ error: "The 'array' property is missing from the request body" });
      }
    quickSort(array, 0, array.length - 1);
    res.send({
      sortedArray: array,
    });
  });
  

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
