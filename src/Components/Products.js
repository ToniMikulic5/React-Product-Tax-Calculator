import { useState } from "react";


function Products(props){
    let [newProductName,setNewProductName]=useState();
    let[newProductPrice,setNewProductPrice]=useState();
    let[infoMessage,setInfoMessage]=useState();
   
    let [products,setProducts]=useState({
        'Iphone 14':1000,
        'Iphone 15':1300,
        'Iphone 16':1400,
    } )
    function addProduct(){
        if(newProductName===""){
            return;
        }
        if(newProductPrice===""){
            return;
        }
        console.log("Svje je unjeto")
        let newProduct={[newProductName]:parseInt(newProductPrice)}
        setProducts(currentProduct=>({
            ... currentProduct,
            ... newProduct
       }))
    }
    function Search(e){
        
        const searchTerm=e.target.value.toLowerCase(); 
        
        const productsNames=Object.keys(products); 
        
       
        for(let product in productsNames){ 
            let name=productsNames[product].toLowerCase(); 

            if(searchTerm === name){ 
                setInfoMessage("Nasli smo proizvod")
                break;
            }else{
                setInfoMessage("Nismo nasli proizvod")
            }
        }

    }

    return (
        <div>
         <div className="d-flex justify-content-center">
         {Object.entries(products).map(([phone,price])=>(
            <div> 
                <h3>{phone} </h3>
                <p>{CalculateTax(price,props.tax)}</p>
            </div>
            ))}

         </div>
         <div>
            <input type="text" onInput={Search} placeholder="Unesite ime proizvoda za pretragu"></input>
            <p>{infoMessage}</p>
         </div>

         <button onClick={()=>setProducts({})} >Delete Products</button>
         <h3>Unesite proizvode</h3>
         <div className="form-control">
         <input className="mt-2" type="text" onInput={(e)=>setNewProductName(e.target.value)} placeholder="Unesite ime proizvoda"></input>
         </div>
         <div className="form-control">
         <input className="mt-2" type="number" onInput={(e)=>setNewProductPrice(e.target.value)} placeholder="Unesite cijenu proizvoda"></input>
         </div>
        
        <button className="btn btn-primary" onClick={addProduct}>Unos</button>
        </div>
    )
}

function CalculateTax(price,tax){
 return((price*tax)/100)+price
}

export default Products;