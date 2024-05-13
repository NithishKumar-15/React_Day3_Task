// import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { useState } from "react";


// const ShopCard=()=>{


//   //Data for products 

//   const data=[
//     {
//       sale:false,
//       productName:"Fancy Product",
//       productOldPrice:"$40.00",
//       productNewPrice:"$80.00",
//       rating:false
//     },
//     {
//       sale:true,
//       productName:"Special Item",
//       productOldPrice:"$20.00",
//       productNewPrice:"$18.00",
//       rating:true
//     },
//     {
//       sale:true,
//       productName:"Sale Item",
//       productOldPrice:"$50.00",
//       productNewPrice:"$25.00",
//       rating:false 
//     },
//     {
//       sale:true,
//       productName:"Popular Item",
//       productOldPrice:null,
//       productNewPrice:"$40.00",
//       rating:true
//     },
//     {
//       sale:true,
//       productName:"Sale Item",
//       productOldPrice:"$50.00",
//       productNewPrice:"$25.00",
//       rating:false
//     },
//     {
//       sale:false,
//       productName:"Fancy Product",
//       productOldPrice:"$120.00",
//       productNewPrice:"$280.00",
//       rating:false
//     },
//     {
//       sale:true,
//       productName:"Special Item",
//       productOldPrice:"$20.00",
//       productNewPrice:"$18.00",
//       rating:true,
//     },
//     {
//       sale:true,
//       productName:"Popular Item",
//       productOldPrice:"$20.00",
//       productNewPrice:"$18.00",
//       rating:true,
//     }
//   ]

//   //Setting the add to card state value
//   const[count,setCount]=useState(0);

//   //Add card remove card
//   const [btn1,setBtn1]=useState(true);
  

//     return(
//         <>
//           {/* Component for creating header navbar */}
//         <nav className="navbar navbar-expand-lg bg-body-tertiary">
//   <div className="container-fluid">
//     <a className="navbar-brand" href="#">Start Bootstrap</a>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarNav">
//       <ul className="navbar-nav">
//         <li className="nav-item">
//           <a className="nav-link active" aria-current="page" href="#">Home</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#">About</a>
//         </li>
//         <li className="nav-item dropdown">
//           <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//           Shop
//           </a>
//           <ul className="dropdown-menu">
//             <li><a className="dropdown-item" href="#">Action</a></li>
//             <li><a className="dropdown-item" href="#">Another action</a></li>
//             <li><hr className="dropdown-divider"/></li>
//             <li><a className="dropdown-item" href="#">Something else here</a></li>
//           </ul>
//         </li>
//       </ul>     
//     </div>
//     <form className="d-flex">
//         <button className="btn btn-outline-dark" type="submit">
//         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
//         <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
//         </svg>
//           Card
//           <span className="badge bg-dark text-white ms-1 rounded-pill">{count}</span>
//         </button>
//       </form>
//   </div>
// </nav>
// {/* End of Navbar */}

// {/* Shop text*/}
// <div className="w-100 bg-dark text-center align-middle" style={{height:"280px",padding:"80px"}}>
// <h1 className="text-white" style={{fontSize:"340%",fontWeight:"bolder"}}>Shop in style</h1>
// <p className="text-white-50" style={{fontSize:"120%"}}>With this shop hompeage template</p>
// </div>

// {/* End of Shop text */}

// {/* Product Details Logic */}

// <div className="container px-5 px-lg-5 mt-5" style={{marginBottom:"100px"}}>
//   <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
//       {data.map((val,ind)=>{
//         return <>
//         <div className="col mb-5" style={{marginTop:"50px",border:"1px solid rgb(210,210,210)",borderRadius:"5px",height:"480px"}}>
//           {/* inside First div */}
//           <div className="h-50 text-center w-100" style={{backgroundColor:"rgb(222,225,230)"}}>
//             {val.sale&&<button style={{border:"none",backgroundColor:"rgb(33,37,41)",color:"rgb(255,255,255)",borderRadius:"7px"}}>Sale</button>}
//             <h3 style={{color:"rgb(117,120,125)",display:"flex",justifyContent:"center",alignItems:"center"}}>450 X 300</h3>
//           </div>
          
//           {/* Inside Second div */}
//           <div className="w-100 h-100 text-center">
//             <h6>{val.productName}</h6>
//             {val.rating&& 
//             <>
//             <svg width="15px" height="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" fill="rgb(255,193,7)"/></svg>
//             <svg width="15px" height="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" fill="rgb(255,193,7)"/></svg>
//             <svg width="15px" height="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" fill="rgb(255,193,7)"/></svg>
//             <svg width="15px" height="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" fill="rgb(255,193,7)"/></svg>
//             <svg width="15px" height="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" fill="rgb(255,193,7)"/></svg>

