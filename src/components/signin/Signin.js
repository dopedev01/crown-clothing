import { useState } from "react";
import Forminput from "../form-input/Forminput";
import './signin.scss';
import Button from "../button/Button";
import { createAuthUserWithEmailAndPassword,createUserDocumentFromAuth } from "../../utils/firebase/Firebase";
const defaultFormFields={
    
    email:'',
    password:''
}


const Signin=()=>{
    const [formFields,setformFields]=useState(defaultFormFields);
    const{ email ,password}=formFields;
    
    console.log(formFields)

    const resetFormFields=()=>{
        setformFields(defaultFormFields)
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
        

        try{

             
resetFormFields(); //to clear fields
        }catch(error){
            
            }
            

        }

    



    const handleChange=(e)=>{
        const{name,value}=e.target ; 

        setformFields({
            ...formFields,[name]:value
        })

    }
    
    
    
    return(
        <div className="sign-up-container">
            <h2>Already have an account</h2>
            <span>Sign in with Email</span>
            <form onSubmit={handleSubmit}>
                
                 
                
                
                <Forminput label='Email' type='email' required onChange={handleChange} name='email' value={email} />

                 
                <Forminput label='Password' type='password' required onChange={handleChange} name='password' value={password} />

                
                 

                <Button type="submit">Sign In</Button>
                <Button buttonType="google">Google sign n</Button>

            </form>
        </div>
    )
}

export default Signin;