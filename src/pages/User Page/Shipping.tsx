import React, { useState,ChangeEvent } from 'react'
import { BiArrowBack } from 'react-icons/bi';
import { FaBackward } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Shipping() {

const [shipinfo,setShipinfo]=useState({
    address:"",
    city:"",
    state:"",
    country:"",
    landmark:"",
    pincode:"",
})


const ChangeHandler =(e:ChangeEvent<HTMLInputElement | HTMLSelectElement>)=>{
setShipinfo(prev=>({
    ...prev,[e.target.name]: e.target.value
}))
};

const navigate = useNavigate()

  return (
    <div className='shipping'>
        <button className='back'
        onClick={()=>navigate("/cart")}
        >
            <BiArrowBack/></button>

        <form >
            <h2>shipping Address</h2>
            {/*  */}
<input type="text"
            placeholder='enter address' 
            name='address'
            value={shipinfo.address}
            onChange={ChangeHandler}
            
            />
<input type="text"
            placeholder='enter landmark' 
            name='landmark'
            value={shipinfo.landmark}
            onChange={ChangeHandler}
            
            />


<input type="text"
            placeholder='enter city' 
            name='city'
            value={shipinfo.city}
            onChange={ChangeHandler}
            
            />

            <select name="country"
            value={shipinfo.country}id=""
            onChange={ChangeHandler}
            
            >
                <option >Choose country</option>
                <option value="india">India</option>
            </select>

<input type="text"
            placeholder='enter state' 
            name='state'
            value={shipinfo.state}
            onChange={ChangeHandler}
            
            />

<input type="number"
            placeholder='enter pincode' 
            name='pincode'
            value={shipinfo.pincode}
            onChange={ChangeHandler}
            
            />


<button>Pay Now</button>
        </form>




    </div>
  )
}

export default Shipping