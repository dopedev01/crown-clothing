import { useState } from "react";
import Forminput from "../form-input/Forminput";
import './signup.scss';
import Button from "../button/Button";
import { createAuthUserWithEmailAndPassword,createUserDocumentFromAuth } from "../../utils/firebase/Firebase";
const defaultFormFields={
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''
}


const Signup=()=>{
    const [formFields,setformFields]=useState(defaultFormFields);
    const{displayName ,email ,password ,confirmPassword }=formFields;
    
    console.log(formFields)

    const resetFormFields=()=>{
        setformFields(defaultFormFields)
    }

    const handleSubmit=async(e)=>{
        e.preventDefault();
        if(password!== confirmPassword){
            alert("password do not match");
            return;
        }

        try{

            const {user}=await createAuthUserWithEmailAndPassword(email,password);
             await createUserDocumentFromAuth(user,{displayName})
             resetFormFields(); 
        }catch(error){
            if(error.code==='auth/email-already-in-use'){
                alert('Email already in use')
            }else{
                console.log('user creation error',error)
            }
            

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
            <h2>Dont have an account</h2>
            <span>Sign up with Email</span>
            <form onSubmit={handleSubmit}>
                
                <Forminput label='Displayname' type='text' required onChange={handleChange} name='displayName'  value={displayName}/>
                
                
                <Forminput label='Email' type='email' required onChange={handleChange} name='email' value={email} />

                 
                <Forminput label='Password' type='password' required onChange={handleChange} name='password' value={password} />

                
                <Forminput label='ConfirmPassword' type='password' required onChange={handleChange} name='confirmPassword' value={confirmPassword} />

                <Button type="submit">Sign up</Button>

            </form>
        </div>
    )
}

export default Signup;