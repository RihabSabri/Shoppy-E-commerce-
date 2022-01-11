import React,{useState} from 'react'
import {ArrowLeftOutlined, ArrowRightOutlined} from '@material-ui/icons'
import { Link } from 'react-router-dom'

import './Slider.css'

const Slider = () => {
    const [sliderIndex,setSliderIndex]= useState(0)
    const handleClick=(direction)=>{
            if (direction==='left'){
                setSliderIndex(sliderIndex>0?sliderIndex-1
                :2)
            }

            else{
                setSliderIndex(sliderIndex<2? sliderIndex+1:0)
            }
            

    }

    return (
        <div className='slider-container'>
            <span className='left-arrow' onClick={()=>handleClick("left")}>
                <ArrowLeftOutlined/>
            </span>  
              <div className="wrapper" >
                {sliderIndex===0 &&

                
                  <div className="slide-1">
                     <div className="image-container">
                       <img className="image-slider" src="model1.png" alt="slider one"/>
                     </div> 
                     <div className="text-container">
                            <h3 className='description-title'>
                                New shopping experience    
                            </h3>
                            <h1 className="title hr">
                                SHOPPY
                            </h1>
                            <div className="btns-cont">
                                <Link to='/products/women'>
                                <button className="btn-1">
                                shop now
                            </button>
                            </Link>
                              <Link to='/products/men'>
                              <button className="btn-2">
                                Browse
                              </button>
                              </Link>
                            </div>
                            
                     </div>
                  </div>
                  }
                  { sliderIndex===1 &&
                      <div className="slide-2">
                     <div className="image-container">
                       <img className="image-slider" src="SlideImg.png" alt="image slider"/>
                     </div> 
                     <div className="text-container">
                            <h3 className='description-title'>
                                Top quality trendy fits for all sizes    
                            </h3>
                            <h1 className="title hr">
                                SHOPPY
                            </h1>
                            <div className="btns-cont">
                                <button className="btn-1">
                                shop now
                                </button>
                                <button className="btn-2">
                                Browse
                               </button>
                            </div>
                     </div>
                  </div>}
                    <div className="slide-3">
                      <div className="image-container">
                      <img className="image-slider" src='model3.png' alt="image slider"/>
                      </div> 
                    <div className="text-container">
                            <h3 className='description-title'>
                                Shop now and enjoy great deals !   
                            </h3>
                            <h1 className="title hr">
                                SHOPPY
                            </h1>
                             <div className="btns-cont">
                                 <Link to=''>
                                    <button className="btn-1">
                                    shop now
                                   </button>
                                </Link>
                              <button className="btn-2">
                                Browse
                            </button>
                            </div>
                     </div>
                  </div>
              </div> 
            <span className='right-arrow' onClick={()=>handleClick("right")}>
                <ArrowRightOutlined/>
            </span>
        </div>
    )
}

export default Slider
