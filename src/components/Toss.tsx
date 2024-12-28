import React, { useState } from 'react'
import Sidebar from './Sidebar'

function Toss() {
    const [angle,setAngle]=useState<number>(0);
    function flipCoin(){
        // by default  random value ranges b/n 0 to 1
        if(Math.random()>0.55){
            setAngle(prev=>prev+180)
        }
        else{
            setAngle(prev=>prev+360)
        }
    }












  return (
    <div className='admincontainer '>
    <Sidebar/>
    <main className='toss-container'>
        <h2 >toss</h2>
        <section>
        <article className="tosscoin" onClick={flipCoin} 
        style={
            {
                transform:`rotateY(${angle}deg)`,
            }
        }>
            <div ></div>
            <div ></div>


        </article>
        </section>
    </main>
    </div>  )
}

export default Toss