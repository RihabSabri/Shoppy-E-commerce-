import React,{useState,useEffect} from 'react'
import SingleProduct from './SingleProduct'
import './Products.css'
import axios from 'axios'

const Products = ({cat,filters}) => {
    
    const [limit,setLimit]=useState(12)
    const [products,setProducts]=useState([])
    const [filteredProd,setFilteredProd]=useState([])

    useEffect(()=>{
        const getProducts=async()=>{
            try{
                  
                  const res=await axios.get(cat?`http://localhost:5000/api/products?category=${cat}`:`http://localhost:5000/api/products?limit=${limit}`)
                   setProducts(res.data.products)
                  
            }
            catch(error){
                console.log(error)
            }
        }
        getProducts()
        
      
    },[cat,limit])


    
      useEffect(()=>{
            cat&&setFilteredProd(
              products.filter((product)=> Object.values(filters).includes(product.brand)||Object.values(filters).includes(product.category[1]))
              )
      },[filters])

      console.log(filteredProd)


      if(filteredProd.length==0){
             return (
        
        <div>
           
            <div className="products-container">
                {   
                   products.map((product)=>(
                    <SingleProduct product={product} key={product._id}/>))
                }
            </div>
              <div className='load-container'>
            <button onClick={()=>setLimit(limit*2)} className="btn-5">
                load more
            </button>
        </div> 
     
        </div>
    )
                
            }
  
    return (
        
        <div>
           
            <div className="products-container">
                {   
                   filteredProd.map((product)=>(
                    <SingleProduct product={product} key={product._id}/>))
                }
            </div>
              <div className='load-container'>
            <button onClick={()=>setLimit(limit*2)} className="btn-5">
                load more
            </button>
        </div> 
     
        </div>
    )
}

export default Products
