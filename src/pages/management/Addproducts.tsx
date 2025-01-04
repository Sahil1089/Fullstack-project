import { ChangeEvent, useState } from 'react'
import Sidebar from '../../components/Sidebar'

function Addproducts() {

    const [name,setName ]=useState<string>("")
    const [price,setPrice ]=useState<number>()
    const [stock,setstock ]=useState<number>()
    const [photo,setPhoto ]=useState<string>()

 const ChangeImageHandler =(e:ChangeEvent<HTMLInputElement>)=>{
    const file:File| undefined = e.target.files?.[0];
    const reader:FileReader=new FileReader();
    if(file){
        reader.readAsDataURL(file)
        reader.onloadend=()=>{
            if(typeof reader.result==="string") setPhoto(reader.result);
            
        }
    }

 };



  return (
    <div className='admincontainer'>
    {/* side bar */}
    <Sidebar/>
    {/* main */}
    <main className='management-container'>
        
   {/* making product form */}
   <article>
    <form action="#">
        <h2>Add New Product</h2>
        <div>
            <label htmlFor="name">Name</label>
            <input type="text"
             placeholder='product name' 
             value={name} 
             onChange={(e)=>setName(e.target.value)} required/>
        </div>

        <div>
            <label >Price</label>
            <input type="number"
             placeholder='product price' 
             value={price} 
             onChange={(e)=>setPrice(Number(e.target.value))} required/>
        </div>
        <div>
            <label >Stock</label>
            <input type="number"
             placeholder='product Stock' 
             value={stock} 
             onChange={(e)=>setstock(Number(e.target.value))} required/>
        </div>
        <div>
            <label >Image</label>
            <input className='imgInput' type="File"
             placeholder='product image' 
            
             onChange={ChangeImageHandler} required/>
        </div>
        {
            photo && <div className='proBox'>
                <img src={photo} alt="img" />
                </div>}
           <button type='submit'> Create</button>
        














    </form>




   </article>





    </main>






    </div>
  )
}

export default Addproducts