import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from "cors";


const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

import heathCheckRouter from './routes/healthcheck.route.js'


app.use('/api/healthCheck', heathCheckRouter)




app.listen(process.env.PORT, () => {
  console.log(`app is runnning on port ${process.env.PORT}`);
});



export default app