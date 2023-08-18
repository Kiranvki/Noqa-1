const auth=require('../model/authModel')
const express=require('express')
const Router=express.Router();
const authController=require('../controller/authController')

Router.post(`/register`,authController.register)



module.exports=Router



