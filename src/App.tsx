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








import Loader from './components/Loader'

function App() {
  return (
    <>
    <Router>

  

      <Suspense fallback={<Loader/>}>
      <Routes>
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