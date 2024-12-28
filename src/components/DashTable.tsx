import TableHoc from "./tableHoc"
import { Column } from "react-table";

const columns:Column<DataType>[] =[
    {
    Header:"Id",
    accessor:"id",
},
{
    Header:"Quantity",
    accessor:"quantity",
},
{
    Header:"Amount",
    accessor:"amount",
},
{
    Header:"Status",
    accessor:"status",
},
{
    Header:"Discount",
    accessor:"discount"
},
];

interface DataType{
    id:string,
    quantity:number,
    discount:number,
    amount:number,
    status:string
}


function DashTable({data}:{data:DataType[]}) {




  return TableHoc<DataType>(columns,data,"transactionbox","Top Transaction")();
  
}

export default DashTable;