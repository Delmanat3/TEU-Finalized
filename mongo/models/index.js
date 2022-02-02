const router=require('express').Router()
const Product=require('./products');
const Category=require('./category');
const Tag=require('./tags');
const pTag=require('./productTag');
const User=require('./User');
const Order=require('./order');





module.exports = { Order ,User, Product, Category, };
