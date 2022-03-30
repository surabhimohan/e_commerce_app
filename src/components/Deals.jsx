import React from 'react';

export default function Deals() {
  return(
    <div>        
    <h2 className='w3-padding'>DEALS OF THE DAY</h2><br />
    <div className="d-flex justify-content-evenly">
      {
        sampleImg.map((each,index)=>{
          return <img src={each.replace("./","img/deal_img/")} key={index} alt="" style={{"height":"350px"}}/>
        })
      }
      </div>
    </div>
  )
}
const sampleImg = require.context('../../public/img/deal_img', false, /\.(webp)$/).keys();