import  {useState} from 'react';
import yelp from '../api/yelp';
export default ()=>{
    const [result,setResult]=useState({

        data:null,
        loading:false,
        error:null,
    })

    const searchRestaurant=async (id)=>{
        setResult({
            data:null,
            loading:true,
            error:null,
        })
        try {
            
            const response=await yelp.get(`/${id}`)
            console.log(response.data)
            setResult({
                data:response.data,
                loading:false,
                error:null,
            })
            
        } catch (error) {
              console.log(error)
            setResult({
                data:null,
                loading:false,
                error:"Something went wrong",
            })
        }
       }
       return [result,searchRestaurant]
}