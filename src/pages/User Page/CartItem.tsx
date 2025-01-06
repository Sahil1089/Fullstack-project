import React from 'react'
import { FaMinus, FaPlus, FaRupeeSign, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';


type cartItemsprop ={
  CartItem:any
};










function CartItem({CartItem}:cartItemsprop) {
  const {photo,productId,name,price,quantity,stock}=CartItem;
  
  return (
    <div className='cart-item'>
<img src={photo} alt="cart-img" />
<article>
  <Link to={`/product/${productId}`}>{name}</Link>
  <span><FaRupeeSign/>{price}</span>

</article>
<div className='cart-nav'>
  <div className="pmb">  <button><FaMinus/></button>
  <p>{quantity}</p>
  <button><FaPlus/></button>
  </div>

  <div>
    <button className='green'>save for later</button>
    <button>
      remove <FaTrash className='red'/>
    </button>
  </div>

</div>




    </div>
  )
}

export default CartItem