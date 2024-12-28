import React, { ReactElement, useState ,useCallback} from 'react'
import Sidebar from '../components/Sidebar'
import TableHoc from '../components/tableHoc'
import { Column } from 'react-table'
import { Link } from 'react-router-dom'
import { FaPlus } from 'react-icons/fa'





interface DataType{
  photo:ReactElement,
  name:string,
  price:number,
  stock:number,
  action:ReactElement
}

const columns:Column<DataType>[]=[
  {
  Header:"Photo",
  accessor:"photo"
 },
 {
  Header:"Name",
  accessor:"name"
 },
 {
  Header:"Price",
  accessor:"price"
 },
 {
  Header:"Stock",
  accessor:"stock"
 },
 {
  Header:"Action",
  accessor:"action"
 },
]
const img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6O8pSCtuSVERyFDelPxbTCjZUJq80WNAM_w&s";
const img2="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZVTcHa4jezwfnSDZNrcPUzeALWP4WyYZV4g&s"

const arr:DataType[] = [
 
  {
    photo:<img src={img} alt="img"/>,
    name:"laptop",
    price:34000,
    stock:56,
    action:<Link  to="/admin/product/manageProduct">Manage</Link>,
  },
  {
    photo:<img src={img2} alt="img"/>,
    name:"laptop",
    price:34000,
    stock:560,
    action:<Link  to="/admin/product/manageProduct">Manage</Link>,
  },
  {
    photo:<img src={img} alt="img"/>,
    name:"laptop",
    price:3400900,
    stock:566,
    action:<Link  to="/admin/product/manageProduct">Manage</Link>,
  },
  {
    photo:<img src={img2} alt="img"/>,
    name:"iphone",
    price:34000,
    stock:156,
    action:<Link  to="/admin/product/manageProduct">Manage</Link>,
  },
  {
    photo:<img src={img2} alt="img"/>,
    name:"iphone",
    price:34000,
    stock:56,
    action:<Link  to="/admin/product/manageProduct">Manage</Link>,
  },
  {
    photo:<img src={img2} alt="img"/>,
    name:"laptop",
    price:34000,
    stock:560,
    action:<Link  to="/admin/product/manageProduct">Manage</Link>,
  },
  {
    photo:<img src={img} alt="img"/>,
    name:"laptop",
    price:3400900,
    stock:566,
    action:<Link  to="/admin/product/manageProduct">Manage</Link>,
  },
  {
    photo:<img src={img2} alt="img"/>,
    name:"laptop",
    price:34000,
    stock:156,
    action:<Link  to="/admin/product/manageProduct">Manage</Link>,
  },
];
function Product() {
  const [data]=useState<DataType[]>(arr)
  const Table = useCallback(TableHoc<DataType>(columns,data,"admin-productcontainer","Products",true),[]);
  return (
    <div className='admincontainer'>
    {/* side bar */}
<Sidebar/>
    {/* main */}
    <main>  {Table()}</main>
    <Link className='create-btn' to="/admin/product/createnewproduct"><FaPlus/></Link>
    <div className="paginnation" ></div>
    
    
    
    
    
    
    </div>
  )
}

export default Product