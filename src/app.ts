import express, { Request, Response } from 'express';
import morgan from 'morgan';
import { router as tourRouter } from './routes/tourRoutes';

const app = express();

app.disable('x-powered-by');

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.use((req: Request, res: Response, next: any) => {
  next();
});

app.use('/api/v1/tours', tourRouter);

module.exports = app;
