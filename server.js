import express from "express";
import {engine} from 'express-handlebars';
import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
mongoose.connect(process.env.mongoconnectionurl);
const app = express();

app.engine('handlebars',engine());
app.set('view engine','handlebars');
app.set('views','./tamplates')


app.listen(process.env.port,() =>{
console.log(`started the application on http://localhost:${process.env.port}`);
}

);