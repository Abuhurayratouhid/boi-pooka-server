import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import httpStatus from 'http-status';
import { usersRoutes } from './app/modules/users/users.route';
import globalErrorHandler from './middleware/globalErrorHandler';
import { cowRoutes } from './app/modules/cow/cow.route';
import { usersController } from './app/modules/users/users.controller';
import { BookRoutes } from './app/modules/books/book.route';
// import globalErrorHandler from './app/middleware/globalErrorHandler';
// import routes from './app/routes';
const app: Application = express();

// middleware
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Application routes

app.use('/api/v1', BookRoutes);

// testing route
app.get('/', async (req: Request, res: Response) => {
  res.send('boiPooka sever is running 👍👍');
});

app.use(globalErrorHandler);

// Handle Not Found Route
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Route Not Found',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'Api Not Found',
      },
    ],
  });
  next();
});

export default app;
