import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {} from "react-icons"
import { FaSearch, FaUser } from 'react-icons/fa'
import { FaCartShopping } from 'react-icons/fa6'
import { BiShoppingBag } from 'react-icons/bi'
import { MdLogin, MdLogout, MdStore } from 'react-icons/md'



const user={
    _id:"u1",
    role:"admin"
    

}


function Header() {

// making variables 
const [isOpen,setIsopen]=useState<boolean>(false);
const logout =()=>{
    setIsopen(false)
};



  return (
    <nav className='header'>
        <div className="logouser">logo</div>
        <div className="searchbar"><input type="search" name="searchbox" placeholder='search products,etc' id="" />
        <Link onClick={()=>setIsopen(false)} to={"/search"}>
        <FaSearch/></Link></div>
        <Link onClick={()=>setIsopen(false)} to={"/"}>Home </Link>
        <Link onClick={()=>setIsopen(false)} to={"/store"}><MdStore/></Link>


        <Link onClick={()=>setIsopen(false)} to={"/cart"}><FaCartShopping/> </Link>

        {
            user?._id?(
                // user agr loged in h to ye dikhao
                <>
                <button className='role'  onClick={(prev)=>setIsopen((prev)=>!prev)}>
                    <FaUser/>
                    
                    {user.role==="user"?"":<span>Admin</span>}
                </button >

                <dialog open={isOpen}>
                    <div className='role'>
                        {
                            user.role==="admin" && (
                                <Link to={"/admin/dashboard"}>Admin</Link>
                            )
                        }

                       <Link to={"/order"}>Orders</Link>
                        <button onClick={logout}>
                            <MdLogout/>
                        </button>
                    </div>

                </dialog>
                
                </>

            ): // ni to log in ka option do
                 <Link to={"/login"}><MdLogin/> </Link>

        }




    </nav>
  )
}

export default Header