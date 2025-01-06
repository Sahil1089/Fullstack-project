import React, { useState } from 'react'
import Header from '../../components/Userpage/Header';
import ProductCard from '../../components/ProductCard';
import { FaHome, FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { MdEmail } from 'react-icons/md';
import { BiLogoGoogle, BiLogoInstagramAlt, BiLogoTwitter, BiLogoYoutube } from 'react-icons/bi';
import Footer from '../../components/Userpage/Footer';

// banner
const banner = "https://i.ytimg.com/vi/Hp1oIezETi4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDR3XcT47PA5SFf5zl7ZTwltyCKwg";
// banner
function Search() {
  const [search, setsearch] = useState("");
  const [sort, setSort] = useState("");
  const [page, setpage] = useState(1)

  const [maxPrice, setmax] = useState(1000000);
  const [category, setcategory] = useState("");

  const ispre = page > 1;
  const isnext = page < 4;
  const navigate = useNavigate();


  const Addtocart: any = () => { }
  return (
    <>
    
    <div className="search-nav">
            <h1>products</h1>
            <div>
            <input type="search"
              placeholder='search products'
              value={search}
              onChange={(e) => setsearch(e.target.value)}
            />
            <FaSearch/>
            </div>
            <FaHome onClick={()=>navigate("/")}/>
          </div>
          <div className='container'>
      <div className="banner">
        <img src={banner} alt="" />
      </div>


      <div className='product-search-page'>

        {/* filters */}
        <aside>
          <h2>Filters</h2>
          <div className='select'><h4>Sort</h4>
            <select name="sort" value={sort}
              onChange={(e) => setSort(e.target.value)}
              id="">
              <option value="none">none</option>
              <option value="asc">price(high - low)</option>
              <option value="dsc">price(low - high)</option>



            </select>


          </div>

          <div className='maxprice'><h4>Max price: {maxPrice || " "}</h4>
            <input type='range'
              min={100}
              max={100000}

              name="maxprice" value={maxPrice}
              onChange={(e) => setmax(Number(e.target.value))}
              id="" />





          </div>

          <div className='category'><h4>Category</h4>
            <select name="sort" value={category}
              onChange={(e) => setcategory(e.target.value)}
              id="">
              <option value="">All</option>
              <option value="">Sample1</option>
              <option value="">sample2</option>



            </select>


          </div>

        </aside>
        {/* filters end here */}
        <main>

         
          {/* dispalying product */}

          <div className="search-product">
            <ProductCard
              image={"https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fHww"}
              price={1200}
              productId='d34'
              stock={1200}
              handler={Addtocart}

              name='googles' />

<ProductCard
              image={"https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fHww"}
              price={1200}
              productId='d34'
              stock={1200}
              handler={Addtocart}

              name='googles' />

<ProductCard
              image={"https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fHww"}
              price={1200}
              productId='d34'
              stock={1200}
              handler={Addtocart}

              name='googles' />

<ProductCard
              image={"https://images.unsplash.com/photo-1484788984921-03950022c9ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fHww"}
              price={1200}
              productId='d34'
              stock={1200}
              handler={Addtocart}

              name='googles' />
              {/*  */}
          </div>
          {/* pagination */}
          <article>
            <button disabled={!ispre} onClick={(prev) => setpage((prev) => prev - 1)}>prev</button>
            <span>{page} of {4}</span>
            <button disabled={!isnext} onClick={(prev) => setpage((prev) => prev + 1)}>next</button>

          </article>

          {/*  */}

        </main>


      </div>
      <div className="footer">
     <Footer/></div>
      </div>

    
    </>
  )
}

export default Search