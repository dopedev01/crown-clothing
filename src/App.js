import React from 'react';
import './App.css';
import Homepage from './routes/home/Homepage';
import Nav from './routes/nav/Nav';
import Authentication from './routes/authentication/Authentication';
import {Routes,Route,Outlet} from 'react-router-dom';



 
const Shop=()=>{
  return(<h1>Am a Shop</h1>)
}
 

function App() {
  return (
    <div>
      <Routes>
         <Route path='/' element={<Nav/>}> 
        <Route  index element={<Homepage/>}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path='auth' element={<Authentication/>}/>
        </Route>
       
      </Routes>
         
    </div>
     
  );
}

export default App;
