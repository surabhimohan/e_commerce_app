import {React,useState,useEffect} from 'react';

export default function ItemList() {
    const [data,setData]=useState([]);
    useEffect(()=>
    {   fetch("http://127.0.0.1:5000/fruits")
        .then((response)=>response.json())
        .then((data)=>{console.log(data);setData(data)});
    },[])

  return (<div>
      {
          data.map((eachData,index)=>{
            return(<div key={index}>{eachData.name}</div>)
          })
      }
  </div>
      
  )
}
