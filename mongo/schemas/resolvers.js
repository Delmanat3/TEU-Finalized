const { AuthenticationError } = require('apollo-server-express');
const { Product,Tag,pTag,Category } = require('../models');
const { signToken } = require('../utils/auth');



const resolvers={

    Query:{
      products:async()=>{
        return Product.find({})
      },
        
    },


  
  }
    module.exports = resolvers;
    


