import { StarIcon } from '@chakra-ui/icons'
import { Checkbox, CheckboxGroup, Input, Radio, RadioGroup, RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack, Stack, Switch } from '@chakra-ui/react'
import React from 'react'

function SidePanel({searchHotel,minPrice,priceChangeMin,maxPrice,priceChangeMax,rangeSlider,stardata,setcompareproperties,compareproperties,propertyHandle}) {
  return (
    <div className="sidebar">
          <div className="mapStyle">
            <img
              src="https://maps.googleapis.com/maps/api/staticmap?&size=600x400&map_id=3b266eb50d2997c6&markers=icon:https%3A%2F%2Fa.travel-assets.com%2Ftravel-assets-manager%2Feg-maps%2Fproperty.png%7C21.62336%2C87.52161%7C21.62625%2C87.50127%7C21.62442%2C87.50417&channel=expedia-HotelInformation&maptype=roadmap&key=AIzaSyCYjQus5kCufOpSj932jFoR_AJiL9yiwOw&signature=66zdHVHlReVsXTMuRDTpLnGawSY="
              alt="area map"
              height="70%"
              className="mapImage"
            />
            <a
              href="https://www.travelocity.com/Hotel-Search?adults=2&allowPreAppliedFilters=false&destination=Bhubaneshwar%2C%20India%20%28BBI-Biju%20Patnaik%29&endDate=2024-08-04&price=240&price=422&regionId=6026385&semdtl=&sort=RECOMMENDED&startDate=2024-08-03&theme=&useRewards=true&userIntent=&pwaOverlay=map"
              className="viewmap"
            >
              View in a map
            </a>
          </div>

          <br />

          <div className="compareStyle">
            <h4>compare-properties</h4> &nbsp;&nbsp;
            <Switch
              id="compare properties"
              onChange={(e) => setcompareproperties(!compareproperties)}
            />
          </div>
          <hr style={{ marginTop: "20px", width: "233px" }} />

          <div>
            <h2 style={{ fontSize: "20px" }}> Search by property name</h2>

            <input
              onChange={searchHotel}
              placeholder="e.g. Marriott"
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

            <RangeSlider
              onChange={rangeSlider}
              defaultValue={[minPrice, maxPrice]}
              min={0}
              max={800}
              step={30}
            >
              <RangeSliderTrack bg="blue.100">
                <RangeSliderFilledTrack bg="blue" />
              </RangeSliderTrack>
              <RangeSliderThumb boxSize={6} index={0} />
              <RangeSliderThumb boxSize={6} index={1} />
            </RangeSlider>
            <div style={{ marginTop: "20px" }}>
              <h4 style={{ fontSize: "15px" }}>Guest rating</h4>
              <div style={{ display: "flex", gap: "10px" }}>
                <RadioGroup>
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
              <div style={{ display: "flex", gap: "10px", width: "25%",justifyContent:"space-around" }}>
                <button className="starButtonStyle" onClick={() => stardata(1)}>
                  <h1>1</h1>
                  <StarIcon />
                </button>
                <button className="starButtonStyle" onClick={() => stardata(2)}>
                  <h1>2</h1>
                  <StarIcon />
                </button>
                <button className="starButtonStyle" onClick={() => stardata(3)}>
                  <h1>3</h1>
                  <StarIcon />
                </button>
                <button className="starButtonStyle" onClick={() => stardata(4)}>
                  <h1>4</h1>
                  <StarIcon />
                </button>
                <button className="starButtonStyle" onClick={() => stardata(5)}>
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
                <RadioGroup>
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
                <RadioGroup>
                  <Stack direction="column">
                    <Radio onClick={() => propertyHandle("hotel")} value="1">
                      Hotel
                    </Radio>
                    <Radio onClick={() => propertyHandle("resort")} value="2">
                      Resort
                    </Radio>
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
                    <Checkbox value="washer and dryer"> washer and dryer</Checkbox>
                    <Checkbox value="outdoor space">outdoor space</Checkbox>
                    <Checkbox value="bar">bar</Checkbox>
                  </Stack>
                </CheckboxGroup>
              </div>
            </div>
          </div>
        </div>
  )
}

export default SidePanel