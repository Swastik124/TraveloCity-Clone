import React, { useState } from 'react';
import Home from './Home'
import './SignIn.css';

const SignIn = () => {
    const [userEmail, setUserEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [keepSignedIn, setKeepSignedIn] = useState(false)

    async function getData() {
        console.log(1)
        let res = await fetch(`http://localhost:3000/userData`);
        let fetchedData = await res.json();
        let DataEmail=  setUserEmail(fetchedData.email);
        // let DataPass= setPassword(fetchedData.password)
        
        console.log(fetchedData);
       
        console.log(2)
    }

    const handleSubmit = (getData) => {
        getData.preventDefault();
        let Email = document.getElementById("Email");
        let pass = document.getElementById("pass");
        // Add your authentication logic here
        // For example:
        console.log(3)
        console.log(userEmail)

        if (fetchedData.email === Email.value && fetchedData.password=== pass.value) {
            console.log(4)
            console.log("login")
            
            // Login successful, redirect to dashboard
            // window.location.href = './Home';
        } else {
            setError('Invalid username or password');
        }
    };
    const handleCheckboxChange = () => {
        setKeepSignedIn(!keepSignedIn)
      }
    

    return (
        <>

            <div className="signInContainer">

                <div id='signInHead'>
                    <img id='headerLogo' src='https://www.travelocity.com/_dms/interstitial/logo.svg?locale=en_US&siteid=80001&2' />
                    <button className='prevBtn' >
                        <img src='https://www.svgrepo.com/show/356410/arrow-left-3.svg' />
                        <a onClick={Home}></a>
                    </button>
                </div><hr />

                <div className='signInBody'>
                    <h1>Sign In</h1>
                    <form onSubmit={handleSubmit}>
                        <label>
                            
                            <input
                                type="text"
                                id="Email"
                                placeholder='Email'
                                onChange={(event) => setUserEmail(event.target.value)} />
                        </label>
                        <br />
                        <label>
                            
                            <input
                                type="password"
                                id="pass"
                                placeholder='Password'
                                onChange={(event) => setPassword(event.target.value)} />
                        </label>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <input type="checkbox"  checked={keepSignedIn} onChange={handleCheckboxChange} />
                            <label>Keep me signed in</label>
                        </div>
                        <p id="keepSignedInMessage" style={{ display: keepSignedIn ? 'block' : 'none' }}>Selecting this checkbox will keep you signed into your account on this device until you sign out. Do not select this on shared devices.</p>
                        {error && <p style={{ color: 'red' }}>{error}</p>}

                        <p>By signing in, I agree to the Travelocity <a href='https://www.travelocity.com/lp/lg-terms'>Terms and Conditions </a>and <a href='https://www.travelocity.com/lp/b/lg-privacypolicy'>Privacy Statement.</a></p>

                        {/* {error && <p style={{ color: 'red' }}>{error}</p>} */}
                        <button id="submitBtn" type="submit" onClick={getData}>Sign In</button>

                    </form>
                </div>
            </div></>
        // onClick={()=>{setPage(page-1)}
    );
}

export default SignIn;