import React from 'react'
import Sidebar from '../components/Sidebar';
import { BsBell, BsSearch } from 'react-icons/bs';
import user from "../assets/book.png"
import { HiTrendingDown, HiTrendingUp } from 'react-icons/hi';
import data from '../assets/dashcategory.json';
import { Barchart, DoughnutChart } from '../components/charts';
import { BiMaleFemale } from 'react-icons/bi';
import Table from '../components/DashTable';

const userImg = user

function Dashboard() {
  return (
    <div className='admincontainer'>
    {/* side bar */}
    <Sidebar/>
    {/* main */}
    <main className='dashboard'>
      {/*  */}
      <div className="searchbar">
        <BsSearch/>
        <input type="text" placeholder='Search for data,users,docs' />
        
        <BsBell />
        <img src={userImg} alt="" />
      </div>


      {/* section 2 */}

      <section className='widgetcontainer'>

             <Widget 
             percent={40}
             amount={true}
             value={120056}
             heading='revenue'
             color='rgb(0,11,215)' 
             
             
             
             />

<Widget 
             percent={90}
             value={1256}
             heading='users'
             color='rgb(0,198,205)' 
             
             
             
             />

<Widget 
             percent={-10}
             amount={true}
             value={1256}
             heading='transaction'
             color='rgb(250,191,0)' 
             
             
             
             />
             <Widget 
             percent={-10}
             amount={true}
             value={1256}
             heading='Products'
             color='rgb(127,10 ,124)' 
             
             
             
             />


      </section>

<section className='graph-container'>
  <div className="revenue-chart">
    <h2>transaction and revenue</h2>
    {/* graph here */}
    <Barchart data1={[2000,4780,6000,8780]} 
             data2={[1256,14563,16356,18567]} 
             title1='revenue'
             title2='transaction'
             title='monthly transaction'
             color1='rgb(226, 149, 7)'
             color2='hsl(177, 92.70%, 37.50%)'
             
             />

  </div>




  <div className="dash-category">
    <h2>inventry</h2>
    <div>
      {
        data.categories.map(item =>(
          <CategoryItem key={item.heading} heading={item.heading} value={item.value} color={`hsl(${item.value*4.9},${item.value *2.5}%,50%)`}/>


        ))
      }


      <CategoryItem  heading='laptop' value={70} color='hsl(43, 90.50%, 50.40%)'/>
      <CategoryItem  heading='mobile' value={30} color='rgb(87, 6, 116)'/>
      <CategoryItem  heading='desktop' value={80} color='rgb(122, 146, 14)'/>
      <CategoryItem  heading='tabs' value={50} color='rgb(46, 3, 146)'/>
      <CategoryItem  heading='sports' value={34} color='rgb(7, 134, 106)'/>

    </div>
  </div>



</section>

{/* gender ratio */}
<section className='transaction-container'>

  <div className="gender-ratio">
    <h2>gender-ratio</h2>
    {/* chart */}
    <DoughnutChart  labels={["Female","Male"]}
     cutout={50} data={[40,80]}
      backgroundColor={["rgba(201, 5, 70, 0.9)","rgb(8, 161, 154)"]}/>
    <p><BiMaleFemale/></p>
    </div>
    {/* table */}
    <Table data={data.transaction}/>




</section>












    </main>
    
    
    
    
    
    
    </div>
  )
}


interface WidgetItemProps {
  heading:string;
  value:number;
  percent:number;
  color:string;
  amount?: boolean

}

const Widget = ({heading,value,percent,color,amount = false}:WidgetItemProps)=>(
  <article className='widget'>
    <div className="widgetinfo">
      <p>{heading}</p>
      <h4>{amount ? `$${value}`: value }</h4>
      {
        percent>0?<span  className='green info'><HiTrendingUp />+{percent}%{" "}</span>: <span className='red'><HiTrendingDown /> {percent}%{" "}</span>}


    </div>
    {/* circle */}
    <div className="widcircle" style={{
      background:`conic-gradient(${color} ${Math.abs(percent)/100*360}deg,rgb(255,255,255) 0)`
    }}>
      <span style={{
        color,
      }}> 

        {percent}%
      </span>
    </div>

  </article>

);

// categoryitem
interface CatItem{
  color:string;
  value:number;
  heading:string;

}
const CategoryItem =({color,value,heading}:CatItem)=>(
  <div className="categoryitem">
    <h5>{heading}</h5>
    <div>
      <div style={{
        backgroundColor:color,
        width:`${value}%`
      }}>

      </div>
    </div>

    <span>{value}</span>

  </div>
);
// 

export default Dashboard;
