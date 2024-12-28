import React from 'react'
import Sidebar from '../../components/Sidebar'
import { Barchart } from '../../components/charts'

function Bars() {
  return (
    <div className='admincontainer '>
        <Sidebar/>
        <main className='mainchart'>
          <h2 className='heading'>top selling producta and customers</h2>
          <section >

            <Barchart title='top selling producta and customers ' data1={[23,45]} data2={[34,56]} title1='Product' title2='Users' color1='rgba(189, 6, 125, 0.91)' color2='rgba(0, 165, 170, 0.9)'/>
          </section>
          <h2 className='heading'>orders throughout the year</h2>
          <section >

            <Barchart title=' orders'  color2={""} horizontal ={true} data1={[23,45,567.2345]}  title1='Product'  color1='rgba(230, 174, 6, 0.91)' />
          </section>
        </main>
    </div>
  )
}

export default Bars