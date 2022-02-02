const router=require('express').Router()
const Product=require('./products');
const Category=require('./category');
const Tag=require('./tags');
const pTag=require('./productTag');
const User=require('./User');




module.exports={
    Product:Product,
    Category:Category,
    Tag:Tag,
    pTag:pTag,
    User:User
}