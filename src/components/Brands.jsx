import React from 'react';

export default function Brands() {
  return(
    <div>        
    <h2 className='w3-padding'>BIGGEST DEALS ON TOP BRANDS</h2><br />
    <div className="d-flex justify-content-evenly">
      {
        sampleImg.slice(0,4).map((each,index)=>{
          return <img src={each.replace("./","img/brand_img/")} key={index} alt="" style={{"height":"550px"}}/>
        })
      }
      </div>
      <div className="d-flex justify-content-evenly mt-4">
      {
        sampleImg.slice(4,8).map((each,index)=>{
          return <img src={each.replace("./","img/brand_img/")} key={index} alt="" style={{"height":"550px"}}/>
        })
      }
      </div>
    </div>
  )
}
const sampleImg = require.context('../../public/img/brand_img', false, /\.(webp||jpg)$/).keys();
console.log(sampleImg);