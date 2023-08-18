const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");

const helmet = require("helmet");
require("dotenv").config();
// const fileUpload = require("express-fileupload");

//express
const app = express();
const cloudinary = require("cloudinary");

//confiuration

app.use(express.json());
app.use(cors());
app.use(express.urlencoded(process.env.REF_TOKEN_SECRET));

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      imgSrc: ["'self'", "*.cloudinary.com", "*.google.com"],
    },
  })
);

//import router

const authRouter = require("./router/authRouter");


//config router
app.use(`/api/v1/auth`, authRouter);



//setting port
const PORT = 5000 || process.env.PORT;
const connectDb=require('./db')


const start=async()=>{
    try{
        await connectDb(process.env.MONGO_URL)
        app.listen(PORT, () => {
            console.log(`server is listening on port http://localhost:${PORT}`);
          });

    }catch (err){
        throw(err)
    }

}

start();



