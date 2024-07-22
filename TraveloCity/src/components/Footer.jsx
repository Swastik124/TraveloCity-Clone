import React from 'react'
import './Footer.css'
import { Image,Button } from '@chakra-ui/react'
import Epedialogo from '/src/assets/EG_Wordmark_blue_RGB.svg'

const Footer = () => {
    function epediagroup(){
        window.location.href='https://www.expediagroup.com/home/default.aspx'
    }
  return (
    <div className='epedia'>
        <div>
            <Button onClick={epediagroup}>
                <Image objectFit='cover' src={Epedialogo} alt='Dan Abramov' _hover="cursor='grab'" id='ep'/>
            </Button>
        </div>
         <br />
        <div className='contents'>
            <div className="company" ><b>Company</b><br /><br />
                <ul><a href="https://www.expediagroup.com/home/default.aspx">About</a></ul> 
                <ul><a href="https://careers.expediagroup.com/">Jobs</a></ul> 
                <ul><a href="https://partner.expediagroup.com/en-us">List your property</a></ul> 
                <ul><a href="https://partner.expediagroup.com/en-us">Partnerships</a></ul> 
                <ul><a href="https://www.travelocity.com/pressroom/">Newsroom</a></ul> 
                <ul><a href="https://www.expediagroup.com/investors/investors-overview/default.aspx">Investor Relations</a></ul> 
                <ul><a href="https://roaminggnomestore.com/">Roaming Gnome Store</a></ul> 
                <ul><a href="https://advertising.expedia.com/getting-started/brands/travelocity/">Advertising</a></ul> 
            </div>
            <div className="explore"><b>Explore</b><br /><br />
                <ul><a href="https://www.travelocity.com/Destinations-In-United-States-Of-America.d201.Vacation-Rental-Destinations">Vacation Rentals in United States</a></ul>
                <ul><a href="https://www.travelocity.com/United-States-Of-America.d201.Destination-Travel-Guides">Vacation Packages in United States</a></ul>
                <ul><a href="https://www.travelocity.com/Destinations-In-United-States-Of-America.d201.Flight-Destinations">Domestic Flights</a></ul>
                <ul><a href="https://www.travelocity.com/Destinations-In-United-States-Of-America.d201.Car-Rental-Destinations">Car Rentals in United States</a></ul>
                <ul><a href="https://www.travelocity.com/reviews">Travelocity Reviews</a></ul>
                <ul><a href="https://www.travelocity.com/lp/deals/coupons-promo-codes-exclusive-discounts">Travelocity Coupons</a></ul>
                <ul><a href="https://www.travelocity.com/Accommodations">Unique Places to Stay</a></ul>
                <ul><a href="https://www.travelocity.com/inspire">Travel Blog</a></ul>
            </div>
            <div className="policies"><b>Policies</b><br /><br />
                <ul><a href="https://www.travelocity.com/privacy">Privacy Policy</a></ul>
                <ul><a href="https://www.travelocity.com/legal/cookies">Cookies</a></ul>
                <ul><a href="https://www.travelocity.com/lp/lg-terms">Terms of Use</a></ul>
                <ul><a href="https://www.vrbo.com/legal/terms-and-conditions">Vrbo Terms and Conditions</a></ul>
                <ul><a href="https://www.travelocity.com/p/info-other/web-accessibility-policy">Accessibility</a></ul>
                <ul><a href="https://www.travelocity.com/dnsmpi">Your Privacy Choices</a></ul>
            </div>
            <div className="help"><b>Help</b><br /><br />
                <ul><a href="https://www.travelocity.com/service/">Support</a></ul>
                <ul><a href="https://www.travelocity.com/service/#/articles/418/34/13190">Cancel your hotel or vacation rental booking</a></ul>
                <ul><a href="https://www.travelocity.com/service/#/articles/416/34/13148">Cancel your flight</a></ul>
                <ul><a href="https://www.travelocity.com/service/#/myTrips/19432">Refund timelines, policies & processes</a></ul>
                <ul><a href="https://www.travelocity.com/service/#/article/13185">Use a Travelocity coupon</a></ul>
            </div>
        </div>
        <br />
        <p>© 2024 Travelscape LLC, an Expedia Group company. All rights reserved. Travelocity, the Stars Design, and The Roaming Gnome Design are trademarks or registered trademarks of Travelscape LLC. CST# 2083930-50.</p>
    </div>
  )
}

export default Footer