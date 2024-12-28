import React from 'react'
import Sidebar from '../../components/Sidebar'
import { LineChart } from '../../components/charts'

const Month = ["jan","feb","march","april","may","june","july"];
const revenue=[120,24,567,89,45,24,90]
const users=[120,8908,567,809,4500,24,9000]

function Line() {
  return (
    <div className='admincontainer'><Sidebar/>
    <main className='linechartcontainer'> 
      {/* active users */}
      <section>
      <h2>active users</h2>
     
     <LineChart 
         linedata={users}
         labels={Month}
          title='mothly revenue' 
          backgroundColor='rgb(3, 145, 150)'
          linecolor='rgb(12, 212, 162)'/>
      </section>
      <section>
      <h2>Month wise sale</h2>
     
     <LineChart 
         linedata={[12,14,56,57,90]}
         labels={Month}
          title='line sample' 
          backgroundColor='lightgreen'
          linecolor='green'/>
      </section>
      {/* total revenue */}
      <section>
      <h2>total revenue</h2>
     
     <LineChart 
         linedata={revenue}
         labels={Month}
          title='mothly revenue' 
          backgroundColor='rgb(221, 135, 36)'
          linecolor='rgb(233, 114, 3)'/>
      </section>
      <section>
      <h2>discount alloted</h2>
     
     <LineChart 
         linedata={revenue}
         labels={Month}
          title='mothly revenue' 
          backgroundColor='rgb(184, 202, 23)'
          linecolor='rgb(28, 94, 2)'/>
      </section>
    </main>
    
    
    
    </div>
  )
}

export default Line