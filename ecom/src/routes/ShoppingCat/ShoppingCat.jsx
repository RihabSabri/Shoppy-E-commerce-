import React, {useState} from 'react'
import  './ShoppingCat.css'
import {Nav, Footer,Anouncement, Seperator,SearchFilter,Products,Newsletter} from '../../components'
import { useLocation } from 'react-router-dom';
import"../../components/FilterSider/FilterSider.css"
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const ShoppingCat = () => {

    const options = ["dresses","shirts","pants","accessories"]
    const brands = ["Dolce&Banana","Chad Vuiton","AlexanderBang","Bendi","Moschito"]


    const [filters,setFilters]=useState({})
  

    const handleFilters=(e)=>{
      const checked=e.target.checked
      const value=e.target.value;
      checked? setFilters({...filters,[e.target.name]:value}) :setFilters(delete filters[e.target.name])
      
    }
    console.log(filters)

    const cat=useLocation().pathname.split('/')[2]
    // console.log(cat)
    return (
        <div>
            <Nav/>
            <Anouncement/>
             <Seperator title={` ${cat} fashion`}/>
             <SearchFilter/>
            <div className="shopCat-conatiner">
            <div className="sider-space">
           <div className="filter-container">
            <div className="inside-container">
          <p className='filter-title'> Departement</p>
          {options.map((option)=>(
           <FormGroup name='dep' >
            <FormControlLabel name='category' onChange={handleFilters} control={<Checkbox/>} label={<span style={{ fontSize: '14px' , fontFamily:"playfair", color:"#1f1e1e"}}>{option}</span>} value={option}/>
            </FormGroup>
          ))}
           <p className='filter-title'>Brands</p> 
           {brands.map((option)=>(
            <FormGroup name='brand' >
            <FormControlLabel name='brand' onChange={handleFilters}  control={<Checkbox />}   label={<span style={{ fontSize: '14px' , fontFamily:"playfair", color:"#1f1e1e"}}>{option}</span>} value={option}/>
            </FormGroup>
            
          ))}
           
         <p className='filter-title'>payement</p>
            <FormGroup name='pay' >
            <FormControlLabel name='delivery' onChange={handleFilters} control={<Checkbox 
            />} label={<span style={{ fontSize: '14px' , fontFamily:"playfair", color:"#1f1e1e"}}>Pay on delivery</span>} value="onDelivery"/>
            <FormControlLabel  name='sale' className="checks" control={<Checkbox onChange={handleFilters}/>} label={<span style={{ fontSize: '14px' , fontFamily:"playfair", color:"#1f1e1e"}}>on sale</span >} value="onSale"/>
            </FormGroup>
            </div>
           
        </div>
            </div>
            <div className="rest-page-container">
            <Products cat={cat} filters={filters}/>
            </div>
            </div>
            <Newsletter/> 
    <Footer/>
            
        </div>
    )
}

export default ShoppingCat
