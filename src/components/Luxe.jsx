import React from 'react';

export default function Luxe() {
  return(
    <div>        
    <h2 className='w3-padding'>MYNTRA LUXE</h2><br />
    <div className="d-flex justify-content-evenly">
      {
        sampleImg.map((each,index)=>{
          return <img src={each.replace("./","img/luxe/")} key={index} alt="" style={{"height":"280px"}}/>
        })
      }
      </div>
    </div>
  )
}
const sampleImg = require.context('../../public/img/luxe', false, /\.(webp)$/).keys();