 import React from 'react'
 import {Anouncement, Nav, Slider, Categories, Seperator,SearchFilter,Products,Footer,Newsletter} from '../../components'
 const Home = () => {
     return (
         <div>
             <Anouncement/> 
            <Nav/> 
            <Slider/>
            <Categories/>
            <Seperator title='Products'/>
            <SearchFilter/> 
            <Products cat=''/>
            <Newsletter/>
            <Footer/>
         </div>
     )
 }
 
 export default Home
 