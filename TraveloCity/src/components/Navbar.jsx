import React,{useState} from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, TabIndicator, Img, Checkbox,Stack } from '@chakra-ui/react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Button
  } from '@chakra-ui/react'
  import Search from "../assets/search.png";
  import { ChevronDownIcon } from '@chakra-ui/icons'
  import { InputGroup, Input, InputLeftElement, Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverBody } from '@chakra-ui/react';
  import {  FaLocationDot,FaUser } from "react-icons/fa6";
  
  import { BiCalendarCheck } from "react-icons/bi";
  // import './Navbar.css'

const Navbar = () => {
    const [selectedValue, setSelectedValue] = useState('Economy');
    const [tabIndex, setTabIndex] = useState(0)
    const [staysText, setStaysText] = useState('Stays');
  const [flightsText, setFlightsText] = useState('Flights');
  const [carsText, setCarsText] = useState('Cars');
  const [selectedCount, setSelectedCount] = useState(0);
    const [travelers, setTravelers] = useState({
      adults: 2,
      children: 0,
      infants: 0,
    });
    const [isOpen, setIsOpen] = useState(false);
  
    const handleIncrement = (type) => {
      setTravelers((prevTravelers) => ({ ...prevTravelers, [type]: prevTravelers[type] + 1 }));
    };
  
    const handleDecrement = (type) => {
      setTravelers((prevTravelers) => ({ ...prevTravelers, [type]: Math.max(0, prevTravelers[type] - 1) }));
    };
  const handleMenuItemClick = (value) => {
    setSelectedValue(value);
  };
  const handleStaysClick = () => {
    if (staysText === 'Stays') {
      setStaysText('Stays added');
      setSelectedCount(selectedCount + 1);
    } else {
      setStaysText('Stays');
      setSelectedCount(selectedCount - 1);
    }
  };

  const handleFlightsClick = () => {
    if (flightsText === 'Flights') {
      setFlightsText('Flights added');
      setSelectedCount(selectedCount + 1);
    } else {
      setFlightsText('Flights');
      setSelectedCount(selectedCount - 1);
    }
  };

  const handleCarsClick = () => {
    if (carsText === 'Cars') {
      setCarsText('Cars added');
      setSelectedCount(selectedCount + 1);
    } else {
      setCarsText('Cars');
      setSelectedCount(selectedCount - 1);
    }
  };
        
  return (
    <div style={{marginTop:'3rem'}}>
        <div className="title">
        <Tabs onChange={(index) => setTabIndex(index)} position='relative' variant='unstyled' align='center'>
            <TabList>
                <Tab><b>Stays</b></Tab>
                <Tab><b>Flights</b></Tab>
                <Tab><b>Cars</b></Tab>
                <Tab><b>Packages</b></Tab>
                <Tab><b>Things to do</b></Tab>
                <Tab><b>Cruises</b></Tab>
            </TabList>
            <TabIndicator mt='-1.5px' height='2px' bg='blue.500' borderRadius='1px' />
            <TabPanels marginTop={'2rem'}>
                <TabPanel align='start'><h1>Stays</h1></TabPanel>
                <TabPanel>
                    <Tabs onChange={(index) => setTabIndex(index)} align='start'>
                        <TabList>
                            <Tab><b>RoundTrip</b></Tab>
                            <Tab><b>One-way</b></Tab>
                            <Tab><b>Multi-city</b></Tab>
                            <Menu closeOnSelect={true}>
                                <MenuButton as={Button} rightIcon={<ChevronDownIcon/>} border={'2px solid black'} borderRadius={'3rem'} id='T' >{selectedValue}</MenuButton>
                                    <MenuList minWidth='240px'>
                                        <MenuOptionGroup defaultValue='Economy' type='radio'>
                                            <MenuItemOption value='Economy' id='Option' onClick={() => handleMenuItemClick('Economy')}>Economy</MenuItemOption>
                                            <MenuItemOption value='Premium economy' id ='Option' onClick={() => handleMenuItemClick('Premium economy')}>Premium economy</MenuItemOption>
                                            <MenuItemOption value='Buisness class' id='Option' onClick={() => handleMenuItemClick('Buisness class')}>Buisness class</MenuItemOption>
                                            <MenuItemOption value='First class' id='Option' onClick={() => handleMenuItemClick('First class')}>First class</MenuItemOption>
                                        </MenuOptionGroup>
                                    </MenuList>
                            </Menu>
                        </TabList>
                        <TabPanels>
                            <TabPanel><h1>RoundTrip</h1></TabPanel>
                            <TabPanel><h1>One-way</h1></TabPanel>
                            <TabPanel><h1>Multi-city</h1></TabPanel>
                        </TabPanels>
                    </Tabs>
                </TabPanel>
                <TabPanel>
                    <Tabs onChange={(index) => setTabIndex(index)} align='start'>
                        <TabList>
                            <Tab><b>Rental cars</b></Tab>
                            <Tab><b>Airport transportation</b></Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel><h1>Rental cars</h1></TabPanel>
                            <TabPanel><h1>Airport transportation</h1></TabPanel>
                        </TabPanels>
                    </Tabs>
                </TabPanel>
                <TabPanel align='start'>
        <Button
        onClickCapture={handleStaysClick}
        border={'2px solid black'}
        borderRadius={'3rem'}
        marginLeft={'1rem'}
        value={staysText}
        disabled={selectedCount > 2 && staysText === 'Stays added'}
        >
        {staysText}
        </Button>
        <Button
        onClickCapture={handleFlightsClick}
        border={'2px solid black'}
        borderRadius={'3rem'}
        marginLeft={'1rem'}
        value={flightsText}
        disabled={selectedCount > 2 && flightsText === 'Flights added'}
        >
        {flightsText}
        </Button>
        <Button
        onClickCapture={handleCarsClick}
        border={'2px solid black'}
        borderRadius={'3rem'}
        marginLeft={'1rem'}
        value={carsText}
        disabled={selectedCount > 2 && carsText === 'Cars added'}
        >
        {carsText}
        </Button>
        <Menu closeOnSelect={true}>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon/>} border={'2px solid black'} borderRadius={'3rem'} marginLeft={'1rem'} >{selectedValue}</MenuButton>
                <MenuList minWidth='240px'>
                    <MenuOptionGroup defaultValue='Economy' type='radio'>
                        <MenuItemOption value='Economy' id='Option' onClick={() => handleMenuItemClick('Economy')}>Economy</MenuItemOption>
                        <MenuItemOption value='Premium economy' id ='Option' onClick={() => handleMenuItemClick('Premium economy')}>Premium economy</MenuItemOption>
                        <MenuItemOption value='Buisness class' id='Option' onClick={() => handleMenuItemClick('Buisness class')}>Buisness class</MenuItemOption>
                        <MenuItemOption value='First class' id='Option' onClick={() => handleMenuItemClick('First class')}>First class</MenuItemOption>
                </MenuOptionGroup>
            </MenuList>
        </Menu>
        {selectedCount < 2 && (
  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '2rem' }}>
    <img src={Search} alt="SearchIcon" />
    <p align="center">Please select two or more items</p>
    <p align="center">To start building your trip, choose two or more items</p>
  </div>) || (<div style={{marginTop:'2rem',marginLeft:'-2rem'}}>
    {selectedCount === 2 && staysText === 'Stays added' && carsText === 'Cars added' && (
      <div style={{display:'flex'}}><InputGroup width={'23%'} marginLeft="3%">
        <InputLeftElement pointerEvents="none">
          <FaLocationDot color="black.1000" />
        </InputLeftElement>
        <Input type="text" placeholder="Going to" border={'1.5px solid black'} borderRadius={'1rem'} _hover={{border:'1.5px solid black',borderRadius:'1rem'}}/>
      </InputGroup>
      <InputGroup width={'25%'} ><h5 style={{marginTop:'2%',marginRight:'2%',marginLeft:'5%'}}>From</h5>
             <Input placeholder='Dates' size='md' type='date' border={'1.5px solid black'} borderRadius={'1rem'} _hover={{border:'1.5px solid black',borderRadius:'1rem'}}/><h5 style={{marginTop:'2%',marginRight:'2%',marginLeft:'5%'}}>To</h5>
             <Input size='md' type='date' border={'1.5px solid black'} borderRadius={'1rem'} _hover={{border:'1.5px solid black',borderRadius:'1rem'}}/>
            </InputGroup>
      <InputGroup width={'23%'} >
      <InputLeftElement pointerEvents="none">
        <FaUser color="black.1000" style={{marginRight:'-3rem'}}/>
      </InputLeftElement>
      <Input
      _hover={{border:'1.5px solid black',borderRadius:'1rem'}}
      border={'1.5px solid black'} borderRadius={'1rem'}
      marginLeft={'6%'}
        type="text"
        placeholder="Travelers"
        value={`${travelers.adults} Adults, ${travelers.children} Children, ${travelers.infants} Infants`}
        onClick={() => setIsOpen(true)}
      />
      <Popover isOpen={isOpen} onClose={() => setIsOpen(false)} >
        <PopoverContent position={'fixed'} top={'-25%'} marginLeft={'-12%'} >
          <PopoverHeader fontWeight="semibold">Room 1</PopoverHeader>
          <PopoverBody>
            <div>
              <span>Adults:  </span> 
              <Button variant="outline" size="xs" onClick={() => handleDecrement('adults')} border={'1.5px solid black'} borderRadius={'1rem'}>
                -
              </Button>
              <span style={{ margin: '0 10px' }}>{travelers.adults}</span>
              <Button variant="outline" size="xs" onClick={() => handleIncrement('adults')} border={'1.5px solid black'} borderRadius={'1rem'}>
                +
              </Button>
            </div>
            <br />
            <div>
              <span>Children:  </span>
              <Button variant="outline" size="xs" onClick={() => handleDecrement('children')} border={'1.5px solid black'} borderRadius={'1rem'}>
                -
              </Button>
              <span style={{ margin: '0 10px' }}>{travelers.children}</span>
              <Button variant="outline" size="xs" onClick={() => handleIncrement('children')} border={'1.5px solid black'} borderRadius={'1rem'}>
              +
              </Button>
            </div>
            <br />
            <div>
              <span>Infants:  </span>
              <Button variant="outline" size="xs" onClick={() => handleDecrement('infants')} border={'1.5px solid black'} borderRadius={'1rem'}>
                -
              </Button>
              <span style={{ margin: '0 10px' }}>{travelers.infants}</span>
              <Button variant="outline" size="xs" onClick={() => handleIncrement('infants')} border={'1.5px solid black'} borderRadius={'1rem'}>
              +
              </Button>
            </div>
            <br />
            <PopoverTrigger>
              <Button color='white' backgroundColor={'blue'} padding={'3%'} borderRadius={'1.5rem'} marginLeft='30%' variant="link" onClick={() => setIsOpen(true)}>
               Done
              </Button>
            </PopoverTrigger>
          </PopoverBody>
          </PopoverContent>
        </Popover>
      </InputGroup>
      <Button color={'white'} backgroundColor={'blue'} borderRadius={'2rem'} marginLeft={'1rem'} _hover={{backgroundColor:'blue', color:'white'}}>Save</Button>
      </div>
    )||<div>
          {selectedCount>2} {
              <div style={{display:'flex',flexDirection:'row',marginTop:'2rem'}} >
              <InputGroup width={'18%'} marginLeft='3%' >
                <InputLeftElement pointerEvents='none'>
                  <FaLocationDot color='black.1000' />
                </InputLeftElement>
                <Input type='text' placeholder='Leaving From' border={'1.5px solid black'} borderRadius={'1rem'} _hover={{border:'1.5px solid black',borderRadius:'1rem'}} /><h5 style={{marginTop:'2%',marginRight:'2%',marginLeft:'5%'}}/>
            </InputGroup>
            <InputGroup width={'18%'} marginLeft='3%'>
                <InputLeftElement pointerEvents='none' marginLeft={'-10%'}>
                  <FaLocationDot color='black.1000'/>
                </InputLeftElement>
                <Input type='text' placeholder='Going to' marginLeft='-10%' border={'1.5px solid black'} borderRadius={'1rem'} _hover={{border:'1.5px solid black',borderRadius:'1rem'}}/>
            </InputGroup >
            <InputGroup width={'25%'} ><h5 style={{marginTop:'2%',marginRight:'2%',marginLeft:'5%'}}>From</h5>
             <Input placeholder='Dates' size='md' type='date' border={'1.5px solid black'} borderRadius={'1rem'} _hover={{border:'1.5px solid black',borderRadius:'1rem'}} /><h5 style={{marginTop:'2%',marginRight:'2%',marginLeft:'5%'}} >To</h5>
             <Input size='md' type='date' border={'1.5px solid black'} borderRadius={'1rem'} _hover={{border:'1.5px solid black',borderRadius:'1rem'}} /><h5 style={{marginTop:'2%',marginRight:'2%',marginLeft:'5%'}}/>
            </InputGroup>
            <InputGroup width={'23%'}>
      <InputLeftElement pointerEvents="none">
        <FaUser color="black.1000" style={{marginRight:'-3rem'}}/>
      </InputLeftElement>
      <Input
      _hover={{border:'1.5px solid black',borderRadius:'1rem'}} border={'1.5px solid black'} borderRadius={'1rem'} /><h5 style={{marginTop:'2%',marginRight:'2%',marginLeft:'5%'}}
      marginLeft={'6%'}
        type="text"
        placeholder="Travelers"
        value={`${travelers.adults} Adults, ${travelers.children} Children, ${travelers.infants} Infants`}
        onClick={() => setIsOpen(true)}
      />
      <Popover isOpen={isOpen} onClose={() => setIsOpen(false)} >
        <PopoverContent position={'fixed'} top={'-25%'} marginLeft={'-12%'} >
          <PopoverHeader fontWeight="semibold">Room 1</PopoverHeader>
          <PopoverBody>
            <div>
              <span>Adults:  </span> 
              <Button variant="outline" size="xs" onClick={() => handleDecrement('adults')} border={'1.5px solid black'} borderRadius={'1rem'}>
                -
              </Button>
              <span style={{ margin: '0 10px' }}>{travelers.adults}</span>
              <Button variant="outline" size="xs" onClick={() => handleIncrement('adults')} border={'1.5px solid black'} borderRadius={'1rem'}>
                +
              </Button>
            </div>
            <br />
            <div>
              <span>Children:  </span>
              <Button variant="outline" size="xs" onClick={() => handleDecrement('children')} border={'1.5px solid black'} borderRadius={'1rem'}>
                -
              </Button>
              <span style={{ margin: '0 10px' }}>{travelers.children}</span>
              <Button variant="outline" size="xs" onClick={() => handleIncrement('children')} border={'1.5px solid black'} borderRadius={'1rem'}>
              +
              </Button>
            </div>
            <br />
            <div>
              <span>Infants:  </span>
              <Button variant="outline" size="xs" onClick={() => handleDecrement('infants')} border={'1.5px solid black'} borderRadius={'1rem'}>
                -
              </Button>
              <span style={{ margin: '0 10px' }}>{travelers.infants}</span>
              <Button variant="outline" size="xs" onClick={() => handleIncrement('infants')} border={'1.5px solid black'} borderRadius={'1rem'}>
              +
              </Button>
            </div>
            <br />
            <PopoverTrigger>
              <Button color='white' backgroundColor={'blue'} padding={'3%'} borderRadius={'1.5rem'} marginLeft='30%' variant="link" onClick={() => setIsOpen(true)}>
               Done
              </Button>
            </PopoverTrigger>
          </PopoverBody>
          </PopoverContent>
        </Popover>
      </InputGroup>
      <Button color={'white'} backgroundColor={'blue'} borderRadius={'2rem'} marginLeft={'1rem'} _hover={{backgroundColor:'blue', color:'white'}}>Save</Button>
        </div>}
      </div>}
    </div>)}
  {/* {selectedCount < 2 && (
        <div style={{ display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',marginTop:'2rem' }}>
          <img src={Search} alt="SearchIcon"/>
          <p align='center'>Please select two or more items</p>
          <p align='center'>To start building your trip, choose two or more items</p>
        </div>
      )|| <div style={{display:'flex',flexDirection:'row',marginTop:'2rem'}} >
              <InputGroup width={'18%'} marginLeft='1%'>
                <InputLeftElement pointerEvents='none'>
                  <FaLocationDot color='black.1000' />
                </InputLeftElement>
                <Input type='text' placeholder='Leaving From' />
            </InputGroup>
            <InputGroup width={'18%'} marginLeft='3%'>
                <InputLeftElement pointerEvents='none'>
                  <FaLocationDot color='black.1000' />
                </InputLeftElement>
                <Input type='text' placeholder='Going to' />
            </InputGroup >
            <InputGroup width={'25%'} ><h5 style={{marginTop:'2%',marginRight:'2%',marginLeft:'5%'}}>From</h5>
             <Input placeholder='Dates' size='md' type='date' /><h5 style={{marginTop:'2%',marginRight:'2%',marginLeft:'5%'}}>To</h5>
             <Input size='md' type='date' />
            </InputGroup>
        </div>} */}
    </TabPanel>
    <TabPanel align='start'>
      <h1>Things to do</h1>
    </TabPanel>
    <TabPanel align='start'>
      <h1>Cruises</h1>
    </TabPanel>
    </TabPanels>
        </Tabs>
        </div>
    </div>
  )
}
export default Navbar