import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import cors from "cors"
import userRouter from "./routes/userRouter.js"
import categoryRouter from "./routes/categoryRoutes.js"
import productRouter from "./routes/productRouter.js";



dotenv.config();
connectDB();
const PORT = process.env.PORT || 3000;
const app = new express();




if (process.env.NODE_ENV === "development"){
   app.use(morgan('dev'));
}

app.use(cors())

app.use(express.json());

app.use(express.urlencoded({extended:true}))

app.get('/', (req, res) => {
   res.send('API is running...')
})

app.listen(PORT, console.log(`Server is running in ${process.env.NODE_ENV} on port ${PORT}!!!`))

app.use("/user", userRouter)
app.use("/category", categoryRouter)
app.use("/product", productRouter)