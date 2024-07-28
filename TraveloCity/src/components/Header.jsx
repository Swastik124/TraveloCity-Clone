import React, { useState } from 'react'
import './Header.css'
import {Menu,MenuButton,MenuItem,MenuList,Button} from '@chakra-ui/react'
import { Popover, PopoverTrigger, PopoverContent,Portal,PopoverArrow,PopoverHeader,PopoverBody } from '@chakra-ui/react'
import {  MdFileDownload } from 'react-icons/md'
import {ChevronDownIcon} from '@chakra-ui/icons'
// import SignIn from './SignIn'


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
  // function Signin(){
    // window.location.href = "./SignIn.jsx"
  // }
  return (
    <div className="Header">
        <div className='sub-header'>
          <div className="sub-header1">
            <img src=".\src\assets\logo.png" alt="" className="logo" />
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />} backgroundColor={'#0b428b'} color={'white'} _hover={"backgroundColor='#0b428b'"}>Shop travel</MenuButton>
                <MenuList>
                  <MenuItem as={'a'} href='#'><b>Stays</b></MenuItem>
                  <MenuItem as={'a'} href='#'><b>Flights</b></MenuItem>
                  <MenuItem as={'a'} href='#'><b>Cars</b></MenuItem>
                  <MenuItem as={'a'} href='#'><b>Packages</b></MenuItem>
                  <MenuItem as={'a'} href='#'><b>Things to do</b></MenuItem>
                  <MenuItem as={'a'} href='#'><b>Cruises</b></MenuItem><br />
                  <MenuItem as={'a'} href='#'>Trips for Me</MenuItem>
                  <MenuItem as={'a'} href='#'>Discover</MenuItem>
                  <MenuItem as={'a'} href='#'>Travel Deals</MenuItem>
                  <MenuItem as={'a'} href='#'>Get Inspired</MenuItem>
                  <MenuItem as={'a'} href='#'>Groups and meetings</MenuItem>
                </MenuList>
            </Menu>
          </div>
          <div className="sub-header2">
         
          <Button colorScheme={'white'}  leftIcon={<MdFileDownload/>} variant='outline' alignSelf={'center'} id='GettheApp' onClick={DownloadtheApp} borderRadius={'5rem'}>Get the App</Button>
          <Button onClick={Listyourproperty} id='BB'  backgroundColor={'#0b428b'} color={'white'} alignSelf={'center'}>List your property</Button>
          <Button onClick={Support} id='BB' backgroundColor='#0b428b' color={'white'} alignSelf={'center'}>Support</Button>
          <Button onClick={Trips} backgroundColor={'#0b428b'} color={'white'} id='BB' alignSelf={'center'}>Trips</Button>
          <Popover><PopoverTrigger><Button backgroundColor={'#0b428b'} color={'white'} _hover={"backgroundColor='#0b428b'"} alignSelf={'center'}>Sign in</Button></PopoverTrigger><Portal><PopoverContent><PopoverArrow /><PopoverHeader >Members can access discounts and special features</PopoverHeader><PopoverBody>
          <Button colorScheme={'blue'} width={'100%'} backgroundColor={'#0b4fa2'} alignSelf={'center'} borderRadius={'5rem'} /*onClick={Signin}*/>Signin</Button></PopoverBody></PopoverContent></Portal></Popover>
          
          
          </div>
        </div>
    </div>
  )
};
export default Header