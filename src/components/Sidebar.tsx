import React from 'react'
import { Link, useLocation , Location} from 'react-router-dom'
import { Md12Mp, MdBarChart, MdCurrencyRupee, MdDashboard, MdMoney, MdPeople, MdPieChart } from "react-icons/md";
import { FaBitcoin, FaChartLine, FaCoins, FaFile, FaLine, FaShopify } from 'react-icons/fa';
import { IconType } from 'react-icons';
import { FaChartPie } from 'react-icons/fa6';
import { RiCoupon2Fill } from 'react-icons/ri';

const Sidebar=()=> {
    const location = useLocation();




return <aside>
    <div className="logo">logo</div>
    <div>
        <h4>Dashboard</h4>
        <ul>

        
            <li style={
                {backgroundColor:location.pathname.includes("/admin/Dashboard")
                    ? "rgba(0,101,115,0.5) ": "white"


                }
            }>
            <Link to={'/admin/Dashboard'}
            style={
                {color:location.pathname.includes("/admin/Dashboard")
                    ? "rgba(10,15,215,0.8)": "black"


                }}
            
            
            
            >
                <MdDashboard />
                Dashboard 
            </Link>
            </li>

            <li style={
                {
                    backgroundColor:location.pathname.includes("/admin/Product")
                    ? "rgb(2,154,156) ": "white",

                    


                }
                
            } 
            
            >
            <Link to={'/admin/Product'} 
            style={
                {color:location.pathname.includes("/admin/Product")
                    ? "rgba(255, 255, 255, 0.8) ": "black"


                } 
            }
            
            >
                <FaShopify/>
                Product
            </Link>
            </li>

            <li style={
                {backgroundColor:location.pathname.includes("/admin/Transaction")
                    ? "rgba(95, 9, 165, 0.93) ": "white"


                }
            }>
            <Link to={'/admin/Transaction'} style={
                {color:location.pathname.includes("/admin/Transaction")
                    ? "rgba(248, 248, 248, 0.8) ": "black"


                }
            }>
                <MdMoney/>
                Transaction
            </Link>
            </li>

            <li style={
                {backgroundColor:location.pathname.includes("/admin/Customer")
                    ? "rgb(3, 128, 96) ": "white"


                }
            }>
            <Link to={'/admin/Customer'} style={
                {color:location.pathname.includes("/admin/Customer")
                    ? "rgba(255, 255, 255, 0.8) ": "black"


                }
            }>
                <MdPeople/>
               Customer
            </Link>
            </li>
        </ul>
    </div>

    {/* 2nd part */}

    <div>
        <h4>charts</h4>
        <ul>
        <Li url="/admin/chart/bar"
            text="bar graph" 
            Icon={MdBarChart}
            location={location}
            bgcolor='rgb(228, 148, 1)'
             />

<Li url="/admin/chart/pie"
            text="pie chart" 
            Icon={FaChartPie}
            location={location}
            bgcolor='rgb(105, 24, 143)'

             />

             <Li url="/admin/chart/line"
            text="Line " 
            Icon={FaChartLine}
            location={location}
            bgcolor='rgb(91, 143, 24)'
             />  






        </ul>
    </div>

    {/* apps */}
    <div>
        <h4>Apps</h4>
        <ul>
        <Li url="/admin/coupon"
            text="Coupon" 
            Icon={RiCoupon2Fill}
            location={location}
            bgcolor='rgb(194, 20, 87)'
             />

<Li url="/admin/toss"
            text="Toss" 
            Icon={FaBitcoin}
            location={location}
            bgcolor='rgb(163, 140, 9)'
             />

<Li url="/admin/todo"
            text="AddToDo" 
            Icon={FaFile}
            location={location}
            bgcolor='rgb(163, 9, 35)'
             />


         






        </ul>
    </div>

    </aside>






    
    
    
  
};
interface LiProps{
    url:string;
    text:string;
    location:Location,
    Icon:IconType,
    bgcolor:string

}
const Li = ({url,text,location,Icon,bgcolor}:LiProps)=>(
    <li  
   
    style={
        {backgroundColor:location.pathname.includes(url)
            ? bgcolor: "white"



        }
    }>
    <Link to={url} className={url==="/admin/Product/manageProduct"?"bluebg":""}
    style={
        {color:location.pathname.includes(url)
            ? "rgb(255, 255, 255)": "black"


        }}
    
    
    
    >
        <Icon />
        {text}
    </Link>
    </li>

    )




export default Sidebar