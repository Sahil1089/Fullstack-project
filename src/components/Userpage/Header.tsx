import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {} from "react-icons"
import { FaHome, FaSearch, FaSignInAlt, FaUser } from 'react-icons/fa'
import { FaCartShopping } from 'react-icons/fa6'
import { BiShoppingBag } from 'react-icons/bi'
import { MdLogin, MdLogout, MdStore } from 'react-icons/md'



const user={
    _id:"a1",
    role:""
    

}




function Header() {

// making variables 
const [isOpen,setIsopen]=useState<boolean>(false);
const logout =()=>{
    setIsopen(false)
};
const navigate = useNavigate()


  return (
    <nav className='header'>
        <div className="logouser">logo</div>
        <div className="searchbar" onClick={()=>navigate("/search")}>
        <Link onClick={()=>setIsopen(false)} to={"/search"}>
        <FaSearch/></Link>
        <input type="text" placeholder='search for products' readOnly  onClick={()=>navigate("/search")} />
        </div>
        <Link onClick={()=>setIsopen(false)} to={"/"}><FaHome/> </Link>
        <Link onClick={()=>setIsopen(false)} to={"/store"}><MdStore/></Link>


        <Link onClick={()=>setIsopen(false)} to={"/cart"}><FaCartShopping/> </Link>

        {
            user?._id?(
                // user agr loged in h to ye dikhao
                <>
                <button className='role'  onClick={(prev)=>setIsopen((prev)=>!prev)}>
                    <FaUser/>
                    
                    {user.role==="admin"?<span>Admin</span>:"profile"}
                </button >

                <dialog open={isOpen}>
                    <div className='role'>
                        {
                            user.role==="admin" && (
                                <Link to={"/admin/dashboard"}>Dashboard</Link>
                            )
                        }

                       <Link to={"/orders"}>Orders</Link>
                       <button onClick={logout}>
                            <MdLogout/>
                        </button>
                    </div>

                </dialog>
                
                </>

            ): (<Link to={"/login"}><FaSignInAlt/> login</Link>)

        }




    </nav>
  )
}

export default Header