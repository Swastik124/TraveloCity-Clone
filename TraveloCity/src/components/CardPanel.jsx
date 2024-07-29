import { Box, Checkbox, CheckboxGroup, FormControl, FormLabel, Image, Select } from '@chakra-ui/react';
import React from 'react'
import { Carousel } from 'react-responsive-carousel';
// import { Payment } from './Payment';

function CardPanel({data,compareproperties,sortBar}) {
    // function reserve(){
    //     window.location.href='/Payment';
    // }
  return (
    <div className="topStyle">
          <div className="topdiv">
            <FormControl>
              <FormLabel>Sort by</FormLabel>
               <Select
            onChange={(e) => sortBar(e.target.value)}
          >
            <option value="price:low to high">price:low to high</option>
            <option value="price:high to low">price:high to low</option>
            <option value="star rating">star rating</option>
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
                    className='cardSt'
                  >
                    <Box
                     className='BoxSt'
                      >
                      <Carousel infiniteLoop>
                        {hotel.image.map((slide) => {
                          return (
                            <Image
                              src={slide.image}
                              className='ImgSt'
                            />
                          );
                        })}
                      </Carousel>
                    </Box>
                  </div>
                  <div>
                    <div>
                      <h3 style={{ fontSize: "20px", fontWeight: "bolder" }}>
                        {hotel.name}
                      </h3>
                      <p className='placeSt'>
                        {hotel.location.city},{hotel.location.state},
                        {hotel.location.country}
                      </p>
                      <p className='placeSt'>
                      {hotel.amenities[0]},{hotel.amenities[1]}
                      </p>
                    </div>
                    <div className="proPrDiv">
                      <div className='cardDivSt'>
                        <div 
                         className='refSt'>
                          <p className='lefta'>Fully refundable</p>
                          <p className='lefta'>Reserve now , pay later</p>
                        </div>
                        <div className="prDiv">
                          <div className="hotelRating">{hotel.rating}</div>
                          <div>
                            <p style={{ fontSize: "15px" }}>{hotel.view}</p>
                            <p style={{ fontSize: "12px" }}>{hotel.reviews}</p>
                          </div>
                        </div>
                      </div>
                        <div className='reserveprice'>
                      <div className="hotelPrice">
                        <p>${hotel.price}</p>
                        <p> includes taxes and fees</p>
                        {compareproperties && (
                          <CheckboxGroup>
                            <Checkbox>compare</Checkbox>
                          </CheckboxGroup>
                        )}
                      </div>
                      <div className='bookst'>
                        <button /*onClick={reserve}*/ style={{marginTop : "5px"}}>Reserve</button>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
  )
}

export default CardPanel
