import React, { ReactElement ,useCallback,useState} from 'react'
import Sidebar from '../components/Sidebar'

import TableHoc from '../components/tableHoc'
import { Column } from 'react-table'
import { Link } from 'react-router-dom'
import { FaTrash } from 'react-icons/fa'

interface DataType{
  user:string,
  amount:number,
  discount:number,
  quantity:number,
  status:ReactElement,
  action:ReactElement
}

const columns:Column<DataType>[]=[
  {
  Header:"User",
  accessor:"user"
 },
 {
  Header:"Amount",
  accessor:"amount"
 },
 {
  Header:"Discount",
  accessor:"discount"
 },
 {
  Header:"Status",
  accessor:"status"
 },
 {
  Header:"Action",
  accessor:"action"
 },
]




const arr:DataType[]=[
  {user:"kritika",
    amount:453453,
    discount:50,
    quantity:24,
    status:<span className='red'>pending</span>,
    action:<Link to="/admin/transaction/customer">Manage</Link>,
  
  }


]






function Transaction() {
  const  [data]=useState<DataType[]>(arr);
  const Table = useCallback(TableHoc<DataType>(columns,data,"admin-productcontainer","Customers",true),[]);

  return (    <div className='admincontainer'>
    {/* side bar */}
<Sidebar/>
    {/* main */}
    <main>{Table()}</main>
    
    
    
    
    
    
    </div>
  )
}

export default Transaction