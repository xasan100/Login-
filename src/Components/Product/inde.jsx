import React, { useEffect, useState } from 'react'

export const Product = () => {
  const [datas, setData] = useState([]);
  

   
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((res) => {
      
        setData(res || []);
      });
  }, []);
  console.log(datas,'ruqiya');


  return (
    <div className='ProductCon'>
      {datas?.map((val) => {
    return ( <div className='Card' key={val.id}>
     
    </div>)
      })}
    </div>
 
  )
}
export default Product