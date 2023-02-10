import request from 'supertest';
import { sortArray } from '../controllers/sortArray';
import { Application } from 'express';
import app from '../app';

describe('sortArray', () => {
    it('should return an error if the request body does not contain an array property', async () => {
      const res = await request(app).post('/sort');
      expect(res.status).toBe(400);
      expect(res.body.error).toBe('The request body must contain an array property.');
    });
    
    it('should return an error if the array property is not an array', async () => {
      const res = await request(app).post('/sort').send({ array: {} });
      expect(res.status).toBe(400);
      expect(res.body.error).toBe('The array property must be an array.');
    });
    
    it('should return an error if one or more elements in the array are not numbers', async () => {
      const res = await request(app).post('/sort').send({ array: [1, '2', 3] });
      expect(res.status).toBe(400);
      expect(res.body.error).toBe('All elements in the array must be numbers.');
    });
    
    it('should return the sorted array', async () => {
      const res = await request(app).post('/sort').send({ array: [3, 1, 2] });
      expect(res.status).toBe(200);
      expect(res.body.sortedArray).toEqual([1, 2, 3]);
    });
    });
    