export type OrderItemType ={
    name:string,
    photo:string,
    price:number,
    quantity:number,
    _id:string;




};

export type OrderInfoType ={
    name:string,
      address:string,
   city:string,
   country:string,
   state:string,
   pincode:number,
    status:"processing"| "shipped" |"Delivered",
    subtotal:number,
    discount:number,
    shippingCharge:number;
    tax:number,
    total:number,
    orderItem:OrderItemType[],
    _id:string;





}