import React from 'react'
import Home from "./components/Home"
//  import SignUp from './components/SignUp'
// import SignIn from './components/SignIn';
// import DestinationDetails from './components/DestinationDetails'
import DestinationDetails from './components/DestinationDetails/DestinationDetails'
import Header from './components/Header'
import Footer from './components/Footer';
import Navbar from './components/Navbar'

function App() {
  return (
        <div>
          <div className="Header"><Header></Header></div>
           <div className="Navbar"><Navbar></Navbar></div>
          <DestinationDetails/>
          <div className="Footer"><Footer></Footer></div>
          {/*<FinalSubmit/>
            <Payment/>
            <PaymentForm/>
            <PriceDetail/>*/}
          </div>
        )

}
export default App;

