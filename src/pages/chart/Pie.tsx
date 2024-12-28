import React from 'react'
import Sidebar from '../../components/Sidebar'
import { DoughnutChart, PieChart } from '../../components/charts'
import category from "../../assets/dashcategory.json"

function Pie() {
  return (
    <div className='admincontainer '>
      <Sidebar />
      <main className='piechartcontainer'>

        <section>
          <h2>order status</h2>
          <div>
            <PieChart
              labels={["processing", "shipped", "delivered"]}
              cutout={10} data={[40, 80, 90]}
              backgroundColor={["rgba(201, 5, 70, 0.9)", "rgb(8, 161, 154)", "green"]}
              offset={[0, 0, 20]} />
          </div>
        </section>

        <section>
          <h2>categories</h2>
          <div>
            <DoughnutChart labels={["a", "b", "c"]}
              cutout={40} data={[40, 80, 90]}
              backgroundColor={
                category.categories.map(i => (`hsl(${i.value * 5},${i.value * 2}%,50%)`))
              }
              offset={[0, 10, 8]} />
          </div>
        </section>
        <section>
          <h2>items and available stock</h2>
          <div>
            <DoughnutChart
              labels={category.categories.map(i => (i.heading))}
              cutout={10}
              data={category.categories.map(i => (i.value))}
              backgroundColor={["rgba(201, 5, 70, 0.9)", "rgb(8, 161, 154)", "green", "orangered"]}
              offset={[10, 10, 8,10]} />
          </div>
        </section>

      </main>
    </div>
  )
}

export default Pie