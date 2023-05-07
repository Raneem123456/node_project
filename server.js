import express from "express";
import {engine} from 'express-handlebars';
import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
mongoose.connect(process.env.mongoconnectionurl);
import subjectsRouter from './routes/subjects.js';
const app = express();
app.use(express.urlencoded({extended: true}));
app.engine('handlebars',engine());
app.set('view engine','handlebars');
app.set('views','./tamplates')
app.use('/subjects',subjectsRouter);

app.listen(process.env.port,() =>{
console.log(`started the application on http://localhost:${process.env.port}`);
}

);