import React from 'react'
import {toast} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

import { useState} from 'react';
import './SignIn.css';
import Home from './Home';


export const SignUp = () => {
    
    const [userEmail, setUserEmail] = useState('');
    const[userFirstName, setFirstName]= useState('');
    const[userLastName,setLastName ] =useState('');
    const [userpassword, setUserPassword] = useState('');
    const [error, setError] = useState(null);
    const [keepSignedIn, setKeepSignedIn] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(ValidityState()){
            console.log('Form Submitted');
            const userData = {
              email: userEmail,
              firstName: userFirstName,
              lastName: userLastName,
              password: userpassword,
              keepSignedIn: keepSignedIn,
            };
          
            fetch("http://localhost:3000/userData/",{
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
            },
          body: JSON.stringify(userData),
          })
            
            
            .then((res)=>{
                return res.json();
            }).then((resp)=>{
                console.log(resp);
                
            }).catch((err)=>{
                console.log(err);
            })
        }
    }

    const ValidityState = () => {
        let result=true;
        if(userEmail ==='' || userEmail=== null){
            toast.warning('Please enter User email');
        }
        if(userFirstName==='' || userFirstName=== null){
            toast.warning('Please enter First Name');
        }
        if(userLastName==='' || userLastName=== null){
            toast.warning('Please enter Last Name');
            }
    
    if(userpassword ==='' || userpassword=== null){
        toast.warning('Please enter password');
    }
    return result;
}

    const handleCheckboxChange = () => {
    setKeepSignedIn(!keepSignedIn);
  };
  function goTo(){
    window.location.href = "/Home";
  }

    return (
        
        <div className="signInContainer">
            
            <div id="signInHead" style={{ height: '3rem' }}>
                <button className='prevBtn' onClick={goTo}>
                    <img src='https://www.svgrepo.com/show/356410/arrow-left-3.svg' />
                </button>
                <img id='headerLogo' style={{height:'1.875rem', padding:'0', margin:'0'}} src='https://www.travelocity.com/_dms/interstitial/logo.svg?locale=en_US&siteid=80001&2' />
            </div><hr />
    
          <div className='signInBody'>
            <h1>Create an account</h1>

            <form onSubmit={handleSubmit}>
            <label>
                <input
                  type="text"
                  id="Email"
                  placeholder='Email'
                  value={userEmail} 
                  onChange={e=>setUserEmail(e.target.value)}/>
              </label>
                <label>
                    <input
                    type="text"
                    id='FirstName'
                    placeholder='First Name'
                    value={userFirstName} 
                    onChange={e=>setFirstName(e.target.value)} />
                </label>
                <label>
                    <input
                    type="text"
                    id='LastName'
                    placeholder='Last Name'
                    value={userLastName} 
                    onChange={e=>setLastName(e.target.value)} />
                </label>
              
              <label>
                <input
                  type="password"
                  id="pass"
                  placeholder='Password'
                  value={userpassword} 
                  onChange={e=>setUserPassword(e.target.value)}
                 />
              </label>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <input type="checkbox" checked={keepSignedIn} onChange={handleCheckboxChange} />
                <label>Keep me signed in</label>
              </div>
              <p id="keepSignedInMessage" style={{ display: keepSignedIn ? 'block' : 'none' }}>Selecting this checkbox will keep you signed into your account on this device until you sign out. Do not select this on shared devices.</p><br/>
              {error && <p style={{ color: 'red' }}>{error}</p>}
    
              <p>By signing in, I agree to the Travelocity <a href='https://www.travelocity.com/lp/lg-terms' style={{color:'blue', textDecoration:'underline'}}>Terms and Conditions </a>and <a href='https://www.travelocity.com/lp/b/lg-privacypolicy' style={{color:'blue', textDecoration:'underline'}}>Privacy Statement.</a></p><br/>
    
              <button id="submitBtn" type="submit">Continue</button>
            </form>
            
          </div><br/>
          <p>Already have an account <a href='SignIn'style={{color:'blue', textDecoration:'underline'}}>Sign In</a></p><br/>
          <div className='icon'>
            <img id='apple' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA5r0_FrSjm2OgttQLwh_CnVCnzbJ7dLv6oA&s'/>
            <img id='fb' src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR3XyB5KnLk2ALgsLWUwpbVDuI6WOrmsdu9leOapY3J1YE8YJzd'/>
          </div>
    </div>
  )
}
export default SignUp;
