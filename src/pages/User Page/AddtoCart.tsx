import React, { useEffect, useState } from 'react'
import { FaRupeeSign } from 'react-icons/fa';
import Header from '../../components/Userpage/Header';
import { VscError } from 'react-icons/vsc';
import CartItem from './CartItem';
import { Navigate,useNavigate } from 'react-router-dom';

const cartItems =[{
  photo:"https://plus.unsplash.com/premium_photo-1681160405580-a68e9c4707f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bGFwdG9wfGVufHwwDB8fDB8f",
  productId:"laptop",
  price:3000,
  quantity:4,
  stock:20,
  name:'speaker'
},
{
  photo:"https://plus.unsplash.com/premium_photo-1681160405580-a68e9c4707f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bGFwdG9wfGVufHwwDB8fDB8f",
  productId:"laptop",
  price:3000,
  quantity:4,
  stock:20,
  name:'speaker'

},
{
  photo:"https://plus.unsplash.com/premium_photo-1681160405580-a68e9c4707f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bGFwdG9wfGVufHwwDB8fDB8f",
  productId:"laptop",
  price:3000,
  quantity:4,
  stock:20,
  name:'speaker'
},
{
  photo:"https://plus.unsplash.com/premium_photo-1681160405580-a68e9c4707f9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bGFwdG9wfGVufHwwDB8fDB8f",
  productId:"laptop",
  price:3000,
  quantity:4,
  stock:20,
  name:'speaker'

}];
const subtotal=1200;
const tax =Math.round( subtotal * 0.18);
const ShippingCharge = 14;
const discount=12;
const total = subtotal + tax + ShippingCharge;











function AddtoCart() {
const navigate = useNavigate()

  const [couponcode,setCouponcode]=useState<string>("")
  const [isvalid,setValidity]=useState<boolean>()

  useEffect(() => {
  const time = setTimeout(() => {
    if (Math.random()>0.5){
      setValidity(true);

    }
    
  }, (1000));

  return ()=>{
    clearTimeout(time);
    setValidity(false);
  }
  
    
  }, [couponcode])
  

  return (
    <div className='addcart'>
      <Header/>
        <main className='cartcontainer'>

       
       {
        cartItems.map((i,idx)=>(
          <CartItem key={idx} CartItem={i}/>
        ))
       }









        </main>
        <aside className='billing'>
            <p>subtotal : <FaRupeeSign/>{subtotal}</p>
            <p>ShippingCharge : <FaRupeeSign/>{ShippingCharge}</p>
            <p>tax : <FaRupeeSign/>{tax}</p>
            <p> <em>
            discount : -<FaRupeeSign/>{discount}
                </em></p>
                <strong>total :<FaRupeeSign/> {total} </strong>

<input type="text" value={couponcode} 
placeholder='enter coupo code'
onChange={(e)=>setCouponcode(e.target.value)}

/>
{
  couponcode && ( isvalid ? <span className='green'><FaRupeeSign/>{discount}
    off using coupon <code>{couponcode}</code></span>
   : <span> < VscError className='red'/> invalid code </span>
 )
  }

       
       <button  onClick={()=>navigate("/shipping")}>Buy Now</button>
        </aside>
    </div>
  )
}

export default AddtoCart