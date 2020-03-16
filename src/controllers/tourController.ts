import fs from 'fs';
import { Request, Response } from 'express';

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../../dev-data/data/tours-simple.json`, 'utf8')
);

const getAllTours = (req: Request, res: Response) => {
  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: {
      tours
    }
  });
};

export { getAllTours };
