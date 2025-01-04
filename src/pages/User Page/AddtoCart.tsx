import React, { useEffect, useState } from 'react'
import { FaRupeeSign } from 'react-icons/fa';
import Header from '../../components/Userpage/Header';
import { VscError } from 'react-icons/vsc';

const cartItems =[{
  photo:"",
  productId:"njfg",
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

        </aside>
    </div>
  )
}

export default AddtoCart