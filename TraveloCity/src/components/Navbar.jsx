import React, { createElement, useState } from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
  Img,
  Checkbox,
  Stack,
} from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
} from "@chakra-ui/react";
import { CheckboxGroup } from "@chakra-ui/react";
import Search from "../assets/search.png";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  InputGroup,
  Input,
  InputLeftElement,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
} from "@chakra-ui/react";
import { FaLocationDot, FaUser } from "react-icons/fa6";

import { BiCalendarCheck } from "react-icons/bi";
import "./Navbar.css";

const Navbar = () => {
  const [selectedValue, setSelectedValue] = useState("Economy");
  const [tabIndex, setTabIndex] = useState(0);
  const [staysText, setStaysText] = useState("Stays");
  const [flightsText, setFlightsText] = useState("Flights");
  const [carsText, setCarsText] = useState("Cars");
  const [selectedCount, setSelectedCount] = useState(0);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const handleCheckboxChange = () => {
    setIsPopoverOpen(!isPopoverOpen);
  };
  const [travelers, setTravelers] = useState({
    adults: 2,
    children: 0,
    infants: 0,
  });
  const [isOpen, setIsOpen] = useState(false);

  const handleIncrement = (type) => {
    setTravelers((prevTravelers) => ({
      ...prevTravelers,
      [type]: prevTravelers[type] + 1,
    }));
  };

  const handleDecrement = (type) => {
    setTravelers((prevTravelers) => ({
      ...prevTravelers,
      [type]: Math.max(0, prevTravelers[type] - 1),
    }));
  };
  const handleMenuItemClick = (value) => {
    setSelectedValue(value);
  };
  const handleStaysClick = () => {
    if (staysText === "Stays") {
      setStaysText("Stays added");
      setSelectedCount(selectedCount + 1);
    } else {
      setStaysText("Stays");
      setSelectedCount(selectedCount - 1);
    }
  };

  const handleFlightsClick = () => {
    if (flightsText === "Flights") {
      setFlightsText("Flights added");
      setSelectedCount(selectedCount + 1);
    } else {
      setFlightsText("Flights");
      setSelectedCount(selectedCount - 1);
    }
  };
  const handleCarsClick = () => {
    if (carsText === "Cars") {
      setCarsText("Cars added");
      setSelectedCount(selectedCount + 1);
    } else {
      setCarsText("Cars");
      setSelectedCount(selectedCount - 1);
    }
  };
  // function Anotherflight(){
  //   return(
  //       // <div>
  //       //      <span>Flight 2</span><br /><br />
  //       //      <div style={{display:'flex'}}>
  //       //          <InputGroup width={"50%"} marginLeft="2%">
  //       //            <InputLeftElement pointerEvents="none">
  //       //              <FaLocationDot color="black.1000" />
  //       //            </InputLeftElement>
  //       //            <Input
  //       //              type="text"
  //       //              placeholder="Leaving from"
  //       //              border={"1.5px solid black"}
  //       //              borderRadius={"1rem"}
  //       //              _hover={{
  //       //                border: "1.5px solid black",
  //       //                borderRadius: "1rem",
  //       //              }}
  //       //            />
  //       //          </InputGroup>
  //       //          <InputGroup width={"50%"} marginLeft="5%">
  //       //            <InputLeftElement
  //       //              pointerEvents="none"
  //       //              marginLeft={"-10%"}
  //       //            >
  //       //              <FaLocationDot color="black.1000" />
  //       //            </InputLeftElement>
  //       //            <Input
  //       //              type="text"
  //       //              placeholder="Going to"
  //       //              marginLeft="-10%"
  //       //              border={"1.5px solid black"}
  //       //              borderRadius={"1rem"}
  //       //              _hover={{
  //       //                border: "1.5px solid black",
  //       //                borderRadius: "1rem",
  //       //              }}
  //       //            />
  //       //          </InputGroup>
  //       //          <InputGroup width={"30%"} marginLeft={'-1%'} >
  //       //            <h5
  //       //              style={{
  //       //                marginTop: "3%",
  //       //                marginRight: "3%"
  //       //              }}>
  //       //              Date
  //       //            </h5>
  //       //            <Input
  //       //              size="md"
  //       //              type="date"
  //       //              border={"1.5px solid black"}
  //       //              borderRadius={"1rem"}
  //       //              _hover={{
  //       //                border: "1.5px solid black",
  //       //                borderRadius: "1rem",
  //       //              }}
  //       //            />
  //       //          </InputGroup>
  //       //          </div>
  //       //     </div>
  //       )
  // }

  return (
    <div style={{ marginTop: "3rem"}} className="navbar">
      <div className="navbar-container" >
        <Tabs
          onChange={(index) => setTabIndex(index)}
          position="relative"
          variant="unstyled"
          align="center"
        >
          <TabList className="tab-list" border={'1px solid grey'} borderRadius={'1rem'}>
            <Tab>
              <b>Stays</b>
            </Tab>
            <Tab>
              <b>Flights</b>
            </Tab>
            <Tab>
              <b>Cars</b>
            </Tab>
            <Tab>
              <b>Packages</b>
            </Tab>
            <Tab>
              <b>Things to do</b>
            </Tab>
            <Tab>
              <b>Cruises</b>
            </Tab>
          </TabList>
          <TabIndicator
            mt="-1.5px"
            height="2px"
            bg="blue.500"
            borderRadius="1px"
            className="navbar-item"
            marginTop={"-1.5%"}
          />
          <TabPanels
            marginTop={"2rem"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <TabPanel align="start" className="Stays"> 
              <div style={{ display: "flex" }}>
                <InputGroup width={"23%"} marginLeft="3%">
                  <InputLeftElement pointerEvents="none">
                    <FaLocationDot color="black.1000" />
                  </InputLeftElement>
                  <Input
                    type="text"
                    placeholder="Where to"
                    border={"1.5px solid black"}
                    borderRadius={"1rem"}
                    _hover={{
                      border: "1.5px solid black",
                      borderRadius: "1rem",
                    }}
                  />
                </InputGroup>
                <InputGroup width={"40%"}>
                  <h5
                    style={{
                      marginTop: "2%",
                      marginRight: "2%",
                      marginLeft: "5%",
                    }}
                  >
                    From
                  </h5>
                  <Input
                    placeholder="Dates"
                    size="md"
                    type="date"
                    border={"1.5px solid black"}
                    borderRadius={"1rem"}
                    _hover={{
                      border: "1.5px solid black",
                      borderRadius: "1rem",
                    }}
                  />
                  <h5
                    style={{
                      marginTop: "2%",
                      marginRight: "2%",
                      marginLeft: "5%",
                    }}
                  >
                    To
                  </h5>
                  <Input
                    size="md"
                    type="date"
                    border={"1.5px solid black"}
                    borderRadius={"1rem"}
                    _hover={{
                      border: "1.5px solid black",
                      borderRadius: "1rem",
                    }}
                  />
                </InputGroup>
                <InputGroup width={"23%"}>
                  <InputLeftElement pointerEvents="none">
                    <FaUser
                      color="black.1000"
                      style={{ marginRight: "-3rem" }}
                    />
                  </InputLeftElement>
                  <Input
                    _hover={{
                      border: "1.5px solid black",
                      borderRadius: "1rem",
                    }}
                    border={"1.5px solid black"}
                    borderRadius={"1rem"}
                    marginLeft={"6%"}
                    type="text"
                    placeholder="Travelers"
                    value={`${travelers.adults} Adults, ${travelers.children} Children, ${travelers.infants} Infants`}
                    onClick={() => setIsOpen(true)}
                  />
                  <Popover isOpen={isOpen} onClose={() => setIsOpen(false)}>
                    <PopoverContent
                      position={"fixed"}
                      top={"-25%"}
                      marginLeft={"-12%"}
                    >
                      <PopoverHeader fontWeight="semibold">
                        Room 1
                      </PopoverHeader>
                      <PopoverBody>
                        <div>
                          <span>Adults: </span>
                          <Button
                            variant="outline"
                            size="xs"
                            onClick={() => handleDecrement("adults")}
                            border={"1.5px solid black"}
                            borderRadius={"1rem"}
                          >
                            -
                          </Button>
                          <span style={{ margin: "0 10px" }}>
                            {travelers.adults}
                          </span>
                          <Button
                            variant="outline"
                            size="xs"
                            onClick={() => handleIncrement("adults")}
                            border={"1.5px solid black"}
                            borderRadius={"1rem"}
                          >
                            +
                          </Button>
                        </div>
                        <br />
                        <div>
                          <span>Children: </span>
                          <Button
                            variant="outline"
                            size="xs"
                            onClick={() => handleDecrement("children")}
                            border={"1.5px solid black"}
                            borderRadius={"1rem"}
                          >
                            -
                          </Button>
                          <span style={{ margin: "0 10px" }}>
                            {travelers.children}
                          </span>
                          <Button
                            variant="outline"
                            size="xs"
                            onClick={() => handleIncrement("children")}
                            border={"1.5px solid black"}
                            borderRadius={"1rem"}
                          >
                            +
                          </Button>
                        </div>
                        <br />
                        <div>
                          <span>Infants: </span>
                          <Button
                            variant="outline"
                            size="xs"
                            onClick={() => handleDecrement("infants")}
                            border={"1.5px solid black"}
                            borderRadius={"1rem"}
                          >
                            -
                          </Button>
                          <span style={{ margin: "0 10px" }}>
                            {travelers.infants}
                          </span>
                          <Button
                            variant="outline"
                            size="xs"
                            onClick={() => handleIncrement("infants")}
                            border={"1.5px solid black"}
                            borderRadius={"1rem"}
                          >
                            +
                          </Button>
                        </div>
                        <br />
                        <PopoverTrigger>
                          <Button
                            color="white"
                            backgroundColor={"blue"}
                            padding={"3%"}
                            borderRadius={"1.5rem"}
                            marginLeft="30%"
                            variant="link"
                            onClick={() => setIsOpen(true)}
                          >
                            Done
                          </Button>
                        </PopoverTrigger>
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                </InputGroup>
                <Button
                  color={"white"}
                  backgroundColor={"blue"}
                  borderRadius={"2rem"}
                  marginLeft={"1rem"}
                  _hover={{ backgroundColor: "#0b428b", color: "white" }}
                >
                  Search
                </Button>
                <Popover isOpen={isPopoverOpen}>
                  <PopoverTrigger>
                    <Checkbox
                      defaultChecked={isPopoverOpen}
                      onChange={handleCheckboxChange}
                      marginTop={"7%"}
                      marginLeft={"-96%"}
                    >
                      Add a flight
                    </Checkbox>
                  </PopoverTrigger>
                  <Checkbox marginTop={"7%"} marginLeft={"2%"}>
                    Add a car
                  </Checkbox>
                  {isPopoverOpen && (
                    <PopoverBody
                      position={"fixed"}
                      marginTop={"7%"}
                      marginLeft={"1%"}
                    >
                      <InputGroup width={"110%"}>
                        <InputLeftElement pointerEvents="none">
                          <FaLocationDot color="black.1000" />
                        </InputLeftElement>
                        <Input
                          size="md"
                          type="text"
                          placeholder="Leaving from"
                          border={"1.5px solid black"}
                          borderRadius={"1rem"}
                          _hover={{
                            border: "1.5px solid black",
                            borderRadius: "1rem",
                          }}
                        />
                      </InputGroup>
                    </PopoverBody>
                  )}
                </Popover>
              </div>
            </TabPanel>
            <TabPanel>
              <Tabs onChange={(index) => setTabIndex(index)} align="start">
                <TabList className="tab-list">
                  <Tab>
                    <b>RoundTrip</b>
                  </Tab>
                  <Tab>
                    <b>One-way</b>
                  </Tab>
                  <Tab>
                    <b>Multi-city</b>
                  </Tab>
                  <Menu closeOnSelect={true}>
                    <MenuButton
                      as={Button}
                      rightIcon={<ChevronDownIcon />}
                      border={"2px solid black"}
                      borderRadius={"3rem"}
                      id="T"
                    >
                      {selectedValue}
                    </MenuButton>
                    <MenuList minWidth="240px">
                      <MenuOptionGroup defaultValue="Economy" type="radio">
                        <MenuItemOption
                          value="Economy"
                          id="Option"
                          onClick={() => handleMenuItemClick("Economy")}
                        >
                          Economy
                        </MenuItemOption>
                        <MenuItemOption
                          value="Premium economy"
                          id="Option"
                          onClick={() => handleMenuItemClick("Premium economy")}
                        >
                          Premium economy
                        </MenuItemOption>
                        <MenuItemOption
                          value="Buisness class"
                          id="Option"
                          onClick={() => handleMenuItemClick("Buisness class")}
                        >
                          Buisness class
                        </MenuItemOption>
                        <MenuItemOption
                          value="First class"
                          id="Option"
                          onClick={() => handleMenuItemClick("First class")}
                        >
                          First class
                        </MenuItemOption>
                      </MenuOptionGroup>
                    </MenuList>
                  </Menu>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row"
                      }}
                    >
                      <InputGroup width={"25%"} marginLeft="3%">
                        <InputLeftElement pointerEvents="none">
                          <FaLocationDot color="black.1000" />
                        </InputLeftElement>
                        <Input
                          type="text"
                          placeholder="Leaving from"
                          border={"1.5px solid black"}
                          borderRadius={"1rem"}
                          _hover={{
                            border: "1.5px solid black",
                            borderRadius: "1rem",
                          }}
                        />
                      </InputGroup>
                      <InputGroup width={"25%"} marginLeft="3%">
                        <InputLeftElement
                          pointerEvents="none"
                          marginLeft={"-10%"}
                        >
                          <FaLocationDot color="black.1000" />
                        </InputLeftElement>
                        <Input
                          type="text"
                          placeholder="Going to"
                          marginLeft="-10%"
                          border={"1.5px solid black"}
                          borderRadius={"1rem"}
                          _hover={{
                            border: "1.5px solid black",
                            borderRadius: "1rem",
                          }}
                        />
                      </InputGroup>
                      <InputGroup width={"60%"}>
                        <h5
                          style={{
                            marginTop: "2%",
                            marginRight: "2%",
                            marginLeft: "1%",
                          }}
                        >
                          From
                        </h5>
                        <Input
                          placeholder="Dates"
                          size="md"
                          type="date"
                          border={"1.5px solid black"}
                          borderRadius={"1rem"}
                          _hover={{
                            border: "1.5px solid black",
                            borderRadius: "1rem",
                          }}
                        />
                        <h5
                          style={{
                            marginTop: "2%",
                            marginRight: "2%",
                            marginLeft: "5%",
                          }}
                        >
                          To
                        </h5>
                        <Input
                          size="md"
                          type="date"
                          border={"1.5px solid black"}
                          borderRadius={"1rem"}
                          _hover={{
                            border: "1.5px solid black",
                            borderRadius: "1rem",
                          }}
                        />
                      </InputGroup>
                      <InputGroup width={"30%"}>
                        <InputLeftElement pointerEvents="none">
                          <FaUser
                            color="black.1000"
                            style={{ marginRight: "-2rem" }}
                          />
                        </InputLeftElement>
                        <Input
                          _hover={{
                            border: "1.5px solid black",
                            borderRadius: "1rem",
                          }}
                          border={"1.5px solid black"}
                          borderRadius={"1rem"}
                          marginLeft={"6%"}
                          type="text"
                          placeholder="Travelers"
                          value={`${travelers.adults} Adults, ${travelers.children} Children, ${travelers.infants} Infants`}
                          onClick={() => setIsOpen(true)}
                        />
                        <Popover
                          isOpen={isOpen}
                          onClose={() => setIsOpen(false)}
                        >
                          <PopoverContent
                            position={"fixed"}
                            top={"-5%"}
                            marginLeft={"-12%"}
                          >
                            <PopoverBody>
                              <div>
                                <span>Adults: </span>
                                <Button
                                  variant="outline"
                                  size="xs"
                                  onClick={() => handleDecrement("adults")}
                                  border={"1.5px solid black"}
                                  borderRadius={"1rem"}
                                >
                                  -
                                </Button>
                                <span style={{ margin: "0 10px" }}>
                                  {travelers.adults}
                                </span>
                                <Button
                                  variant="outline"
                                  size="xs"
                                  onClick={() => handleIncrement("adults")}
                                  border={"1.5px solid black"}
                                  borderRadius={"1rem"}
                                >
                                  +
                                </Button>
                              </div>
                              <br />
                              <div>
                                <span>Children: </span>
                                <Button
                                  variant="outline"
                                  size="xs"
                                  onClick={() => handleDecrement("children")}
                                  border={"1.5px solid black"}
                                  borderRadius={"1rem"}
                                >
                                  -
                                </Button>
                                <span style={{ margin: "0 10px" }}>
                                  {travelers.children}
                                </span>
                                <Button
                                  variant="outline"
                                  size="xs"
                                  onClick={() => handleIncrement("children")}
                                  border={"1.5px solid black"}
                                  borderRadius={"1rem"}
                                >
                                  +
                                </Button>
                              </div>
                              <br />
                              <div>
                                <span>Infants: </span>
                                <Button
                                  variant="outline"
                                  size="xs"
                                  onClick={() => handleDecrement("infants")}
                                  border={"1.5px solid black"}
                                  borderRadius={"1rem"}
                                >
                                  -
                                </Button>
                                <span style={{ margin: "0 10px" }}>
                                  {travelers.infants}
                                </span>
                                <Button
                                  variant="outline"
                                  size="xs"
                                  onClick={() => handleIncrement("infants")}
                                  border={"1.5px solid black"}
                                  borderRadius={"1rem"}
                                >
                                  +
                                </Button>
                              </div>
                              <br />
                              <PopoverTrigger>
                                <Button
                                  color="white"
                                  backgroundColor={"blue"}
                                  padding={"3%"}
                                  borderRadius={"1.5rem"}
                                  marginLeft="30%"
                                  variant="link"
                                  onClick={() => setIsOpen(true)}
                                >
                                  Done
                                </Button>
                              </PopoverTrigger>
                            </PopoverBody>
                          </PopoverContent>
                        </Popover>
                      </InputGroup>
                      <Button
                        padding='2%'
                        color={"white"}
                        backgroundColor={"blue"}
                        borderRadius={"2rem"}
                        marginLeft={"1rem"}
                        _hover={{ backgroundColor: "#0b428b", color: "white" }}
                      >
                        Search
                      </Button>
                      </div><br />
                      <div>
                        <Checkbox marginLeft={'2%'}>
                          Add a place to stay
                        </Checkbox>
                        <Checkbox marginLeft={'2%'}>
                          Add a car
                        </Checkbox>
                      </div>
                  </TabPanel>
                  <TabPanel>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                      }}
                      >
                      <InputGroup width={"40%"} marginLeft="3%">
                        <InputLeftElement pointerEvents="none">
                          <FaLocationDot color="black.1000" />
                        </InputLeftElement>
                        <Input
                          type="text"
                          placeholder="Leaving from"
                          border={"1.5px solid black"}
                          borderRadius={"1rem"}
                          _hover={{
                            border: "1.5px solid black",
                            borderRadius: "1rem",
                          }}
                        />
                      </InputGroup>
                      <InputGroup width={"40%"} marginLeft="3%">
                        <InputLeftElement
                          pointerEvents="none"
                          marginLeft={"-10%"}
                        >
                          <FaLocationDot color="black.1000" />
                        </InputLeftElement>
                        <Input
                          type="text"
                          placeholder="Going to"
                          marginLeft="-10%"
                          border={"1.5px solid black"}
                          borderRadius={"1rem"}
                          _hover={{
                            border: "1.5px solid black",
                            borderRadius: "1rem",
                          }}
                        />
                      </InputGroup>
                      <InputGroup width={"60%"}>
                        <h5
                          style={{
                            marginTop: "2%",
                            marginRight: "2%",
                            marginLeft: "5%",
                          }}>
                          Date
                        </h5>
                        <Input
                          size="md"
                          type="date"
                          border={"1.5px solid black"}
                          borderRadius={"1rem"}
                          _hover={{
                            border: "1.5px solid black",
                            borderRadius: "1rem",
                          }}
                        />
                      </InputGroup>
                      <InputGroup width={"65%"}>
                        <InputLeftElement pointerEvents="none">
                          <FaUser
                            color="black.1000"
                            style={{ marginRight: "-2rem" }}
                          />
                        </InputLeftElement>
                        <Input
                          _hover={{
                            border: "1.5px solid black",
                            borderRadius: "1rem",
                          }}
                          border={"1.5px solid black"}
                          borderRadius={"1rem"}
                          marginLeft={"6%"}
                          type="text"
                          placeholder="Travelers"
                          value={`${travelers.adults} Adults, ${travelers.children} Children, ${travelers.infants} Infants`}
                          onClick={() => setIsOpen(true)}
                        />
                        <Popover
                          isOpen={isOpen}
                          onClose={() => setIsOpen(false)}
                        >
                          <PopoverContent
                            position={"fixed"}
                            top={"-5%"}
                            marginLeft={"-12%"}
                          >
                            <PopoverBody>
                              <div>
                                <span>Adults: </span>
                                <Button
                                  variant="outline"
                                  size="xs"
                                  onClick={() => handleDecrement("adults")}
                                  border={"1.5px solid black"}
                                  borderRadius={"1rem"}
                                >
                                  -
                                </Button>
                                <span style={{ margin: "0 10px" }}>
                                  {travelers.adults}
                                </span>
                                <Button
                                  variant="outline"
                                  size="xs"
                                  onClick={() => handleIncrement("adults")}
                                  border={"1.5px solid black"}
                                  borderRadius={"1rem"}
                                >
                                  +
                                </Button>
                              </div>
                              <br />
                              <div>
                                <span>Children: </span>
                                <Button
                                  variant="outline"
                                  size="xs"
                                  onClick={() => handleDecrement("children")}
                                  border={"1.5px solid black"}
                                  borderRadius={"1rem"}
                                >
                                  -
                                </Button>
                                <span style={{ margin: "0 10px" }}>
                                  {travelers.children}
                                </span>
                                <Button
                                  variant="outline"
                                  size="xs"
                                  onClick={() => handleIncrement("children")}
                                  border={"1.5px solid black"}
                                  borderRadius={"1rem"}
                                >
                                  +
                                </Button>
                              </div>
                              <br />
                              <div>
                                <span>Infants: </span>
                                <Button
                                  variant="outline"
                                  size="xs"
                                  onClick={() => handleDecrement("infants")}
                                  border={"1.5px solid black"}
                                  borderRadius={"1rem"}
                                >
                                  -
                                </Button>
                                <span style={{ margin: "0 10px" }}>
                                  {travelers.infants}
                                </span>
                                <Button
                                  variant="outline"
                                  size="xs"
                                  onClick={() => handleIncrement("infants")}
                                  border={"1.5px solid black"}
                                  borderRadius={"1rem"}
                                >
                                  +
                                </Button>
                              </div>
                              <br />
                              <PopoverTrigger>
                                <Button
                                  color="white"
                                  backgroundColor={"blue"}
                                  padding={"3%"}
                                  borderRadius={"1.5rem"}
                                  marginLeft="30%"
                                  variant="link"
                                  onClick={() => setIsOpen(true)}
                                >
                                  Done
                                </Button>
                              </PopoverTrigger>
                            </PopoverBody>
                          </PopoverContent>
                        </Popover>
                      </InputGroup>
                      <Button
                        padding={'2%'}
                        color={"white"}
                        backgroundColor={"blue"}
                        borderRadius={"2rem"}
                        marginLeft={"1rem"}
                        _hover={{ backgroundColor: "#0b428b", color: "white" }}
                      >
                        Search
                      </Button>
                    </div>
                  </TabPanel>
                  <TabPanel className="Multicity">
                    <div >
                      <InputGroup width={"28%"}>
                        <InputLeftElement pointerEvents="none">
                          <FaUser
                            color="black.1000"
                            style={{ marginRight: "-2rem" }}
                          />
                        </InputLeftElement>
                        <Input
                          _hover={{
                            border: "1.5px solid black",
                            borderRadius: "1rem",
                          }}
                          border={"1.5px solid black"}
                          borderRadius={"1rem"}
                          marginLeft={"6%"}
                          type="text"
                          placeholder="Travelers"
                          value={`${travelers.adults} Adults, ${travelers.children} Children, ${travelers.infants} Infants`}
                          onClick={() => setIsOpen(true)}
                        />
                        <Popover
                          isOpen={isOpen}
                          onClose={() => setIsOpen(false)}
                        >
                          <PopoverContent
                            position={"fixed"}
                            top={"-9%"}
                            marginLeft={"-12%"}
                            backgroundBlendMode={'color-burn'}
                          >
                            <PopoverBody >
                              <div>
                                <span>Adults: </span>
                                <Button
                                  variant="outline"
                                  size="xs"
                                  onClick={() => handleDecrement("adults")}
                                  border={"1.5px solid black"}
                                  borderRadius={"1rem"}
                                >
                                  -
                                </Button>
                                <span style={{ margin: "0 10px" }}>
                                  {travelers.adults}
                                </span>
                                <Button
                                  variant="outline"
                                  size="xs"
                                  onClick={() => handleIncrement("adults")}
                                  border={"1.5px solid black"}
                                  borderRadius={"1rem"}
                                >
                                  +
                                </Button>
                              </div>
                              <br />
                              <div>
                                <span>Children: </span>
                                <Button
                                  variant="outline"
                                  size="xs"
                                  onClick={() => handleDecrement("children")}
                                  border={"1.5px solid black"}
                                  borderRadius={"1rem"}
                                >
                                  -
                                </Button>
                                <span style={{ margin: "0 10px" }}>
                                  {travelers.children}
                                </span>
                                <Button
                                  variant="outline"
                                  size="xs"
                                  onClick={() => handleIncrement("children")}
                                  border={"1.5px solid black"}
                                  borderRadius={"1rem"}
                                >
                                  +
                                </Button>
                              </div>
                              <br />
                              <div>
                                <span>Infants: </span>
                                <Button
                                  variant="outline"
                                  size="xs"
                                  onClick={() => handleDecrement("infants")}
                                  border={"1.5px solid black"}
                                  borderRadius={"1rem"}
                                >
                                  -
                                </Button>
                                <span style={{ margin: "0 10px" }}>
                                  {travelers.infants}
                                </span>
                                <Button
                                  variant="outline"
                                  size="xs"
                                  onClick={() => handleIncrement("infants")}
                                  border={"1.5px solid black"}
                                  borderRadius={"1rem"}
                                >
                                  +
                                </Button>
                              </div>
                              <br />
                              <PopoverTrigger>
                                <Button
                                  color="white"
                                  backgroundColor={"blue"}
                                  padding={"3%"}
                                  borderRadius={"1.5rem"}
                                  marginLeft="30%"
                                  variant="link"
                                  onClick={() => setIsOpen(true)}
                                >
                                  Done
                                </Button>
                              </PopoverTrigger>
                            </PopoverBody>
                          </PopoverContent>
                        </Popover>
                      </InputGroup>
                    </div>
                    <div> <br />
                      <span>Flight 1</span><br /><br />
                      <div style={{display:'flex'}}>
                          <InputGroup width={"50%"} marginLeft="2%">
                            <InputLeftElement pointerEvents="none">
                              <FaLocationDot color="black.1000" />
                            </InputLeftElement>
                            <Input
                              type="text"
                              placeholder="Leaving from"
                              border={"1.5px solid black"}
                              borderRadius={"1rem"}
                              _hover={{
                                border: "1.5px solid black",
                                borderRadius: "1rem",
                              }}
                            />
                          </InputGroup>
                          <InputGroup width={"50%"} marginLeft="5%">
                            <InputLeftElement
                              pointerEvents="none"
                              marginLeft={"-10%"}
                            >
                              <FaLocationDot color="black.1000" />
                            </InputLeftElement>
                            <Input
                              type="text"
                              placeholder="Going to"
                              marginLeft="-10%"
                              border={"1.5px solid black"}
                              borderRadius={"1rem"}
                              _hover={{
                                border: "1.5px solid black",
                                borderRadius: "1rem",
                              }}
                            />
                          </InputGroup>
                          <InputGroup width={"30%"} marginLeft={'-1%'} >
                            <h5
                              style={{
                                marginTop: "3%",
                                marginRight: "3%"
                              }}>
                              Date
                            </h5>
                            <Input
                              size="md"
                              type="date"
                              border={"1.5px solid black"}
                              borderRadius={"1rem"}
                              _hover={{
                                border: "1.5px solid black",
                                borderRadius: "1rem",
                              }}
                            />
                          </InputGroup>
                        </div>
                    </div>
                    <div> <br />
                      <span>Flight 2</span><br /><br />
                      <div style={{display:'flex'}}>
                          <InputGroup width={"50%"} marginLeft="2%">
                            <InputLeftElement pointerEvents="none">
                              <FaLocationDot color="black.1000" />
                            </InputLeftElement>
                            <Input
                              type="text"
                              placeholder="Leaving from"
                              border={"1.5px solid black"}
                              borderRadius={"1rem"}
                              _hover={{
                                border: "1.5px solid black",
                                borderRadius: "1rem",
                              }}
                            />
                          </InputGroup>
                          <InputGroup width={"50%"} marginLeft="5%">
                            <InputLeftElement
                              pointerEvents="none"
                              marginLeft={"-10%"}
                            >
                              <FaLocationDot color="black.1000" />
                            </InputLeftElement>
                            <Input
                              type="text"
                              placeholder="Going to"
                              marginLeft="-10%"
                              border={"1.5px solid black"}
                              borderRadius={"1rem"}
                              _hover={{
                                border: "1.5px solid black",
                                borderRadius: "1rem",
                              }}
                            />
                          </InputGroup>
                          <InputGroup width={"30%"} marginLeft={'-1%'} >
                            <h5
                              style={{
                                marginTop: "3%",
                                marginRight: "3%"
                              }}>
                              Date
                            </h5>
                            <Input
                              size="md"
                              type="date"
                              border={"1.5px solid black"}
                              borderRadius={"1rem"}
                              _hover={{
                                border: "1.5px solid black",
                                borderRadius: "1rem",
                              }}
                            />
                          </InputGroup>
                        </div><br />
                        <Button color={'blue'}/*onClick={Anotherflight}*/>Add another flight</Button>
                    </div>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </TabPanel>
            <TabPanel>
              <Tabs onChange={(index) => setTabIndex(index)} align="start">
                <TabList className="tab-list">
                  <Tab>
                    <b>Rental cars</b>
                  </Tab>
                  <Tab>
                    <b>Airport transportation</b>
                  </Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                  <div
                      style={{ justifyContent: "center", alignItems: "center",marginRight:'10%'}}
                    >
                      {selectedCount > 2} 
                      {
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            marginTop: "2rem",
                          }}
                        >
                          <InputGroup width={"18%"} marginLeft="3%">
                            <InputLeftElement pointerEvents="none">
                              <FaLocationDot color="black.1000" />
                            </InputLeftElement>
                            <Input
                              type="text"
                              placeholder="Leaving from"
                              border={"1.5px solid black"}
                              borderRadius={"1rem"}
                              _hover={{
                                border: "1.5px solid black",
                                borderRadius: "1rem",
                              }}
                            />
                          </InputGroup>
                          <InputGroup width={"18%"} marginLeft="3%">
                            <InputLeftElement
                              pointerEvents="none"
                              marginLeft={"-10%"}
                            >
                              <FaLocationDot color="black.1000" />
                            </InputLeftElement>
                            <Input
                              type="text"
                              placeholder="Going to"
                              marginLeft="-10%"
                              border={"1.5px solid black"}
                              borderRadius={"1rem"}
                              _hover={{
                                border: "1.5px solid black",
                                borderRadius: "1rem",
                              }}
                            />
                          </InputGroup>
                          <InputGroup width={"40%"}>
                            <h5
                              style={{
                                marginTop: "2%",
                                marginRight: "2%",
                                marginLeft: "2%",
                              }}
                            >
                              From
                            </h5>
                            <Input
                              placeholder="Dates"
                              size="md"
                              type="date"
                              border={"1.5px solid black"}
                              borderRadius={"1rem"}
                              _hover={{
                                border: "1.5px solid black",
                                borderRadius: "1rem",
                              }}
                            />
                            <h5
                              style={{
                                marginTop: "2%",
                                marginRight: "2%",
                                marginLeft: "2%",
                              }}
                            >
                              To
                            </h5>
                            <Input
                              size="md"
                              type="date"
                              border={"1.5px solid black"}
                              borderRadius={"1rem"}
                              _hover={{
                                border: "1.5px solid black",
                                borderRadius: "1rem",
                              }}
                            />
                            <h5
                              style={{
                                marginTop: "2%",
                                marginRight: "2%",
                                marginLeft: "5%",
                              }}
                            />
                          </InputGroup>
                          <InputGroup width={"23%"}>
                            <InputLeftElement pointerEvents="none">
                              <FaUser
                                color="black.1000"
                                style={{ marginRight: "1rem" }}
                              />
                            </InputLeftElement>
                            <Input
                              _hover={{
                                border: "1.5px solid black",
                                borderRadius: "1rem",
                              }}
                              border={"1.5px solid black"}
                              borderRadius={"1rem"}
                              marginLeft={"-4%"}
                              type="text"
                              placeholder="Travelers"
                              value={`${travelers.adults} Adults, ${travelers.children} Children, ${travelers.infants} Infants`}
                              onClick={() => setIsOpen(true)}
                            />
                            <Popover
                              isOpen={isOpen}
                              onClose={() => setIsOpen(false)}
                            >
                              <PopoverContent
                                position={"fixed"}
                                top={"-25%"}
                                marginLeft={"-12%"}
                              >
                                <PopoverHeader fontWeight="semibold">
                                  Room 1
                                </PopoverHeader>
                                <PopoverBody>
                                  <div>
                                    <span>Adults: </span>
                                    <Button
                                      variant="outline"
                                      size="xs"
                                      onClick={() => handleDecrement("adults")}
                                      border={"1.5px solid black"}
                                      borderRadius={"1rem"}
                                    >
                                      -
                                    </Button>
                                    <span style={{ margin: "0 10px" }}>
                                      {travelers.adults}
                                    </span>
                                    <Button
                                      variant="outline"
                                      size="xs"
                                      onClick={() => handleIncrement("adults")}
                                      border={"1.5px solid black"}
                                      borderRadius={"1rem"}
                                    >
                                      +
                                    </Button>
                                  </div>
                                  <br />
                                  <div>
                                    <span>Children: </span>
                                    <Button
                                      variant="outline"
                                      size="xs"
                                      onClick={() =>
                                        handleDecrement("children")
                                      }
                                      border={"1.5px solid black"}
                                      borderRadius={"1rem"}
                                    >
                                      -
                                    </Button>
                                    <span style={{ margin: "0 10px" }}>
                                      {travelers.children}
                                    </span>
                                    <Button
                                      variant="outline"
                                      size="xs"
                                      onClick={() =>
                                        handleIncrement("children")
                                      }
                                      border={"1.5px solid black"}
                                      borderRadius={"1rem"}
                                    >
                                      +
                                    </Button>
                                  </div>
                                  <br />
                                  <div>
                                    <span>Infants: </span>
                                    <Button
                                      variant="outline"
                                      size="xs"
                                      onClick={() => handleDecrement("infants")}
                                      border={"1.5px solid black"}
                                      borderRadius={"1rem"}
                                    >
                                      -
                                    </Button>
                                    <span style={{ margin: "0 10px" }}>
                                      {travelers.infants}
                                    </span>
                                    <Button
                                      variant="outline"
                                      size="xs"
                                      onClick={() => handleIncrement("infants")}
                                      border={"1.5px solid black"}
                                      borderRadius={"1rem"}
                                    >
                                      +
                                    </Button>
                                  </div>
                                  <br />
                                  <PopoverTrigger>
                                    <Button
                                      color="white"
                                      backgroundColor={"blue"}
                                      padding={"3%"}
                                      borderRadius={"1.5rem"}
                                      marginLeft="30%"
                                      variant="link"
                                      onClick={() => setIsOpen(true)}
                                    >
                                      Done
                                    </Button>
                                  </PopoverTrigger>
                                </PopoverBody>
                              </PopoverContent>
                            </Popover>
                          </InputGroup>
                          <Button
                            color={"white"}
                            backgroundColor={"blue"}
                            borderRadius={"2rem"}
                            marginLeft={"1rem"}
                            _hover={{ backgroundColor: "#0b428b", color: "white" }}
                          >
                            Search
                          </Button>
                          <Popover isOpen={isPopoverOpen}>
                            <PopoverTrigger>
                              <Checkbox
                                defaultChecked={isPopoverOpen}
                                onChange={handleCheckboxChange}
                                marginTop={"7%"}
                                marginLeft={"-112%"}
                              >
                                I only need accommodation for part of my trip
                              </Checkbox>
                            </PopoverTrigger>
                            {isPopoverOpen && (
                              <PopoverBody
                                position={"fixed"}
                                marginTop={"7%"}
                                marginLeft={"1%"}
                              >
                                <InputGroup width={"110%"}>
                                  <h5
                                    style={{
                                      marginTop: "2%",
                                      marginRight: "2%",
                                      marginLeft: "5%",
                                    }}
                                  >
                                    From
                                  </h5>
                                  <Input
                                    placeholder="Dates"
                                    size="md"
                                    type="date"
                                    border={"1.5px solid black"}
                                    borderRadius={"1rem"}
                                    _hover={{
                                      border: "1.5px solid black",
                                      borderRadius: "1rem",
                                    }}
                                  />
                                  <h5
                                    style={{
                                      marginTop: "2%",
                                      marginRight: "2%",
                                      marginLeft: "5%",
                                    }}
                                  >
                                    To
                                  </h5>
                                  <Input
                                    size="md"
                                    type="date"
                                    border={"1.5px solid black"}
                                    borderRadius={"1rem"}
                                    _hover={{
                                      border: "1.5px solid black",
                                      borderRadius: "1rem",
                                    }}
                                  />
                                </InputGroup>
                              </PopoverBody>
                            )}
                          </Popover>
                        </div>
                      }
                    </div>
                  </TabPanel>
                  <TabPanel>
                  <div
                      style={{ justifyContent: "center", alignItems: "center" }}
                    >
                      {selectedCount > 2} 
                      {
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            marginTop: "2rem",
                          }}
                        >
                          <InputGroup width={"18%"} marginLeft="3%">
                            <InputLeftElement pointerEvents="none">
                              <FaLocationDot color="black.1000" />
                            </InputLeftElement>
                            <Input
                              type="text"
                              placeholder="Leaving from"
                              border={"1.5px solid black"}
                              borderRadius={"1rem"}
                              _hover={{
                                border: "1.5px solid black",
                                borderRadius: "1rem",
                              }}
                            />
                            <h5
                              style={{
                                marginTop: "2%",
                                marginRight: "2%",
                                marginLeft: "5%",
                              }}
                            />
                          </InputGroup>
                          <InputGroup width={"18%"} marginLeft="3%">
                            <InputLeftElement
                              pointerEvents="none"
                              marginLeft={"-10%"}
                            >
                              <FaLocationDot color="black.1000" />
                            </InputLeftElement>
                            <Input
                              type="text"
                              placeholder="Going to"
                              marginLeft="-10%"
                              border={"1.5px solid black"}
                              borderRadius={"1rem"}
                              _hover={{
                                border: "1.5px solid black",
                                borderRadius: "1rem",
                              }}
                            />
                          </InputGroup>
                          <InputGroup width={"40%"}>
                            <h5
                              style={{
                                marginTop: "2%",
                                marginRight: "2%",
                                marginLeft: "5%",
                              }}
                            >
                              From
                            </h5>
                            <Input
                              placeholder="Dates"
                              size="md"
                              type="date"
                              border={"1.5px solid black"}
                              borderRadius={"1rem"}
                              _hover={{
                                border: "1.5px solid black",
                                borderRadius: "1rem",
                              }}
                            />
                            <h5
                              style={{
                                marginTop: "2%",
                                marginRight: "2%",
                                marginLeft: "5%",
                              }}
                            >
                              To
                            </h5>
                            <Input
                              size="md"
                              type="date"
                              border={"1.5px solid black"}
                              borderRadius={"1rem"}
                              _hover={{
                                border: "1.5px solid black",
                                borderRadius: "1rem",
                              }}
                            />
                            <h5
                              style={{
                                marginTop: "2%",
                                marginRight: "2%",
                                marginLeft: "5%",
                              }}
                            />
                          </InputGroup>
                          <InputGroup width={"23%"}>
                            <InputLeftElement pointerEvents="none">
                              <FaUser
                                color="black.1000"
                                style={{ marginRight: "-3rem" }}
                              />
                            </InputLeftElement>
                            <Input
                              _hover={{
                                border: "1.5px solid black",
                                borderRadius: "1rem",
                              }}
                              border={"1.5px solid black"}
                              borderRadius={"1rem"}
                              marginLeft={"6%"}
                              type="text"
                              placeholder="Travelers"
                              value={`${travelers.adults} Adults, ${travelers.children} Children, ${travelers.infants} Infants`}
                              onClick={() => setIsOpen(true)}
                            />
                            <Popover
                              isOpen={isOpen}
                              onClose={() => setIsOpen(false)}
                            >
                              <PopoverContent
                                position={"fixed"}
                                top={"-25%"}
                                marginLeft={"-12%"}
                              >
                                <PopoverHeader fontWeight="semibold">
                                  Room 1
                                </PopoverHeader>
                                <PopoverBody>
                                  <div>
                                    <span>Adults: </span>
                                    <Button
                                      variant="outline"
                                      size="xs"
                                      onClick={() => handleDecrement("adults")}
                                      border={"1.5px solid black"}
                                      borderRadius={"1rem"}
                                    >
                                      -
                                    </Button>
                                    <span style={{ margin: "0 10px" }}>
                                      {travelers.adults}
                                    </span>
                                    <Button
                                      variant="outline"
                                      size="xs"
                                      onClick={() => handleIncrement("adults")}
                                      border={"1.5px solid black"}
                                      borderRadius={"1rem"}
                                    >
                                      +
                                    </Button>
                                  </div>
                                  <br />
                                  <div>
                                    <span>Children: </span>
                                    <Button
                                      variant="outline"
                                      size="xs"
                                      onClick={() =>
                                        handleDecrement("children")
                                      }
                                      border={"1.5px solid black"}
                                      borderRadius={"1rem"}
                                    >
                                      -
                                    </Button>
                                    <span style={{ margin: "0 10px" }}>
                                      {travelers.children}
                                    </span>
                                    <Button
                                      variant="outline"
                                      size="xs"
                                      onClick={() =>
                                        handleIncrement("children")
                                      }
                                      border={"1.5px solid black"}
                                      borderRadius={"1rem"}
                                    >
                                      +
                                    </Button>
                                  </div>
                                  <br />
                                  <div>
                                    <span>Infants: </span>
                                    <Button
                                      variant="outline"
                                      size="xs"
                                      onClick={() => handleDecrement("infants")}
                                      border={"1.5px solid black"}
                                      borderRadius={"1rem"}
                                    >
                                      -
                                    </Button>
                                    <span style={{ margin: "0 10px" }}>
                                      {travelers.infants}
                                    </span>
                                    <Button
                                      variant="outline"
                                      size="xs"
                                      onClick={() => handleIncrement("infants")}
                                      border={"1.5px solid black"}
                                      borderRadius={"1rem"}
                                    >
                                      +
                                    </Button>
                                  </div>
                                  <br />
                                  <PopoverTrigger>
                                    <Button
                                      color="white"
                                      backgroundColor={"blue"}
                                      padding={"3%"}
                                      borderRadius={"1.5rem"}
                                      marginLeft="30%"
                                      variant="link"
                                      onClick={() => setIsOpen(true)}
                                    >
                                      Done
                                    </Button>
                                  </PopoverTrigger>
                                </PopoverBody>
                              </PopoverContent>
                            </Popover>
                          </InputGroup>
                          <Button
                            color={"white"}
                            backgroundColor={"blue"}
                            borderRadius={"2rem"}
                            marginLeft={"1rem"}
                            _hover={{ backgroundColor: "#0b428b", color: "white" }}
                          >
                            Search
                          </Button>
                        </div>}
                        </div>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </TabPanel>
            <TabPanel align="start" className="Packages">
              <Button
                onClickCapture={handleStaysClick}
                border={"2px solid black"}
                borderRadius={"3rem"}
                marginLeft={"1rem"}
                value={staysText}
                disabled={selectedCount > 2 && staysText === "Stays added"}
              >
                {staysText}
              </Button>
              <Button
                onClickCapture={handleFlightsClick}
                border={"2px solid black"}
                borderRadius={"3rem"}
                marginLeft={"1rem"}
                value={flightsText}
                disabled={selectedCount > 2 && flightsText === "Flights added"}
              >
                {flightsText}
              </Button>
              <Button
                onClickCapture={handleCarsClick}
                border={"2px solid black"}
                borderRadius={"3rem"}
                marginLeft={"1rem"}
                value={carsText}
                disabled={selectedCount > 2 && carsText === "Cars added"}
              >
                {carsText}
              </Button>
              <Menu closeOnSelect={true}>
                <MenuButton
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                  border={"2px solid black"}
                  borderRadius={"3rem"}
                  marginLeft={"1rem"}
                >
                  {selectedValue}
                </MenuButton>
                <MenuList minWidth="240px">
                  <MenuOptionGroup defaultValue="Economy" type="radio">
                    <MenuItemOption
                      value="Economy"
                      id="Option"
                      onClick={() => handleMenuItemClick("Economy")}
                    >
                      Economy
                    </MenuItemOption>
                    <MenuItemOption
                      value="Premium economy"
                      id="Option"
                      onClick={() => handleMenuItemClick("Premium economy")}
                    >
                      Premium economy
                    </MenuItemOption>
                    <MenuItemOption
                      value="Buisness class"
                      id="Option"
                      onClick={() => handleMenuItemClick("Buisness class")}
                    >
                      Buisness class
                    </MenuItemOption>
                    <MenuItemOption
                      value="First class"
                      id="Option"
                      onClick={() => handleMenuItemClick("First class")}
                    >
                      First class
                    </MenuItemOption>
                  </MenuOptionGroup>
                </MenuList>
              </Menu>
              {(selectedCount < 2 && (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "2rem",
                  }}
                >
                  <img src={Search} alt="SearchIcon" />
                  <p align="center">Please select two or more items</p>
                  <p align="center">
                    To start building your trip, choose two or more items
                  </p>
                </div>
              )) || (
                <div
                  style={{
                    marginTop: "2rem",
                    marginLeft: "-2rem",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {(selectedCount === 2 &&
                    staysText === "Stays added" &&
                    carsText === "Cars added" && (
                      <div style={{ display: "flex" }}>
                        <InputGroup width={"23%"} marginLeft="3%">
                          <InputLeftElement pointerEvents="none">
                            <FaLocationDot color="black.1000" />
                          </InputLeftElement>
                          <Input
                            type="text"
                            placeholder="Going to"
                            border={"1.5px solid black"}
                            borderRadius={"1rem"}
                            _hover={{
                              border: "1.5px solid black",
                              borderRadius: "1rem",
                            }}
                          />
                        </InputGroup>
                        <InputGroup width={"40%"}>
                          <h5
                            style={{
                              marginTop: "2%",
                              marginRight: "2%",
                              marginLeft: "5%",
                            }}
                          >
                            From
                          </h5>
                          <Input
                            placeholder="Dates"
                            size="md"
                            type="date"
                            border={"1.5px solid black"}
                            borderRadius={"1rem"}
                            _hover={{
                              border: "1.5px solid black",
                              borderRadius: "1rem",
                            }}
                          />
                          <h5
                            style={{
                              marginTop: "2%",
                              marginRight: "2%",
                              marginLeft: "5%",
                            }}
                          >
                            To
                          </h5>
                          <Input
                            size="md"
                            type="date"
                            border={"1.5px solid black"}
                            borderRadius={"1rem"}
                            _hover={{
                              border: "1.5px solid black",
                              borderRadius: "1rem",
                            }}
                          />
                        </InputGroup>
                        <InputGroup width={"23%"}>
                          <InputLeftElement pointerEvents="none">
                            <FaUser
                              color="black.1000"
                              style={{ marginRight: "-3rem" }}
                            />
                          </InputLeftElement>
                          <Input
                            _hover={{
                              border: "1.5px solid black",
                              borderRadius: "1rem",
                            }}
                            border={"1.5px solid black"}
                            borderRadius={"1rem"}
                            marginLeft={"6%"}
                            type="text"
                            placeholder="Travelers"
                            value={`${travelers.adults} Adults, ${travelers.children} Children, ${travelers.infants} Infants`}
                            onClick={() => setIsOpen(true)}
                          />
                          <Popover
                            isOpen={isOpen}
                            onClose={() => setIsOpen(false)}
                          >
                            <PopoverContent
                              position={"fixed"}
                              top={"-25%"}
                              marginLeft={"-12%"}
                            >
                              <PopoverHeader fontWeight="semibold">
                                Room 1
                              </PopoverHeader>
                              <PopoverBody>
                                <div>
                                  <span>Adults: </span>
                                  <Button
                                    variant="outline"
                                    size="xs"
                                    onClick={() => handleDecrement("adults")}
                                    border={"1.5px solid black"}
                                    borderRadius={"1rem"}
                                  >
                                    -
                                  </Button>
                                  <span style={{ margin: "0 10px" }}>
                                    {travelers.adults}
                                  </span>
                                  <Button
                                    variant="outline"
                                    size="xs"
                                    onClick={() => handleIncrement("adults")}
                                    border={"1.5px solid black"}
                                    borderRadius={"1rem"}
                                  >
                                    +
                                  </Button>
                                </div>
                                <br />
                                <div>
                                  <span>Children: </span>
                                  <Button
                                    variant="outline"
                                    size="xs"
                                    onClick={() => handleDecrement("children")}
                                    border={"1.5px solid black"}
                                    borderRadius={"1rem"}
                                  >
                                    -
                                  </Button>
                                  <span style={{ margin: "0 10px" }}>
                                    {travelers.children}
                                  </span>
                                  <Button
                                    variant="outline"
                                    size="xs"
                                    onClick={() => handleIncrement("children")}
                                    border={"1.5px solid black"}
                                    borderRadius={"1rem"}
                                  >
                                    +
                                  </Button>
                                </div>
                                <br />
                                <div>
                                  <span>Infants: </span>
                                  <Button
                                    variant="outline"
                                    size="xs"
                                    onClick={() => handleDecrement("infants")}
                                    border={"1.5px solid black"}
                                    borderRadius={"1rem"}
                                  >
                                    -
                                  </Button>
                                  <span style={{ margin: "0 10px" }}>
                                    {travelers.infants}
                                  </span>
                                  <Button
                                    variant="outline"
                                    size="xs"
                                    onClick={() => handleIncrement("infants")}
                                    border={"1.5px solid black"}
                                    borderRadius={"1rem"}
                                  >
                                    +
                                  </Button>
                                </div>
                                <br />
                                <PopoverTrigger>
                                  <Button
                                    color="white"
                                    backgroundColor={"blue"}
                                    padding={"3%"}
                                    borderRadius={"1.5rem"}
                                    marginLeft="30%"
                                    variant="link"
                                    onClick={() => setIsOpen(true)}
                                  >
                                    Done
                                  </Button>
                                </PopoverTrigger>
                              </PopoverBody>
                            </PopoverContent>
                          </Popover>
                        </InputGroup>
                        <Button
                          color={"white"}
                          backgroundColor={"blue"}
                          borderRadius={"2rem"}
                          marginLeft={"1rem"}
                          _hover={{ backgroundColor: "#0b428b", color: "white" }}
                        >
                          Search
                        </Button>
                        <Popover isOpen={isPopoverOpen}>
                          <PopoverTrigger>
                            <Checkbox
                              defaultChecked={isPopoverOpen}
                              onChange={handleCheckboxChange}
                              marginTop={"7%"}
                              marginLeft={"-96%"}
                            >
                              I only need accommodation for part of my trip
                            </Checkbox>
                          </PopoverTrigger>
                          {isPopoverOpen && (
                            <PopoverBody
                              position={"fixed"}
                              marginTop={"7%"}
                              marginLeft={"1%"}
                            >
                              <InputGroup width={"110%"}>
                                <h5
                                  style={{
                                    marginTop: "2%",
                                    marginRight: "2%",
                                    marginLeft: "5%",
                                  }}
                                >
                                  From
                                </h5>
                                <Input
                                  placeholder="Dates"
                                  size="md"
                                  type="date"
                                  border={"1.5px solid black"}
                                  borderRadius={"1rem"}
                                  _hover={{
                                    border: "1.5px solid black",
                                    borderRadius: "1rem",
                                  }}
                                />
                                <h5
                                  style={{
                                    marginTop: "2%",
                                    marginRight: "2%",
                                    marginLeft: "5%",
                                  }}
                                >
                                  To
                                </h5>
                                <Input
                                  size="md"
                                  type="date"
                                  border={"1.5px solid black"}
                                  borderRadius={"1rem"}
                                  _hover={{
                                    border: "1.5px solid black",
                                    borderRadius: "1rem",
                                  }}
                                />
                              </InputGroup>
                            </PopoverBody>
                          )}
                        </Popover>
                      </div>
                    )) || (
                    <div
                      style={{ justifyContent: "center", alignItems: "center" }}
                    >
                      {selectedCount > 2} 
                      {
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            marginTop: "2rem",
                          }}
                        >
                          <InputGroup width={"18%"} marginLeft="-2%">
                            <InputLeftElement pointerEvents="none">
                              <FaLocationDot color="black.1000" />
                            </InputLeftElement>
                            <Input
                              type="text"
                              placeholder="Leaving from"
                              border={"1.5px solid black"}
                              borderRadius={"1rem"}
                              _hover={{
                                border: "1.5px solid black",
                                borderRadius: "1rem",
                              }}
                            />
                            <h5
                              style={{
                                marginTop: "2%",
                                marginRight: "2%",
                                marginLeft: "5%",
                              }}
                            />
                          </InputGroup>
                          <InputGroup width={"18%"} marginLeft="2%">
                            <InputLeftElement
                              pointerEvents="none"
                              marginLeft={"-10%"}
                            >
                              <FaLocationDot color="black.1000" />
                            </InputLeftElement>
                            <Input
                              type="text"
                              placeholder="Going to"
                              marginLeft="-10%"
                              border={"1.5px solid black"}
                              borderRadius={"1rem"}
                              _hover={{
                                border: "1.5px solid black",
                                borderRadius: "1rem",
                              }}
                            />
                          </InputGroup>
                          <InputGroup width={"40%"}>
                            <h5
                              style={{
                                marginTop: "2%",
                                marginRight: "2%",
                                marginLeft: "-1%",
                              }}
                            >
                              From
                            </h5>
                            <Input
                              placeholder="Dates"
                              size="md"
                              type="date"
                              border={"1.5px solid black"}
                              borderRadius={"1rem"}
                              _hover={{
                                border: "1.5px solid black",
                                borderRadius: "1rem",
                              }}
                            />
                            <h5
                              style={{
                                marginTop: "2%",
                                marginRight: "2%",
                                marginLeft: "2%",
                              }}
                            >
                              To
                            </h5>
                            <Input
                              size="md"
                              type="date"
                              border={"1.5px solid black"}
                              borderRadius={"1rem"}
                              _hover={{
                                border: "1.5px solid black",
                                borderRadius: "1rem",
                              }}
                            />
                            <h5
                              style={{
                                marginTop: "2%",
                                marginRight: "2%",
                                marginLeft: "5%",
                              }}
                            />
                          </InputGroup>
                          <InputGroup width={"24%"}>
                            <InputLeftElement pointerEvents="none">
                              <FaUser
                                color="black.1000"
                                style={{ marginRight: "1rem" }}
                              />
                            </InputLeftElement>
                            <Input
                              _hover={{
                                border: "1.5px solid black",
                                borderRadius: "1rem",
                              }}
                              border={"1.5px solid black"}
                              borderRadius={"1rem"}
                              marginLeft={"-5%"}
                              type="text"
                              placeholder="Travelers"
                              value={`${travelers.adults} Adults, ${travelers.children} Children, ${travelers.infants} Infants`}
                              onClick={() => setIsOpen(true)}
                            />
                            <Popover
                              isOpen={isOpen}
                              onClose={() => setIsOpen(false)}
                            >
                              <PopoverContent
                                position={"fixed"}
                                top={"-25%"}
                                marginLeft={"-12%"}
                              >
                                <PopoverHeader fontWeight="semibold">
                                  Room 1
                                </PopoverHeader>
                                <PopoverBody>
                                  <div>
                                    <span>Adults: </span>
                                    <Button
                                      variant="outline"
                                      size="xs"
                                      onClick={() => handleDecrement("adults")}
                                      border={"1.5px solid black"}
                                      borderRadius={"1rem"}
                                    >
                                      -
                                    </Button>
                                    <span style={{ margin: "0 10px" }}>
                                      {travelers.adults}
                                    </span>
                                    <Button
                                      variant="outline"
                                      size="xs"
                                      onClick={() => handleIncrement("adults")}
                                      border={"1.5px solid black"}
                                      borderRadius={"1rem"}
                                    >
                                      +
                                    </Button>
                                  </div>
                                  <br />
                                  <div>
                                    <span>Children: </span>
                                    <Button
                                      variant="outline"
                                      size="xs"
                                      onClick={() =>
                                        handleDecrement("children")
                                      }
                                      border={"1.5px solid black"}
                                      borderRadius={"1rem"}
                                    >
                                      -
                                    </Button>
                                    <span style={{ margin: "0 10px" }}>
                                      {travelers.children}
                                    </span>
                                    <Button
                                      variant="outline"
                                      size="xs"
                                      onClick={() =>
                                        handleIncrement("children")
                                      }
                                      border={"1.5px solid black"}
                                      borderRadius={"1rem"}
                                    >
                                      +
                                    </Button>
                                  </div>
                                  <br />
                                  <div>
                                    <span>Infants: </span>
                                    <Button
                                      variant="outline"
                                      size="xs"
                                      onClick={() => handleDecrement("infants")}
                                      border={"1.5px solid black"}
                                      borderRadius={"1rem"}
                                    >
                                      -
                                    </Button>
                                    <span style={{ margin: "0 10px" }}>
                                      {travelers.infants}
                                    </span>
                                    <Button
                                      variant="outline"
                                      size="xs"
                                      onClick={() => handleIncrement("infants")}
                                      border={"1.5px solid black"}
                                      borderRadius={"1rem"}
                                    >
                                      +
                                    </Button>
                                  </div>
                                  <br />
                                  <PopoverTrigger>
                                    <Button
                                      color="white"
                                      backgroundColor={"blue"}
                                      padding={"3%"}
                                      borderRadius={"1.5rem"}
                                      marginLeft="30%"
                                      variant="link"
                                      onClick={() => setIsOpen(true)}
                                    >
                                      Done
                                    </Button>
                                  </PopoverTrigger>
                                </PopoverBody>
                              </PopoverContent>
                            </Popover>
                          </InputGroup>
                          <Button
                            color={"white"}
                            backgroundColor={"blue"}
                            borderRadius={"2rem"}
                            marginLeft={"1rem"}
                            _hover={{ backgroundColor: "#0b428b", color: "white" }}
                          >
                            Search
                          </Button>
                          <Popover isOpen={isPopoverOpen}>
                            <PopoverTrigger>
                              <Checkbox
                                defaultChecked={isPopoverOpen}
                                onChange={handleCheckboxChange}
                                marginTop={"7%"}
                                marginLeft={"-112%"}
                              >
                                I only need accommodation for part of my trip
                              </Checkbox>
                            </PopoverTrigger>
                            {isPopoverOpen && (
                              <PopoverBody
                                position={"fixed"}
                                marginTop={"7%"}
                                marginLeft={"1%"}
                              >
                                <InputGroup width={"110%"}>
                                  <h5
                                    style={{
                                      marginTop: "2%",
                                      marginRight: "2%",
                                      marginLeft: "5%",
                                    }}
                                  >
                                    From
                                  </h5>
                                  <Input
                                    placeholder="Dates"
                                    size="md"
                                    type="date"
                                    border={"1.5px solid black"}
                                    borderRadius={"1rem"}
                                    _hover={{
                                      border: "1.5px solid black",
                                      borderRadius: "1rem",
                                    }}
                                  />
                                  <h5
                                    style={{
                                      marginTop: "2%",
                                      marginRight: "2%",
                                      marginLeft: "5%",
                                    }}
                                  >
                                    To
                                  </h5>
                                  <Input
                                    size="md"
                                    type="date"
                                    border={"1.5px solid black"}
                                    borderRadius={"1rem"}
                                    _hover={{
                                      border: "1.5px solid black",
                                      borderRadius: "1rem",
                                    }}
                                  />
                                </InputGroup>
                              </PopoverBody>
                            )}
                          </Popover>
                        </div>
                      }
                    </div>
                  )}
                </div>
              )}
            </TabPanel>
            <TabPanel align="start">
              <div style={{ display: "flex" }}>
                <InputGroup width={"50%"} marginLeft="3%">
                  <InputLeftElement pointerEvents="none">
                    <FaLocationDot color="black.1000" />
                  </InputLeftElement>
                  <Input
                    type="text"
                    placeholder="Going to"
                    border={"1.5px solid black"}
                    borderRadius={"1rem"}
                    _hover={{
                      border: "1.5px solid black",
                      borderRadius: "1rem",
                    }}
                  />
                </InputGroup>
                <InputGroup width={"50%"}>
                  <h5
                    style={{
                      marginTop: "2%",
                      marginRight: "2%",
                      marginLeft: "5%",
                    }}
                  >
                    From
                  </h5>
                  <Input
                    placeholder="Dates"
                    size="md"
                    type="date"
                    border={"1.5px solid black"}
                    borderRadius={"1rem"}
                    _hover={{
                      border: "1.5px solid black",
                      borderRadius: "1rem",
                    }}
                  />
                  <h5
                    style={{
                      marginTop: "2%",
                      marginRight: "2%",
                      marginLeft: "5%",
                    }}
                  >
                    To
                  </h5>
                  <Input
                    size="md"
                    type="date"
                    border={"1.5px solid black"}
                    borderRadius={"1rem"}
                    _hover={{
                      border: "1.5px solid black",
                      borderRadius: "1rem",
                    }}
                  />
                </InputGroup>
                <Button
                  color={"white"}
                  backgroundColor={"blue"}
                  borderRadius={"2rem"}
                  marginLeft={"1rem"}
                  _hover={{ backgroundColor: "#0b428b", color: "white" }}
                  padding={"2% 3%"}
                >
                  Search
                </Button>
              </div>
            </TabPanel>
            <TabPanel align="start">
              <div>For expert cruise advice, call 1-855-257-1605.</div><br />
              <div style={{ display: "flex" }}>
                <InputGroup width={"50%"} marginLeft="3%">
                  <InputLeftElement pointerEvents="none">
                    <FaLocationDot color="black.1000" />
                  </InputLeftElement>
                  <Input
                    type="text"
                    placeholder="Going to"
                    border={"1.5px solid black"}
                    borderRadius={"1rem"}
                    _hover={{
                      border: "1.5px solid black",
                      borderRadius: "1rem",
                    }}
                  />
                </InputGroup>
                <InputGroup width={"50%"}>
                  <h5
                    style={{
                      marginTop: "2%",
                      marginRight: "2%",
                      marginLeft: "5%",
                    }}
                  >
                    From
                  </h5>
                  <Input
                    placeholder="Dates"
                    size="md"
                    type="date"
                    border={"1.5px solid black"}
                    borderRadius={"1rem"}
                    _hover={{
                      border: "1.5px solid black",
                      borderRadius: "1rem",
                    }}
                  />
                  <h5
                    style={{
                      marginTop: "2%",
                      marginRight: "2%",
                      marginLeft: "5%",
                    }}
                  >
                    To
                  </h5>
                  <Input
                    size="md"
                    type="date"
                    border={"1.5px solid black"}
                    borderRadius={"1rem"}
                    _hover={{
                      border: "1.5px solid black",
                      borderRadius: "1rem",
                    }}
                  />
                </InputGroup>
                <Button
                  color={"white"}
                  backgroundColor={"blue"}
                  borderRadius={"2rem"}
                  marginLeft={"1rem"}
                  _hover={{ backgroundColor: "#0b428b", color: "white" }}
                  padding={"2% 3%"}
                >
                  Search
                </Button>
              </div>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
};
export default Navbar;
