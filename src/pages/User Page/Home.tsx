import React from 'react'
import Header from '../../components/Userpage/Header'
import { Link } from 'react-router-dom'
import ProductCard from '../../components/ProductCard'

function Home() {
    
  return (
    <div className='home'>   
    <Header/>
     <section>

     </section>
   <h2>
    latest products

<Link className='findmore' to={'/search'}>More</Link>
</h2>

<main>
    <ProductCard 
    image={"https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fHww"} 
    price={1200} 
    productId='d34' 
    stock={1200} 
   
    name='googles'  />
</main>

    
    
    
    
    
    
    
    
    </div>
  )
}

export default Home