//             </>
//             }   
//             {val.productOldPrice!=null?<><p><span>{val.productNewPrice}</span><span> - </span><span>{val.productOldPrice}</span></p></>:<p><span>{val.productNewPrice}</span></p>}   
//             {val.sale?<button className="btn btn-outline-dark mt-auto" onClick={(ind)=>{
//                setCount(count+1);
//             }}>Add to card</button>:<button className="btn btn-outline-dark mt-auto" href="#">View Options</button>}    
//             </div>
            
//         </div>
//         </>
//       })}
// </div>
// </div>

// {/* Footer content */}
// <footer className="py-5 bg-dark">
// <div className="container">
// <p className="m-0 text-center text-white">Copyright © Your Website 2023</p>
// </div>
// </footer>

//         </>
//     )
// }

// export default ShopCard;

import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const ShopCard = () => {

  const data = [
    {
      sale: false,
      productName: "Fancy Product",
      productOldPrice: "$40.00",
      productNewPrice: "$80.00",
      rating: false
    },
    {
      sale: true,
      productName: "Special Item",
      productOldPrice: "$20.00",
      productNewPrice: "$18.00",
      rating: true
    },
    {
      sale: true,
      productName: "Sale Item",
      productOldPrice: "$50.00",
      productNewPrice: "$25.00",
      rating: false
    },
    {
      sale: true,
      productName: "Popular Item",
      productOldPrice: null,
      productNewPrice: "$40.00",
      rating: true
    },
    {
      sale: true,
      productName: "Sale Item",
      productOldPrice: "$50.00",
      productNewPrice: "$25.00",
      rating: false
    },
    {
      sale: false,
      productName: "Fancy Product",
      productOldPrice: "$120.00",
      productNewPrice: "$280.00",
      rating: false
    },
    {
      sale: true,
      productName: "Special Item",
      productOldPrice: "$20.00",
      productNewPrice: "$18.00",
      rating: true,
    },
    {
      sale: true,
      productName: "Popular Item",
      productOldPrice: "$20.00",
      productNewPrice: "$18.00",
      rating: true,
    }
  ];

  const [count, setCount] = useState(0);
  const [cartItems, setCartItems] = useState(new Array(data.length).fill(false));

  const handleClick = (index) => {
    const newCartItems = [...cartItems];
    newCartItems[index] = !newCartItems[index];
    setCartItems(newCartItems);
    if (newCartItems[index]) {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Start Bootstrap</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Shop
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
            </ul>
          </div>
          <form className="d-flex">
            <button className="btn btn-outline-dark" type="submit">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart-fill" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
              </svg>
              Card
              <span className="badge bg-dark text-white ms-1 rounded-pill">{count}</span>
            </button>
          </form>
        </div>
      </nav>

      <div className="w-100 bg-dark text-center align-middle" style={{ height: "280px", padding: "80px" }}>
        <h1 className="text-white" style={{ fontSize: "340%", fontWeight: "bolder" }}>Shop in style</h1>
        <p className="text-white-50" style={{ fontSize: "120%" }}>With this shop hompeage template</p>
      </div>

      <div className="container px-5 px-lg-5 mt-5" style={{ marginBottom: "100px" }}>
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {data.map((val, index) => {
            return (
              <div className="col mb-5" key={index} style={{ marginTop: "50px", border: "1px solid rgb(210,210,210)", borderRadius: "5px", height: "480px" }}>
                <div className="h-50 text-center w-100" style={{ backgroundColor: "rgb(222,225,230)" }}>
                  {val.sale && <button style={{ border: "none", backgroundColor: "rgb(33,37,41)", color: "rgb(255,255,255)", borderRadius: "7px" }}>Sale</button>}
                  <h3 style={{ color: "rgb(117,120,125)", display: "flex", justifyContent: "center", alignItems: "center" }}>450 X 300</h3>
                </div>

                <div className="w-100 h-100 text-center">
                  <h6>{val.productName}</h6>
                  {val.rating &&
                    <>
                      <svg width="15px" height="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" fill="rgb(255,193,7)" /></svg>
                      <svg width="15px" height="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" fill="rgb(255,193,7)" /></svg>
                      <svg width="15px" height="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" fill="rgb(255,193,7)" /></svg>
                      <svg width="15px" height="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" fill="rgb(255,193,7)" /></svg>
                    </>
                  }
                  {val.productOldPrice !== null ?
                    <><p><span>{val.productNewPrice}</span><span> - </span><span>{val.productOldPrice}</span></p></> :
                    <p><span>{val.productNewPrice}</span></p>}
                  {val.sale ?
                    <button className="btn btn-outline-dark mt-auto" onClick={() => handleClick(index)}>
                      {cartItems[index] ? 'Remove' : 'Add to cart'}
                    </button> :
                    <button className="btn btn-outline-dark mt-auto" href="#">View Options</button>}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <footer className="py-5 bg-dark">
        <div className="container">
          <p className="m-0 text-center text-white">Copyright © Your Website 2023</p>
        </div>
      </footer>
    </>
  );
}

export default ShopCard;
