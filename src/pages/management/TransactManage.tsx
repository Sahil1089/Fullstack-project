import React, { useState } from 'react'
import Sidebar from '../../components/Sidebar'
import { Link } from 'react-router-dom'
import { OrderInfoType, OrderItemType } from './types'
import { MdCurrencyRupee } from 'react-icons/md'











const img="https://th.bing.com/th/id/R.3c0d67aad374dcaaa900fcee1f3c2984?rik=ttOTHG5GOXoCOA&riu=http%3a%2f%2finikweb.com%2fwp-content%2fuploads%2f2015%2f02%2ft473gold.jpg&ehk=xrzNIyWCTxFodOX9nL%2fcAK3MXQ8MFZqYx3sr6jGeeKQ%3d&risl=&pid=ImgRaw&r=0"
const orderItem:OrderItemType[]=[
  {
    name:"macos",
    photo:img,
    price:56565,
    quantity:12,
    _id:"7890jhg678",

  }
]









function TransactManage() {
  const [order,setOrder]=useState<OrderInfoType>(
    {
      name:"sahil",
      address:"delhi",
      city:"delhi",
      pincode:110092,
      country:"india",
      state:"delh",
      status:"processing",
      subtotal:7865087,
      discount:68,
      shippingCharge:70,
      tax:34,
      total:897787,
      orderItem,
      _id:"jl5477ghfy",



  
    }
    
  );

  const UpdateHandler =()=>{
    setOrder(prev =>({
      ...prev,status:prev.status==="processing"?"shipped":"Delivered"
    }))
  }

  const {name,address,country,city,state,pincode,subtotal,shippingCharge,tax,discount,status,_id}=order;
  return (

    <div className='admincontainer'>
    {/* side bar */}
    <Sidebar/>
    {/* main */}
    <main className='management-container'>
     <div className="trans-manage-container">
      <div className="left">
        <h2>orderItems</h2>
        
          
       {
        order.orderItem.map(item=>(
          <ProductCard 
          name={item.name}
          _id={item._id}
           price={item.price}
            quantity={item.quantity}
            photo={item.photo}

             />
        ))
       }
        
      


      </div>
      {/*  */}
      <div className="right">
        <h2>order Info</h2>

<div className="userinfo">
<h2>Order Info</h2>
<h3>User info</h3>
<p>Name:{name}</p>
  
 <p>{` Address:${address} ${city} ${state} ${country} ${pincode}`}</p>  
<br />
<h2>amount info</h2>
<p>subtotal : {subtotal}</p>
<p>discount:{discount}</p>
<p>shipping charge:{shippingCharge}</p>
<p>tax:{tax}</p>

<h2>status info</h2>
<p>Status:
  <span className={status==="Delivered"?"delgree":status==="shipped"?"green":"yellow"}>{status}</span>
</p>
<button className='bluebg' onClick={UpdateHandler}>Update Process</button>
  
  </div>        



      </div>
     </div>
    </main>






    </div>
  )
}

const ProductCard = ({name,photo,price,quantity,_id}:OrderItemType)=>(
  <div className='orderbox'>
    <img src={photo} alt={name}/>
    <Link to={`/product/${_id}`}>{name}</Link>
    <span  style={{marginLeft:"auto"}}><MdCurrencyRupee/>{price} X {quantity} = {price * quantity} <MdCurrencyRupee/></span>



  </div>

);



export default TransactManage