import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
  ArcElement,
  PointElement,LineElement,Filler
} from 'chart.js';
import { Bar,Doughnut, Pie,Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  Filler,
  ArcElement
);
export const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

interface BarchartProps{
    horizontal?:boolean;
    data1:number[];
    data2?:number[];
    title:string;
title1:string;
title2?:string;
color1:string;
color2:string;
labels?:string[];
}





export const Barchart = ({data1 = [],data2=[],title,color1,color2,title1,title2,labels=months,horizontal=false}:BarchartProps)=>{







    const options :ChartOptions<"bar">= {
        responsive: true,
        indexAxis:horizontal?"y":"x",
        plugins: {
          legend: {
            display:true
          },
          title: {
            display: true,
            text:title,
          },
        },
        scales:{
            y:{
                beginAtZero:true,
                grid:{
                    display:false,
                }
            },
            x:{
                beginAtZero:true,
                grid:{
                    display:false,
                }
            }
        }
      };
      
      
   const data:ChartData<"bar",number[],string>= {
        labels,
        datasets: [
          {
            label:title1,
            data:data1,
            backgroundColor: color1,
            barThickness:"flex",
            barPercentage:1.2,
            categoryPercentage:0.4
          },
          {
            label:title2,
            data:data2,

            backgroundColor:color2,
            barThickness:"flex",
            barPercentage:1,
            categoryPercentage:0.4
          },
        ],
      };
      
    return <Bar width={horizontal?"200%":""}  options={options} data={data}/>
}
interface doughnutProps {
    labels?:string[];
    data:number[];
   backgroundColor:string[];
   cutout?:number;
   legends?:boolean;
   offset?:number[]
    

}
export const DoughnutChart =({labels,data,backgroundColor,cutout,legends=true,offset}:doughnutProps)=>{
    const doughnutData:ChartData<"doughnut" ,number[],string> ={
        labels,
        datasets:[{
            data,backgroundColor,borderWidth:1,offset
        }],

    };
    const doughnutoption:ChartOptions<"doughnut" >={
        responsive:true,
        plugins:{
            legend:{
                position:"left",
                display:legends,
                labels:{
                    padding:40,
                }
            },
        },
        cutout
    }




    return <Doughnut data={doughnutData} options={doughnutoption}/>;
}

// pie chart making
interface PieProps {
  labels?:string[];
  data:number[];
 backgroundColor:string[];
 cutout?:number;
 legends?:boolean;
 offset?:number[];
  

}
export const PieChart =({labels,data,backgroundColor,cutout,legends=true,offset}:PieProps)=>{
  const PieChartData:ChartData<"pie" ,number[],string> ={
      labels,
      datasets:[{
          data,backgroundColor,borderWidth:1,offset
      }],

  };
  const pieChartoption:ChartOptions<"pie" >={
      responsive:true,
      plugins:{
          legend:{
              position:"top",
              display:legends,
              labels:{
                  padding:30,
              }
          },
      },
      cutout
  }




  return <Pie data={PieChartData} options={pieChartoption}/>;
}


// line chart 


interface LinechartProps{
  horizontal?:boolean;
  linedata:number[];
  title:string;
backgroundColor:string;
linecolor:string;
labels?:string[];
}





export const LineChart = ({linedata,backgroundColor ,title,linecolor,labels=months,horizontal=false}:LinechartProps)=>{







  const options :ChartOptions<"line">= {
      responsive: true,
      plugins: {
        legend: {
          display:true
        },
        title: {
          display: true,
          text:title,
        },
      },
      scales:{
          y:{
              beginAtZero:true,
              grid:{
                  display:false,
              }
          },
          x:{
              beginAtZero:true,
              grid:{
                  display:false,
              }
          }
      }
    };
    
    
 const LineChartdata:ChartData<"line",number[],string>= {
      labels,
      datasets: [
        {fill:true,
          label:title,
          data:linedata,
          backgroundColor:backgroundColor,
          borderColor:linecolor,
          

          
        },
       
      ],
    };
    
  return <Line width={horizontal?"200%":""} options={options} data={LineChartdata}/>
}





