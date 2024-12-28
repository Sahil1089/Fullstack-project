import React, { ReactElement, useState ,useCallback} from 'react'
import Sidebar from '../components/Sidebar'
import TableHoc from '../components/tableHoc'
import { Column } from 'react-table'
import { Link } from 'react-router-dom'
import { FaTrash } from 'react-icons/fa'


interface DataType{
  avatar:ReactElement,
  name:string,
  email:string,
  gender:string,
  role:string,
  action:ReactElement
}

const columns:Column<DataType>[]=[
  {
  Header:"Avatar",
  accessor:"avatar"
 },
 {
  Header:"Name",
  accessor:"name"
 },
 {
  Header:"Gender",
  accessor:"gender"
 },
 {
  Header:"Role",
  accessor:"role"
 },
 {
  Header:"Action",
  accessor:"action"
 },
]















const img="https://techcrunch.com/wp-content/uploads/2022/12/lensa-ai-magic-avatar.jpg"


const arr:DataType[]=[
  {avatar:<img src={img} alt="img"/>,
  name:"kritika",
  role:"user",
  email:"rahul@gmail.com",
  gender:"Female",
  action:(
    <button className='del-customer'>
      <FaTrash/>
    </button>
  ),
  
  }


]



function Customers() {
const  [data]=useState<DataType[]>(arr);
const Table = useCallback(TableHoc<DataType>(columns,data,"admin-productcontainer","Customers",true),[]);

  return (
    <div className='admincontainer'>
    {/* side bar */}
  <Sidebar/>
    {/* main */}
    <main>{Table()}</main>
    
    
    
    
    
    
    </div>
  )
}

export default Customers