import {GET_PRODUCTS} from'../../utils/queries/index';
import {useQuery} from '@apollo/client';

export const X=()=>{
 const {loading,data}= useQuery(GET_PRODUCTS)
 
 if(loading) return "loading...."

 console.log(data)
 return(
     <div>

     </div>
 )
   }
