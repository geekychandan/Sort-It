import { Request, Response } from 'express';
import  quickSort  from '../sort/sorting';

export const sortArray = (req: Request, res: Response) => {
if (!req.body.array) {
return res.status(400).send({ error: 'The request body must contain an array property.' });
}

if (!Array.isArray(req.body.array)) {
return res.status(400).send({ error: 'The array property must be an array.' });
}

if (!req.body.array.every((element:number) => typeof element === 'number')) {
return res.status(400).send({ error: 'All elements in the array must be numbers.' });
}

const array = req.body.array;
quickSort(array, 0, array.length - 1);
res.send({
sortedArray: array,
});
};