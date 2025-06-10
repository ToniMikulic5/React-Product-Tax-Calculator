
import Products from './Components/Products'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'



function App(){

  
  let [tax,setTax]=useState(0);

  return (
    <div className='container'> 
    <Products tax={tax}/> 

    <div className='mt-3'>
    <input className='form-control' type='text' onInput={(e)=>setTax(e.target.value)} placeholder='Tax' ></input>
    </div>
    
    
    </div>
    
  )
}

export default App;