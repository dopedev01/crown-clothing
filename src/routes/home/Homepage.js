import React from "react";
import Directory from "../../components/directory/Directory";
import './homepage.scss';
import { Outlet } from "react-router-dom";



const Homepage=()=>(
    <div>
        
         <div className='homepage'>
        <Directory/>
    </div>
    <Outlet/>
    </div>
   
);

export default Homepage;