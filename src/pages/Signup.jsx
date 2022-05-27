import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { auth } from '../config/firebase'
import { UserState } from '../Context'
import '../styles/signup.css'
function Signup() {  
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const {setAlert} = UserState()
 const handleSignup=async () =>{
   if(name.length<2){
      setAlert({
        open:true,
        message:'Name must be at least 3 characters',
        type:'error'

      })
      return
    }
   if(password!==confirmPassword){
      setAlert({
        open:true,
        message:'Passwords do not match',
        type:'error'
      });
      return;   
    }
  
  try{
    const result = await createUserWithEmailAndPassword(auth,email,password)
    console.log(result)
    setAlert({
      open:true,
      message:`Signup Sucessfull ,Welcome to SpaceX ${result.user.email}`,
      type:'success'
    })
  }catch(error){
    setAlert
    ({
      open:true,
      message:error.message,
      type:'error'
    })
   
  }
 }

  function handleLogin(){
    navigate('/')
  }
  
  return (
    <div className='half'>

        
      
      {/******* Signup Form *********** */}
        <div className='signupform'>
          <h2 style={{color:'#fff'}}>Sign Up</h2>
          
         
         <div style={{marginTop:'45px'}}>

            <input required value={name} onChange={(e)=>setName(e.target.value)}   type='text' placeholder='Name'  /><br/>
                       
            <input required value={email} onChange={(e)=>setEmail(e.target.value)}  type='email' placeholder='Email'/><br/>

            <input required  type='password' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}/><br/>
            
            <input required  type='password' placeholder='Confirm Password' value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/><br/>
            
            <button onClick={handleSignup}>Sign Up</button>
           <div>
            <h4 style={{fontFamily:'cursive',color:'grey',marginTop:'10px'}}>Already have an account?<p className='login' onClick={handleLogin}>Login!</p></h4>
            </div>
          </div>
        </div>

        

    </div>

  )
}

export default Signup