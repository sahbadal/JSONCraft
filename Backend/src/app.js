import express from 'express';
import  cors from 'cors'



const app = express();

//midlewares 
app.use(express.json({limit:"16kb"}));
app.use(express.urlencoded({extended:true}));
app.use(cors())


// Routes
import postRoutes from './routes/postRoute.js';
import productRoutes from './routes/productRoute.js';
import jokeRoutes from './routes/jokeRoute.js';
import quoteRoutes from './routes/quoteRoute.js';
import complexUserRoutes from './routes/complexUserRoute.js';
import userRoutes from './routes/userRoute.js';
import errorRoutes from './routes/errorRoute.js';
import customRoutes from './routes/customRoute.js';
import todoRoutes from './routes/todoRoute.js';

app.use('/api/v1/posts', postRoutes);
app.use('/api/v1/products', productRoutes);
app.use('/api/v1/jokes', jokeRoutes);
app.use('/api/v1/quotes', quoteRoutes);
app.use('/api/v1/complex-users', complexUserRoutes);
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/errors', errorRoutes);
app.use('/api/v1/custom', customRoutes);
app.use('/api/v1/todos', todoRoutes);


export default app;