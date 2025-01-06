
// admin routes

import { lazy ,Suspense} from 'react'
import{Route,Routes, BrowserRouter as Router } from 'react-router-dom'
const Transaction =lazy(()=>import('./pages/Transaction')) 
const Product =lazy(()=>import('./pages/Product')) 
const Customers =lazy(()=>import('./pages/Customer')) 

const Dashboard =lazy(()=>import('./pages/Dashboard')) 
const Bars =lazy(()=>import('./pages/chart/Bars')) 
const Pie =lazy(()=>import('./pages/chart/Pie')) 
const Line =lazy(()=>import('./pages/chart/Line')) 
const Newproduct =lazy(()=>import('./pages/management/Addproducts')) 
const ProductManage =lazy(()=>import('./pages/management/ProManage')) 
const TransactManage =lazy(()=>import('./pages/management/TransactManage')) 
const Coupon =lazy(()=>import('./components/Coupon')) 
const Toss=lazy(()=>import('./components/Toss')) 
// const ToDo=lazy(()=>import('./components/app/AddToDo')) 



// user router start here
const UserProduct = lazy(()=>import('./pages/User Page/UserProduct')) 
const Home = lazy(()=>import('./pages/User Page/Home')) 
const Cart = lazy(()=>import('./pages/User Page/AddtoCart')) 
const Search= lazy(()=>import('./pages/User Page/Search')) 
const Store= lazy(()=>import('./pages/User Page/Store')) 
const Shipping= lazy(()=>import('./pages/User Page/Shipping')) 
const Login= lazy(()=>import('./components/Login')) 
const Orders= lazy(()=>import('./pages/User Page/Orders')) 



// user router end here









import Loader from './components/Loader'

function App() {
  return (
    <>
    <Router>

  

      <Suspense fallback={<Loader/>}>
      <Routes>


{/* user routes */}


<Route path='/' element={<Home/>}/>
<Route path='/product' element={<UserProduct/>}/>
<Route path='/cart' element={<Cart/>}/>
<Route path='/search' element={<Search/>}/>
<Route path='/store' element={<Store/>}/>
<Route path='/login' element={<Login/>}/>


{/* user can access after login */}
<Route>
<Route path='/shipping' element={<Shipping/>}/>
<Route path='/orders' element={<Orders/>}/>

</Route>



















        {/* admin routes */}


        {/* enable authentication for routes */}
      <Route path='/admin/dashboard' element={<Dashboard/>}/>
      <Route path='/admin/transaction' element={<Transaction />}/>
      <Route path='/admin/product' element={<Product />}/>
      <Route path='/admin/customer' element={<Customers />}/>
      






{/* charts */}
<Route path='/admin/chart/bar' element={<Bars />}/>
      <Route path='/admin/chart/pie' element={<Pie />}/>
      <Route path='/admin/chart/line' element={<Line />}/>

{/* apps  */}
<Route path='/admin/coupon' element={<Coupon />}/>
<Route path='/admin/toss' element={<Toss />}/>
{/* <Route path='/admin/todo' element={<ToDo />}/> */}




{/* management of forms */}
<Route path='/admin/product/createnewproduct' element={<Newproduct />}/>
<Route path='/admin/product/:id' element={<ProductManage />}/>
<Route path='/admin/transaction/:id' element={<TransactManage />}/>




      </Routes>
      </Suspense>
 
    </Router>
    
    </>
  )
}

export default App