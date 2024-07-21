import React, { useState } from 'react'
import './Header.css'
import {Menu,Box,MenuButton,MenuItem,MenuList,Button, background} from '@chakra-ui/react'
import {  MdFileDownload } from "react-icons/md"
import { color } from 'framer-motion';
// import {  } from '@chakra-ui/react'
// import {ChevronDownIcon} from '@chakra-ui/react/icon'


const Header = () =>{
  function Listyourproperty(){
    window.location.href = "https://apps.expediapartnercentral.com/en_US/list?utm_contentewd=pwa-header-btn&siteId=80001&tpid=80001&eapid=0&langId=1033&lasttouchMktgcode=Brand.DTI"
  }
  function Support(){
    window.location.href = "https://www.travelocity.com/helpcenter"
  }
  function DownloadtheApp(){
    window.location.href = "https://www.travelocity.com/app?~customer_ad_set_name=TRAVELOCITY-US&~customer_ad_name=BRAND.TRAVELOCITY.OWNED.BRANCH.DEFAULT.MAD&~customer_campaign=BRAND&~customer_placement=TVLY-NAVBAR-DESKTOP-CTADESKTOP&~placement_id=Homepage&custom_web_attribute=9dda052b-d828-4b65-83ab-fa42719f1677&%24canonical_url=https%3A%2F%2Fwww.travelocity.com%2F"
  }
  function Trips(){
    window.location.href = "https://www.travelocity.com/trips"
  }
  return (
    <div>
        <div className="Header">
          <div className="sub-header">
            <img src=".\src\assets\logo.png" alt="" className="logo" />
            <Box>
              {/* borderRight={<ChevronDownIcon/>} */}
              <Menu >
                <MenuButton as={Button} height='25px' backgroundColor='#0b428b' color='white' id='Shop-travel' _hover="backgroundColor='#0b428b'" >Shop travel</MenuButton>
                  <MenuList>
                    <MenuItem as='a' href='https://www.google.com' ><b>Stays</b></MenuItem>
                    <MenuItem as='a' href='#'><b>Flights</b></MenuItem>
                    <MenuItem as='a' href='#'><b>Cars</b></MenuItem>
                    <MenuItem as='a' href='#'><b>Packages</b></MenuItem>
                    <MenuItem as='a' href='#'><b>Things to do</b></MenuItem>
                    <MenuItem as='a' href='#'><b>Cruises</b></MenuItem>
                  <br/>
                    <MenuItem as='a' href='#'>Trips for Me</MenuItem>
                    <MenuItem as='a' href='#'>Discover</MenuItem>
                    <MenuItem as='a' href='#'>Travel Deals</MenuItem>
                    <MenuItem as='a' href='#'>Get Inspired</MenuItem>
                    <MenuItem as='a' href='#'>Groups & Meetings</MenuItem>
                  </MenuList>
              </Menu>
            </Box>
          </div>
          <div className="sub-header2">
          <Button leftIcon={<MdFileDownload/>} colorScheme='white' variant='outline' id='Get-the-App' onClick={DownloadtheApp} size='md'>Get the App</Button>
          <Button onClick={Listyourproperty} id='Listyourproperty' backgroundColor='#0b428b' color='white'>List your property</Button>
          <Button onClick={Support} id='Support' backgroundColor='#0b428b' color='white'>Support</Button>
          <Button onClick={Trips} backgroundColor='#0b428b' color='white'>Trips</Button>
          <Button backgroundColor='#0b428b' color='white'>Sign in</Button>
          {/* onClick={Signin} */}
          
          </div>
        </div>
    </div>
  )
};
export default Header