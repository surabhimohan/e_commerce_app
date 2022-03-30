import React from 'react';

export default function ExploreBrands() {
  return(
    <div>        
    <h2 className='w3-padding'>EXPLORE TOP BRANDS</h2><br />
    <div className="d-flex justify-content-evenly">
      {
        sampleImg.slice(0,5).map((each,index)=>{
          return <img src={each.replace("./","img/brands/")} key={index} alt="" style={{"height":"400px"}}/>
        })
      }
      </div>
      <div className="d-flex justify-content-evenly">
      {
        sampleImg.slice(5,10).map((each,index)=>{
          return <img src={each.replace("./","img/brands/")} key={index} alt="" style={{"height":"400px"}}/>
        })
      }
      </div>
    </div>
  )
}
const sampleImg = require.context('../../public/img/brands', false, /\.(webp)$/).keys();
console.log(sampleImg);