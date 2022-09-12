// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword
} from 'firebase/auth';
import {getFirestore,doc,getDoc,setDoc} from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyAa9ofakEm45C-EXbyTBQdpwcpeS9eVCW4",
    authDomain: "crwn-clothing-d3970.firebaseapp.com",
    projectId: "crwn-clothing-d3970",
    storageBucket: "crwn-clothing-d3970.appspot.com",
    messagingSenderId: "760716355366",
    appId: "1:760716355366:web:e4bdb0f3c80de8cabe03e7"
};


// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
 
const googleProvider=new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt:"select_account"
})

export const auth= getAuth();
export const signInWithGooglePopup=()=> signInWithPopup(auth,googleProvider);
export const signInWithGoogleRedirect=()=>signInWithRedirect(auth,googleProvider);  //2 time written


export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth,additionalInformation={}) => {
    if(!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid);
  
    console.log(userDocRef);
    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
    
        try {
          await setDoc(userDocRef, {
            displayName,
            email,
            createdAt,
            ...additionalInformation
          });
        } catch (error) {
          console.log('error creating the user', error.message);
        }
      }
    
      return userDocRef;
 
};

export const createAuthUserWithEmailAndPassword = async(email,password)=>{
   if(!email || !password) return;
    
   return await  createUserWithEmailAndPassword(auth,email,password)
}
 