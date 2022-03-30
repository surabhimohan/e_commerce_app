import React from 'react';

export default function Categories() {
  return(
    <div>        
    <h2 className='w3-padding'>CATEGORIES TO BAG</h2><br />
    <div className="d-flex justify-content-evenly">
      {
        sampleImg.slice(0,6).map((each,index)=>{
          return <img src={each.replace("./","img/categories/")} key={index} alt="" style={{"height":"260px"}}/>
        })
      }
      </div>
      <div className="d-flex justify-content-evenly">
      {
        sampleImg.slice(6,12).map((each,index)=>{
          return <img src={each.replace("./","img/categories/")} key={index} alt="" style={{"height":"260px"}}/>
        })
      }
      </div>
    </div>
  )
}
const sampleImg = require.context('../../public/img/categories', false, /\.(webp)$/).keys();
console.log(sampleImg);