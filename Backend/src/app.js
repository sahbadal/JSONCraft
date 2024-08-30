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

app.use('/posts', postRoutes);
app.use('/products', productRoutes);
app.use('/jokes', jokeRoutes);
app.use('/quotes', quoteRoutes);
app.use('/complex-users', complexUserRoutes);
app.use('/users', userRoutes);
app.use('/errors', errorRoutes);
app.use('/custom', customRoutes);
app.use('/todos', todoRoutes);


export default app;