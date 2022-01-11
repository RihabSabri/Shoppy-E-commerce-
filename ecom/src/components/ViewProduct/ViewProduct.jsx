import React,{useState,useEffect} from 'react'
import './ViewProduct.css'
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import RemoveOutlinedIcon from '@material-ui/icons/RemoveOutlined';
import { useLocation } from 'react-router-dom';
import { useDispatch} from 'react-redux'
import { addProduct } from '../../redux/cartRedux';
import axios from 'axios';


const ViewProduct = () => {
const prod=useLocation().pathname.split('/')[2]
const [product,setProduct]=useState([])
const [size,setSize]=useState('')
const [quantity,setQuantity]=useState(1)
const dispatch=useDispatch()


    const handleAdd=()=>{
        setQuantity(quantity+1)
    }
    const handleRemove=()=>{
        if( quantity>1){
            setQuantity(quantity-1)
        }
        else{
            setQuantity(quantity)
        }
    }

    useEffect(()=>{
        const getProduct=async()=>{
         try{
                
                const res=await axios.get(`http://localhost:5000/api/products/${prod}`)
                setProduct(res.data.product)
            }
            catch(error){
                console.log(error)
            }
        }
        getProduct()

    },[prod])
    


    const cartHandler=()=>{
       dispatch(addProduct({...product,quantity,size}))
    }




    return (
        <div className='view-product'>
            <div className="view-product-center">
                <div className="image-section">
                    <img src={product.image} alt="View product image" className="image-product-view" />
                </div>
                <div className="info-section">
                   <p className="title-product">
                           {product.title}
                   </p>
                   <h2 className='price-product'>
                         {product.price} DT
                   </h2>
                     <h5 className="desc-product">
                            {product.desc}
                   </h5>
                   <hr className='hr-prod'/>
                    <div className="select-container">
                        <div className='select'>
                        <h5 className="size" >
                            Size
                        </h5>
                        <select className='select-size' onChange={(e)=> setSize(e.target.value)}>
                             {product.size?.map((option)=>(<option className='option' key={option} value={option}>{option.toUpperCase()}</option>))}
                      </select>
                      </div>
                      <div className="quantity">
                            <button className='btn-quantity' onClick={handleAdd}>
                                <AddOutlinedIcon/>
                            </button>
                           <span className="number"> {quantity}</span>
                            <button className='btn-quantity' onClick={handleRemove} >
                                <RemoveOutlinedIcon/>
                            </button>
                      </div>
                    </div> 
                     <button className="btn-bag" onClick={cartHandler}> 
                       Add to bag
                     </button>
                </div>
                
            </div>
        </div>
    )
}

export default ViewProduct
