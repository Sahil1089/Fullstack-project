import React, { useState } from 'react'
import Header from './Userpage/Header'

function Login() {
    const [mobileno,setMobile]=useState("")

  return (
    <div className='login'>
        <Header />
       
<main>
<div className='banner'>
<img src="https://img.freepik.com/free-vector/hand-drawn-flat-black-friday-horizontal-sale-banner_23-2149101019.jpg?semt=ais_hybrid" alt="" />
</div>

 <div className='form'>

 

 <h1 className='heading'>Login or signup</h1>

    <input type="text" 
    value={mobileno}
    placeholder='Mobile Number'
    onChange={(e)=>setMobile(e.target.value)}
    
    />

    <span></span>

    <button>Continue</button>
 </div>

</main>

    </div>
  )
}

export default Login