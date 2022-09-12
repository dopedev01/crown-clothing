import { useState } from "react";
import Forminput from "../form-input/Forminput";
import './signin.scss';
import Button from "../button/Button";
import { signInWithGooglePopup,createUserDocumentFromAuth,signInAuthUserWithEmailAndPassword} from "../../utils/firebase/Firebase";
const defaultFormFields={
    
    email:'',
    password:''
}


const Signin=()=>{
    const [formFields,setformFields]=useState(defaultFormFields);
    const{ email ,password}=formFields;
    
   // console.log(formFields)

    const resetFormFields=()=>{
        setformFields(defaultFormFields)
    }
    const signInWithGoogle=async()=>{
        const  {user}=await signInWithGooglePopup();        //SWGP button method
         await createUserDocumentFromAuth(user);
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
        

    try{

             const response=await signInAuthUserWithEmailAndPassword(email,password);
             console.log(response)
              resetFormFields();  
    }
    catch(error){
            console.log(error)
            if(error.code==="auth/wrong-password"){
                alert('incorrect password for email')
            }
            else if(error.code==="auth/user-not-found"){
                alert('no user with this email')
            }
    }
            

          }

    



    const handleChange=(e)=>{
        const{name,value}=e.target ; 

        setformFields({...formFields,[name]:value})

    }
    
    
    
    return(
        <div className="sign-up-container">
            <h2>Already have an account</h2>
            <span>Sign in with Email</span>
            <form onSubmit={handleSubmit}>
                
                 
                
                
                <Forminput label='Email' type='email' required onChange={handleChange} name='email' value={email} />

                 
                <Forminput label='Password' type='password' required onChange={handleChange} name='password' value={password} />

                
                 
                <div className="buttons-container">
                <Button type="submit">Sign In</Button>
                <Button type="button" id='g-btn' onClick={signInWithGoogle} buttonType="google" >Google sign in</Button>

                </div>
                
            </form>
        </div>
    )
}

export default Signin;