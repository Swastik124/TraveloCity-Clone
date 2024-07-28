import React from 'react'
import { useState} from 'react';
import './SignIn.css';



export const SignIn = () => {
    
    const [userEmail, setUserEmail] = useState('');
    const [userpassword, setUserPassword] = useState('');
    const [error, setError] = useState(null);
    const [keepSignedIn, setKeepSignedIn] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(ValidityState()){
            console.log('Form Submitted');
            fetch("http://localhost:3000/userData/").then((res)=>{
                return res.json();
               
            }).then((resp)=>{
                console.log(resp)
                if (Object.keys(resp).length === 0) {
                    window.alert('Please Enter valid username',
                    );
                    window.location.href="/SignIn";
                } else {
                    
                    console.log(x);
                    for (let i=0;i<x.length;i++)
                    {
                        if (x[i].email === userEmail && x[i].password === userpassword) {
                            window.location.href = "/SignIn";
                            console.log(x[i].email);
                        }else{
                           console.log("error");
                          
                        }
                    }
                    window.alert('Please Enter valid username or password');
                    window.location.href="/SignIn";
                    
                    // if (resp.password === password) {
                    //     toast.success('Success');
                    //     sessionStorage.setItem('username',username);
                    //     sessionStorage.setItem('userrole',resp.role);
                    //     usenavigate('/')
                    // }else{
                    //     alert('Please Enter valid credentials');
                    // }
                }
            // }).catch((err) => {
            //     alert('Login Failed due to :' + err.message);
            });
        }
    }

    const ValidityState = () => {
        let result=true;
        if(userEmail ==='' || userEmail=== null){
            toast.warning('Please enter User email');
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
        
        <div className="signInContainer" style={{display:'flex', alignItems:'center'}}>
            
            <div id="signInHead" style={{ height: '3rem', marginTop:'1rem' }}>
                <button className='prevBtn' onClick={goTo}>
                    <img src='https://www.svgrepo.com/show/356410/arrow-left-3.svg' />
                </button>
                <img id='headerLogo' style={{height:'1.875rem', padding:'0', margin:'0'}} src='https://www.travelocity.com/_dms/interstitial/logo.svg?locale=en_US&siteid=80001&2' />
            </div><hr />
    
          <div className='signInBody' style={{fontFamily:'-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif', fontWeight:'400'}}>
            <h1 ><b>Sign in</b></h1>

            <form onSubmit={handleSubmit}>
            <label >
                <input
                  type="text"
                  id="Email"
                  placeholder='Email'
                  value={userEmail} 
                  onChange={e=>setUserEmail(e.target.value)}
                  style={{height:'3rem'}}/>
              </label>
              <label>
                <input
                  type="password"
                  id="pass"
                  placeholder='Password'
                  value={userpassword} 
                  onChange={e=>setUserPassword(e.target.value)}
                  style={{height:'3rem'}}
                 />
              </label>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <input type="checkbox" checked={keepSignedIn} onChange={handleCheckboxChange} />
                <label>Keep me signed in</label>
              </div>
              <p id="keepSignedInMessage" style={{ display: keepSignedIn ? 'block' : 'none' }}>Selecting this checkbox will keep you signed into your account on this device until you sign out. Do not select this on shared devices.</p><br/>
              {error && <p style={{ color: 'red' }}>{error}</p>}
    
              <p>By signing in, I agree to the Travelocity <a href='https://www.travelocity.com/lp/lg-terms' style={{color:'blue', textDecoration:'underline'}}>Terms and Conditions </a>and <a href='https://www.travelocity.com/lp/b/lg-privacypolicy' style={{color:'blue', textDecoration:'underline'}}>Privacy Statement.</a></p><br/>
    
              <button id="submitBtn" type="submit">Sign In</button>
            </form>
            
          </div><br/>
          <p>Already have an account <a href='SignIn'style={{color:'blue', textDecoration:'underline'}}>Sign In</a></p><br/>
          <div className='icon' style={{display:'flex' ,alignItems:'center'}}>
            <img  id='apple' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA5r0_FrSjm2OgttQLwh_CnVCnzbJ7dLv6oA&s'/>
            <img id='fb' src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR3XyB5KnLk2ALgsLWUwpbVDuI6WOrmsdu9leOapY3J1YE8YJzd'/>
          </div>
    </div>
  )
}
export default SignIn;
