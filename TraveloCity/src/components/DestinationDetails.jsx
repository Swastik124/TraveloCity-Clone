import React, { useEffect, useState } from "react";
import {
  FormControl,
  FormLabel,
  Image,
  Box,
  Switch,
  Textarea,
  Stack,
  Select,
  InputLeftElement,
  border,
  Button,
  Checkbox,
  CheckboxGroup,
  Input,
  Slider as Range,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Radio,
  RadioGroup,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSlider,
  RangeSliderThumb,
} from "@chakra-ui/react";
import "./DestinationDetails.css";
import { SearchIcon, StarIcon } from "@chakra-ui/icons";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import dbdata from "../../db.json";

function DestinationDetails() {
  const [value, setValue] = React.useState("1");
  const [minPrice, setMinPrice] = React.useState(100);
  const [maxPrice, setMaxPrice] = React.useState(200);
  const [data, setData] = React.useState([]);
const [compareproperties,setcompareproperties]=React.useState(false)
  console.log(data);
  const rangeSlider = (e) => {
    console.log(e);
    setMinPrice(e[0]);
    setMaxPrice(e[1]);
    console.log(data)
    const filteredData = dbdata.hotels.filter((hotel) => hotel.price >= e[0] && hotel.price <= e[1]);
    console.log(filteredData, "filteredData");
    setData(filteredData);
};
  useEffect(() => {
    setData(dbdata.hotels)
  }, [])

  const priceChangeMin=(e)=>{
    setMinPrice(e.target.value);
    const filteredData = dbdata.hotels.filter((hotel) => hotel.price >= e.target.value && hotel.price <= maxPrice);
    console.log(filteredData, "filteredData");
    setData(filteredData);
  }
  const priceChangeMax=(e)=>{
    setMaxPrice(e.target.value);
    const filteredData = dbdata.hotels.filter((hotel) => hotel.price >= minPrice && hotel.price <= e.target.value);
    console.log(filteredData, "filteredData");
    setData(filteredData);
  }
  const searchHotel=(e)=>{
//     const word = "hello";
// const firstThreeChars = word.slice(0, 3);
// console.log(firstThreeChars); // Output: "hel"
    const filteredData = dbdata.hotels.filter((hotel) => hotel.name.toLowerCase().slice(0, e.target.value.length)===e.target.value);
    setData(filteredData);
  }
  
  return (
    <>
      <div style={{ display: "flex" ,gap:"20px"}}>
        <div className="sidebar">
          {/* map */}
          <div
           className="mapStyle"
          
          >
            <img
              src="https://maps.googleapis.com/maps/api/staticmap?&size=600x400&map_id=3b266eb50d2997c6&markers=icon:https%3A%2F%2Fa.travel-assets.com%2Ftravel-assets-manager%2Feg-maps%2Fproperty.png%7C21.62336%2C87.52161%7C21.62625%2C87.50127%7C21.62442%2C87.50417&channel=expedia-HotelInformation&maptype=roadmap&key=AIzaSyCYjQus5kCufOpSj932jFoR_AJiL9yiwOw&signature=66zdHVHlReVsXTMuRDTpLnGawSY="
              alt="area map"
              width="100%"
              className="mapImage"
             
            />
            <br />
            <a href="https://www.travelocity.com/Hotel-Search?adults=2&allowPreAppliedFilters=false&destination=Bhubaneshwar%2C%20India%20%28BBI-Biju%20Patnaik%29&endDate=2024-08-04&price=240&price=422&regionId=6026385&semdtl=&sort=RECOMMENDED&startDate=2024-08-03&theme=&useRewards=true&userIntent=&pwaOverlay=map">View in a map</a>
          </div>
          <br />
        
          <div
          className="compareStyle"
           
          >
            <h4>compare-properties</h4> &nbsp;&nbsp;
            <Switch id="compare properties" onChange={(e)=>setcompareproperties(!compareproperties)}/>
          </div>
          <hr style={{ marginTop: "20px", width: "233px" }} />
         
          <div>
            <h2 style={{ fontSize: "20px" }}> Search by property name</h2>
        
           
            <input onChange={searchHotel} placeholder="e.g. Marriott" 
            className="searchStyle"
           
              ></input>
              
             
          </div>
          <hr style={{ marginTop: "20px", width: "233px" }} />
          <div style={{ width: "55%" }}>
            <h2 style={{ fontSize: "22px", marginBottom: "10px" }}>
              {" "}
              Filter by
            </h2>
            <div>
              <h4 style={{ fontSize: "15px" }}>Popular filters</h4>
              <Checkbox defaultChecked>breakfast included</Checkbox>
              <br />
              <Checkbox defaultChecked>Pool</Checkbox>
              <br />
              <Checkbox defaultChecked>hotel</Checkbox>
              <br />
              <Checkbox defaultChecked>Reserve now,pay later</Checkbox>
              <br />
              <Checkbox defaultChecked>Pet friendly</Checkbox>
            </div>
            <div style={{ marginTop: "20px" }}>
              <h4 style={{ fontSize: "15px" }}>Price</h4>
              <div style={{ display: "flex", gap: "10px" }}>
                <Input
                  htmlSize={4}
                  value={minPrice}
                  width="auto"
                  onChange={priceChangeMin}
                  placeholder="Min"
                />
                <Input
                  htmlSize={4}
                  width="auto"
                  onChange={priceChangeMax}
                  value={maxPrice}
                  placeholder="Max"
                />
              </div>
            </div>
            
            <RangeSlider onChange={rangeSlider} defaultValue={[minPrice, maxPrice]} min={0} max={800} step={30}>
  <RangeSliderTrack bg='blue.100'>
    <RangeSliderFilledTrack bg='blue' />
  </RangeSliderTrack>
  <RangeSliderThumb boxSize={6} index={0} />
  <RangeSliderThumb boxSize={6} index={1} />
</RangeSlider>
            <div style={{ marginTop: "20px" }}>
              <h4 style={{ fontSize: "15px" }}>Guest rating</h4>
              <div style={{ display: "flex", gap: "10px" }}>
                <RadioGroup onChange={setValue} value={value}>
                  <Stack direction="column">
                    <Radio value="1">any</Radio>
                    <Radio value="2">wonderful 9+</Radio>
                    <Radio value="3">very good 8+</Radio>
                    <Radio value="4">good 7+</Radio>
                  </Stack>
                </RadioGroup>
              </div>
            </div>

            <div style={{ marginTop: "20px" }}>
              <h4 style={{ fontSize: "15px" }}>Star rating</h4>
              <div style={{ display: "flex", gap: "10px", width: "15rem" }}>
                <button
                className="starButtonStyle"
                  
                >
                  {/* <Icon name="star" size="24px" /> */}
                  <h1>1</h1>
                  <StarIcon />
                </button>
                <button
                 className="starButtonStyle"
                 
                >
                  {/* <Icon name="star" size="24px" /> */}
                  <h1>2</h1>
                  <StarIcon />
                </button>
                <button
                 className="starButtonStyle"
                 
                >
                  {/* <Icon name="star" size="24px" /> */}
                  <h1>3</h1>
                  <StarIcon />
                </button>
                <button
                 className="starButtonStyle"
                
                >
                  {/* <Icon name="star" size="24px" /> */}
                  <h1>4</h1>
                  <StarIcon />
                </button>
                <br />
                <button
                 className="starButtonStyle"
                  
                >
                  {/* <Icon name="star" size="24px" /> */}
                  <h1>5</h1>
                  <StarIcon />
                </button>
              </div>
            </div>

            <div style={{ marginTop: "20px" }}>
              <h4 style={{ fontSize: "15px" }}> Payment type</h4>
              <div style={{ display: "flex", gap: "10px" }}>
                <CheckboxGroup colorScheme="blue">
                  <Stack spacing={[1, 5]} direction={["column"]}>
                    <Checkbox value="reserve now,pay later">
                      Reserve now,pay later{" "}
                    </Checkbox>
                  </Stack>
                </CheckboxGroup>
              </div>
            </div>
            <div style={{ marginTop: "20px" }}>
              <h4 style={{ fontSize: "15px" }}>
                {" "}
                property Cancellation Options
              </h4>
              <div style={{ display: "flex", gap: "10px" }}>
                <CheckboxGroup colorScheme="blue">
                  <Stack spacing={[1, 5]} direction={["column"]}>
                    <Checkbox value="fully refundable property">
                      fully refundable property
                    </Checkbox>
                  </Stack>
                </CheckboxGroup>
              </div>
            </div>
            <div style={{ marginTop: "20px" }}>
              <h4 style={{ fontSize: "15px" }}> Stay Options</h4>
              <div style={{ display: "flex", gap: "10px" }}>
                <RadioGroup onChange={setValue} value={value}>
                  <Stack direction="column">
                    <Radio value="1">Any</Radio>
                    <Radio value="2">Hotels,resorts and more</Radio>
                    <Radio value="3">Entire homes,apartments and more </Radio>
                  </Stack>
                </RadioGroup>
              </div>
            </div>
            <div style={{ marginTop: "20px" }}>
              <h4 style={{ fontSize: "15px" }}>Property type</h4>
              <div style={{ display: "flex", gap: "10px" }}>
                <RadioGroup onChange={setValue} value={value}>
                  <Stack direction="column">
                    <Radio value="1">Hotel</Radio>
                    <Radio value="2">Resort</Radio>
                  </Stack>
                </RadioGroup>
              </div>
            </div>
            <div style={{ marginTop: "20px" }}>
              <h4 style={{ fontSize: "15px" }}> Ammenities</h4>
              <div style={{ display: "flex", gap: "10px" }}>
                <CheckboxGroup colorScheme="blue">
                  <Stack spacing={[1, 5]} direction={["column"]}>
                    <Checkbox value="pet friendly">pet friendly</Checkbox>
                    <Checkbox value="fully refundable property">pool</Checkbox>
                    <Checkbox value="wifi included">wifi included</Checkbox>
                    <Checkbox value="parking">parking</Checkbox>
                    <Checkbox value="hot tub">hot tub</Checkbox>
                    <Checkbox value="air conditioned">air conditioned</Checkbox>
                    <Checkbox value="kitchen">kitchen</Checkbox>
                    <Checkbox value="gym">gym</Checkbox>
                    <Checkbox value="spa">spa</Checkbox>
                    <Checkbox value="restaurant">restaurant</Checkbox>
                    <Checkbox value="washer and dryer">
                      washer and dryer
                    </Checkbox>
                    <Checkbox value="outdoor space">outdoor space</Checkbox>
                    <Checkbox value="bar">bar</Checkbox>
                  </Stack>
                </CheckboxGroup>
              </div>
            </div>
          </div>
        </div>
        <div
        className="topStyle"
         
        >
          <div className="topdiv">
            <FormControl>
              <FormLabel></FormLabel>
              <Select placeholder="Sort by">
                <option>recommended</option>
                <option>price:low to high</option>
                <option>price:high to low</option>
                <option>distance from downtown</option>
                <option>guest rating + our picks</option>
                <option>star rating</option>
              </Select>
            </FormControl>
          </div>

          <div>
            {data?.map((hotel) => {
              return (
                <div
                className="hotelCard"
                  style={{
                    border: "2px solid grey",
                    borderRadius: "20px",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    marginBottom: "10px",
                  }}
                >
                  {/* card hotel */}
                  <div
                    style={{
                      width: "30%",
                      // marginLeft: "0px",
                    }}
                  >
                   
                    <Box w="100%" p={4} color="white">
                      <Carousel infiniteLoop>
                        {hotel.image.map((slide) => {
                          return (
                            <Image
                              src={slide.image}
                              height="auto"
                              style={{ borderRadius: "20px" }}
                              width="800px"
                            />
                          );
                        })}
                      </Carousel>
                    </Box>
                    {/* </div> */}
                  </div>
                  <div
                   
                  >
                    <div>
                      <h3 style={{ fontSize: "20px", fontWeight: "bolder" }}>
                        {hotel.name}
                      </h3>
                      <p>
                        {hotel.location.city},{hotel.location.state},
                        {hotel.location.country}
                      </p>
                    </div>
                    <div
                    className="proPrDiv"
                      
                    >
                      <div>
                        <div style={{ color: "green" }}>
                          <p>Fully refundable</p>
                          <p>Reserve now , pay later</p>
                        </div>
                        <div
                        className="prDiv"
                         
                        >
                          <div
                          className="hotelRating"
                          >
                            {hotel.rating}
                          </div>
                          <div>
                            <p style={{ fontSize: "15px" }}>{hotel.view}</p>
                            <p style={{ fontSize: "12px" }}>{hotel.reviews}</p>
                          </div>
                        </div>
                      </div>

                      <div
                      className="hotelPrice"
                      >
                        <p>${hotel.price}</p>
                        <p> includes taxes and fees</p>
                        {compareproperties&&<CheckboxGroup>
                          <Checkbox>compare</Checkbox>
                        </CheckboxGroup>}
                        
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            ;
          </div>
        </div>
      </div>
    </>
  );
}

export default DestinationDetails;
