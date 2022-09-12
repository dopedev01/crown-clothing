import React from 'react'
import Signup from '../../components/signup/Signup';
import Signin from '../../components/signin/Signin';
import { signInWithGooglePopup,signInWithGoogleRedirect,createUserDocumentFromAuth } from '../../utils/firebase/Firebase';
const Authentication=()=> {

   

const logGoogleUser=async()=>{
    const  {user}=await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
}
 


  return (
    <div>
        <h1>Am a sign in</h1>
        <button onClick={logGoogleUser}>
            Sign In With Google Popup
        </button>
        <Signup/> 
         
        <Signin/>
        
    </div>
  )
}
export default Authentication;
