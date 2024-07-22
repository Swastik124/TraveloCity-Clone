import React, { useState} from 'react';
import { useEffect } from 'react';
import Carousel from 'better-react-carousel';
import './Crad.css';
import { Card, CardBody, Image, Heading, Text, Stack } from '@chakra-ui/react';




const Home = () => {
  const[data,setData]= useState([]);
async function getData() {
  let res = await fetch(`http://localhost:3000/hotels`);
  let fetchedData = await res.json();
  setData(fetchedData.data);
  console.log(fetchedData);
}
useEffect(() => {
  getData();
}, []);

try {
  return (
    <>
      <h3 className='Headings'>Recommended stays for you</h3>
     
      <Carousel cols={3} rows={1} gap={0} loop >
      {data.map((el) => (
        <Carousel.Item key={el.data}>
        
          <Card maxW='sm'>
            <CardBody>
              <Image
                src={el.image}
                
                alt='Green double couch with wooden legs'
                borderRadius='lg'/>
              <Stack mt='6' spacing='3'>
                <Heading size='md'>Living room Sofa</Heading>
                <Text>
                  {el.rating}
                </Text>
                <Text color='#191e3b' fontSize='sm'>
                  4.5/5(2,098)
                </Text>
              </Stack>
            </CardBody>
          </Card>
        
          </Carousel.Item>
          ))};
      </Carousel>
      <a href='#'>see more </a>
      

      <h3 className='Headings'>Explore stays in trending destinations</h3>
     
      <Carousel cols={3} rows={1} gap={0} loop >
      {data.map(({el}) => (
        <Carousel.Item key={el.data}>
        
          <Card maxW='sm'>
            <CardBody>
              <Image
                src={el.image}
                
                alt='Green double couch with wooden legs'
                borderRadius='lg'/>
              <Stack mt='6' spacing='3'>
                <Heading size='md'>Living room Sofa</Heading>
                <Text>
                  {el.rating}
                </Text>
                <Text color='#191e3b' fontSize='sm'>
                  4.5/5(2,098)
                </Text>
              </Stack>
            </CardBody>
          </Card>
        
          </Carousel.Item>
          ))};
      </Carousel>

      
    </>
  );} catch (error) {
    console.error(error); // log the error
    return null; // or return an alternative message
  }
};

export default Home;