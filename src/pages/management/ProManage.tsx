import { ChangeEvent, FormEvent, useState } from 'react'
import Sidebar from '../../components/Sidebar'
import { SiPanasonic } from 'react-icons/si'
import { FaRupeeSign } from 'react-icons/fa';
 const img="https://th.bing.com/th/id/R.3c0d67aad374dcaaa900fcee1f3c2984?rik=ttOTHG5GOXoCOA&riu=http%3a%2f%2finikweb.com%2fwp-content%2fuploads%2f2015%2f02%2ft473gold.jpg&ehk=xrzNIyWCTxFodOX9nL%2fcAK3MXQ8MFZqYx3sr6jGeeKQ%3d&risl=&pid=ImgRaw&r=0";
 const curr = <FaRupeeSign/>
function ProManage() {

    const [name,setName ]=useState<string>("product name sample data")
    const [price,setPrice ]=useState<number>(8678)
    const [stock,setstock ]=useState<number>(10)
    const [photo,setPhoto ]=useState<string>(img)

    const [nameUpdate,setNameUpdate ]=useState<string>(name)
    const [priceUpdate,setPriceUpdate ]=useState<number>(price)
    const [stockUpdate,setstockUpdate ]=useState<number>(stock)
    const [photoUpdate,setPhotoUpdate ]=useState<string>(photo)


 const ChangeImageHandler =(e:ChangeEvent<HTMLInputElement>)=>{
    const file:File| undefined = e.target.files?.[0];
    const reader:FileReader=new FileReader();
    if(file){
        reader.readAsDataURL(file)
        reader.onloadend=()=>{
            if(typeof reader.result==="string") setPhotoUpdate(reader.result);
            
        }
    }

 };


 const SubmitHandler =(e:FormEvent<HTMLFormElement>)=>{
  e.preventDefault();
  setName(nameUpdate);
  setPhoto(photoUpdate);
  setPrice(priceUpdate);
  setstock(stockUpdate);
  

 }



  return (
    <div className='admincontainer'>
    {/* side bar */}
    <Sidebar/>
    {/* main */}
    <main className='management-container'>
        
   {/* making product form */}
   <section>
    <strong>Id - gfim5747
    </strong>
    <img className='productimg' src={photo} alt="product" />
<p>{name}</p>
{
  stock >0?(<span className='green'>Available {stock}</span>):<span className='red'>Out Of Stock</span>
}
<h3> {curr} {price}</h3>
   </section>
   <article>
  
  <form action="#" onSubmit={SubmitHandler}>
        <h2>Add New Product</h2>
        <div>
            <label htmlFor="name">Name</label>
            <input type="text"
             placeholder='product name' 
             value={nameUpdate} 
             onChange={(e)=>setNameUpdate(e.target.value)} required/>
        </div>

        <div>
            <label >Price</label>
            <input type="number"
             placeholder='product price' 
             value={priceUpdate} 
             onChange={(e)=>setPriceUpdate(Number(e.target.value))} required/>
        </div>
        <div>
            <label >Stock</label>
            <input type="number"
             placeholder='product Stock' 
             value={stockUpdate} 
             onChange={(e)=>setstockUpdate(Number(e.target.value))} required/>
        </div>
        <div>
            <label >Image</label>
            <input className='imgInput' type="File"
             placeholder='product image' 
            
             onChange={ChangeImageHandler} required/>
        </div>
        {
            photo && <div className='proBox'>
                <img src={photoUpdate} alt="img" />
                </div>}
           <button type='submit'> Update</button>
        














    </form>





   </article>
  





    </main>






    </div>
  )
}

export default ProManage;