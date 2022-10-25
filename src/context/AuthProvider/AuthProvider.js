import { createContext, useState } from "react";
import {createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from "../../firebase/firebase.init";
import { useEffect } from "react";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) =>{
    const googleProvider = new GoogleAuthProvider()
    const gitHubProvider = new GithubAuthProvider()
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
  
    //1. Create User
    const createUser = (email, password) => {
      setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password)
    }
  
    //   2. Update Name
  
    const updateName = name => {
      setLoading(true)
      return updateProfile(auth.currentUser, { displayName: name })
    }
  
    //   3. Email Verify
    const verifyEmail = () => {
    //   setLoading(true)
      return sendEmailVerification(auth.currentUser)
    }
    const updateUserProfile = (profile) =>{
        return updateProfile(auth.currentUser, profile)
    }
  
    // 4. Google Signin
  
    const signInWithGoogle = () => {
      setLoading(true)
      return signInWithPopup(auth, googleProvider)
    }
     //github signin
    const signInWithGithub = () =>{
        setLoading(true);
        return signInWithPopup(auth,gitHubProvider)
    }
  
    // 5. Logout
    const logout = () => {
      setLoading(true)
      return signOut(auth)
    }
  
    //6. Login with Password
    const signin = (email, password) => {
      setLoading(true)
      return signInWithEmailAndPassword(auth, email, password)
    }
  
    //7. Forget Password
    const resetPassword = email => {
      setLoading(true)
      return sendPasswordResetEmail(auth, email)
    }
  
    useEffect(() => {
      //this part will execute once the component is mounted.
      const unsubscribe = onAuthStateChanged(auth, currentUser => {
        if(currentUser === null || currentUser.emailVerified){
            setUser(currentUser);}
        setLoading(false)
      })
  
      return () => {
        //this part will execute once the component is unmounted.
        unsubscribe()
      }
    }, [])
  
    const authInfo = {
      user,
      createUser,
      updateName,
      verifyEmail,
      signInWithGoogle,
      logout,
      signin,
      resetPassword,
      loading,
      setLoading,
      signInWithGithub,
      updateUserProfile
    }
  
    return (
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    )
}
export default AuthProvider;