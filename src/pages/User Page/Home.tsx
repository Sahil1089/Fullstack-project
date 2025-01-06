import React from 'react'
import Header from '../../components/Userpage/Header'
import { Link } from 'react-router-dom'
import ProductCard from '../../components/ProductCard'
import Footer from '../../components/Userpage/Footer'

function Home() {
  const AddtoCart:any = ()=>{}
    
  return (
    <><Header/>
    <div className='home'>   
    
     <section className='ads-section'>
      <img src="https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fHww
" alt="" />
     </section>
   <h2>
    latest products

<Link className='findmore' to={'/search'}>More</Link>
</h2>

<section>
  <main>
    <ProductCard 
    image={"https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fHww"} 
    price={1200} 
    productId='d34' 
    stock={1200} 
    handler={AddtoCart}
   
    name='googles'  />
    <ProductCard 
    image={"https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fHww"} 
    price={1200} 
    productId='d34' 
    stock={1200} 
    handler={AddtoCart}
   
    name='googles'  />
    <ProductCard 
    image={"https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fHww"} 
    price={1200} 
    productId='d34' 
    stock={1200} 
    handler={AddtoCart}
   
    name='googles'  />
    <ProductCard 
    image={"https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fHww"} 
    price={1200} 
    productId='d34' 
    stock={1200} 
    handler={AddtoCart}
   
    name='googles'  />
    <ProductCard 
    image={"https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fHww"} 
    price={1200} 
    productId='d34' 
    stock={1200} 
    handler={AddtoCart}
   
    name='googles'  />
    <ProductCard 
    image={"https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fHww"} 
    price={1200} 
    productId='d34' 
    stock={1200} 
    handler={AddtoCart}
   
    name='googles'  />
    <ProductCard 
    image={"https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fHww"} 
    price={1200} 
    productId='d34' 
    stock={1200} 
    handler={AddtoCart}
   
    name='googles'  />
    <ProductCard 
    image={"https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fHww"} 
    price={1200} 
    productId='d34' 
    stock={1200} 
    handler={AddtoCart}
   
    name='googles'  />
    <ProductCard 
    image={"https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fHww"} 
    price={1200} 
    productId='d34' 
    stock={1200} 
    handler={AddtoCart}
   
    name='googles'  />
</main>
</section>


    
    
    
   
  

  
<div className='footer'>
  
<Footer /> 
  </div>   

    
    </div>
   
    </>
  )
}

export default Home