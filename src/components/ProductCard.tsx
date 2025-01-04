import React, { useState } from 'react'
import { FaHeart, FaPlusSquare, FaRupeeSign } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';

type productProps ={
    productId:string;
    image:string;
    name:string;
    price:number;
    stock:number;

}


const isclick=false;
const server ="hjfl"
const available=true;

function ProductCard({productId,image,name,price,stock}:productProps) {
  
const [isclick,setclick] = useState<boolean>(false);

  return (
    <div className="product-card" >

        <img src={image} alt="photo" />
        <span className='cardnav'>
        <p>{name}</p>
        <span><FaRupeeSign/>{price}</span>
        
           

        
        </span>

        <div className="overlay">
         
          {available?<span className='green'>available :  </span>:<span className='red'>out of stock</span>}
         <span> {stock}</span>
           </div>

           <div className="controls">
           <button >
<FaCartShopping/>
        </button>

        <FaHeart  onClick={(prev)=>setclick((prev)=>!prev)} className={isclick?"hred":"hwhite"}/>
           </div>
    </div>

  )
}

export default ProductCard