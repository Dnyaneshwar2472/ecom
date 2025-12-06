import express from 'express'
import cors from'cors'
import connectDB from './config/mongoDB.js';
import productRouter from './routers/product.router.js';



const app = express();
app.use(cors());
app.use(express.json()); 

connectDB();

app.get('/', (req,res)=>{
res.send('Hello World!');
});

app.use('/product',productRouter)

app.listen(5000,()=>{
    console.log('server listning to  port 5000')
});