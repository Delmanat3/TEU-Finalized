const { AuthenticationError } = require('apollo-server-express');
const { Product,Tag,pTag,Category,User } = require('../models');
const { signToken } = require('../utils/auth');



const resolvers={

    Query:{
      products:async()=>{
        return Product.find({})
      },  
       me: async (parent, args, context) => {
        if (context.user) {
          const userData = await User.findOne({ _id: context.user._id }).select('-__v -password');
          return userData;
        }
        throw new AuthenticationError('You need to be logged in!');
      },
      categories:async()=>{
        return Category.find({})
      }
        
    },
    Mutation:{
      addUser: async (parent, { name, email, password }) => {
        const profile = await User.create({ name, email, password });
        const token = signToken(profile);
  
        return { token, profile };
      },
        login: async (parent, { email, password }) => {
        const profile = await User.findOne({ email });
  
        if (!profile) {
          throw new AuthenticationError('No profile with this email found!');
        }
  
        const correctPw = await profile.isCorrectPassword(password);
  
        if (!correctPw) {
          throw new AuthenticationError('Incorrect password!');
        }
  
        const token = signToken(profile);
        return { token, profile };
      },
    }


  
  }
    module.exports = resolvers;
    


