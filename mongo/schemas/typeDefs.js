const { gql } = require('apollo-server-express');


const typeDefs=`

type Product {
    _id:ID!
    product_name:String!
    price:String!
    stock:Int!
    cat_id:Category!
   
}
type User {
    _id:ID!
    name:String!
    email:String!
    password:String!
   cart:Product
}
type Auth{
    token:ID!
    user:User
}
type Tag{
    _id:ID!
    name:String!
}

type pTag{
_id:ID!
product_id:Product!
tag_id:Tag!
}

type Category{
_id:ID!
cat_name:String!

}



type Query{
    products:[Product]!
    product(_id:ID!):Product
    me:User
    categories:[Category]!
}
type Mutation{
    
    login(email: String!, password: String!): Auth
    addUser(name: String!, email: String!, password: String!): Auth
}


`
// addData(name:String!,description:String,links:[String],coinId:String!,images:[String],price:[String],supply:String,date_added:String):User
// type Mutation {
//     addData(coinData:newCoin):Coin
//     addUser(name: String!, email: String!, password: String!,pic:String,bio:String): Auth
//     addFav(coin:String!): User
//     login(email: String!, password: String!): Auth
//     removeUser: User

// }
module.exports = typeDefs;