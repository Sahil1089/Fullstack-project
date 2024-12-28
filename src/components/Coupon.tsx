import React, { useState,ReactElement,FormEvent, FormEventHandler } from 'react'
import Sidebar from './Sidebar'


const Allletter="ABCDERGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
const AllNumber = "1234567890"
const AllSymbols="!@#$%^&*"







function Coupon() {
    const [size,setSize]=useState<number>(8);
    const [prefix,setprefix]=useState<string>("");
    const [includeno,setIncludenumber]=useState<boolean>(false);
    const [character,setCharacter]=useState<boolean>(false);
    const [symbol,setSymbol]=useState<boolean>(false);
    const [isCopied,setIsCopied]=useState<boolean>(false);
    const [Coupon,setCoupon]=useState<string>("");
const copyText= async(Coupon:string)=>{
   await window.navigator.clipboard.writeText(Coupon)
setIsCopied(true)


}
function submitHandler(e:FormEvent<HTMLFormElement>){
    e.preventDefault();
    if(!includeno && !character && !symbol) return alert("please select one at least")
  let res:string = prefix||"";
const looplength:number=size-res.length;
for(let i =0;i<looplength;i++){
    let entirecode:string="";
    if(character) entirecode += AllSymbols;
    if(includeno) entirecode += AllNumber;

    const randomno:number= ~~(Math.random()*entirecode.length);
    res += entirecode[randomno]
}
setCoupon(res)
}





  return (
    <div className='admincontainer '>
        <Sidebar/>
        <main className='coupon-container'>
            <h2 >coupon</h2>
            <div className="coupongenerator">
                <form onSubmit={submitHandler}>
                    <div>
                    <input type="text" 
                    placeholder='text to include' 
                    value={prefix} 
                    onChange={(e)=>setprefix(e.target.value)}
                        maxLength={size}

                    />
                      <input type="number" 
                    placeholder='coupon length' 
                    value={size} 
                    onChange={(e)=>setSize(Number(e.target.value))}
                        min={8}
                        max={25}

                    />
                    </div>


                    <fieldset >
                        <legend>Include</legend>
                        <input type="checkbox" 
                    placeholder='text to include' 
                    checked={includeno} 
                    onChange={(e)=>setIncludenumber((prev)=>!prev)}

                    />
                    <span>Number</span>

                    {/*  */}
                    <input type="checkbox" 
                    placeholder='symbol to include' 
                    checked={symbol} 
                    onChange={(e)=>setSymbol((prev)=>!prev)}

                    />
                    <span>Symbol</span>
                    {/*  */}
                    <input type="checkbox" 
                    placeholder='character to include' 
                    checked={character} 
                    onChange={(e)=>setCharacter((prev)=>!prev)}

                    />
                    <span>Symbol</span>
                    </fieldset>
                    <button type='submit'>Generate Coupon</button>

                </form>
                
                {
                    Coupon && 
                    <div className="couponbox"> <code>{Coupon} <span className='coupon' onClick={()=>copyText(Coupon)}>{isCopied?"copied":"copy code"}</span></code>
                </div>}
                 </div>
            
        </main>
        </div>
  )
}

export default Coupon