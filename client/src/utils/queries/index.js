import { gql } from '@apollo/client';

export const GET_PRODUCTS = gql`
  {
    products{
   product_name
   price
   stock
    }
  }

  
`;

export const GET_NEWS = gql`
  {
    news{
   title
   desc
   image
   date
   image
   source
   url
   snip
    }
  }

  
`;
export const QUERY_USER = gql`
  query user($email: String!) {
    user(email: $email) {
      _id
      name
      email
      pic
      bio
    }
  }
`;
export const GET_ME = gql`
  query me{
    me {
      _id
      name
      email
      saved_coin
    }
  }
`;
