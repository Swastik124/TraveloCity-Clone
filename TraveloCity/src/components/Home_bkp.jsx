import React from 'react';
import Carousel from 'better-react-carousel';
import './Crad.css';
import { Card, CardBody, Image, Heading, Text, Stack } from '@chakra-ui/react';

export const Home = () => {
  return (
    <>
      <h3 className='Headings'>Recommended stays for you</h3>
     
      <Carousel cols={3} rows={1} gap={0} loop >
        <Carousel.Item>
          <Card maxW='sm'>
            <CardBody>
              <Image
                src='https://www.travelandleisure.com/thmb/4wCq2kiFRH7U_mny-tN47igocg8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/best-city-hotels-usa-the-mark-00-USACITYHOTELSWB20-87447030c456499ba5c43ba68c7a5547.jpg'
                alt='Green double couch with wooden legs'
                borderRadius='lg'
               
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>Living room Sofa</Heading>
                <Text>
                  
                </Text>
                <Text color='#191e3b' fontSize='sm'>
                  4.5/5(2,098)
                </Text>
              </Stack>
            </CardBody>
          </Card>
          </Carousel.Item>

          <Carousel.Item>
          <Card maxW='sm'>
            <CardBody>
              <Image
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPwPNQPFUSPfu4NRDbxNv0jiSmIx9ogfMwOg&s'
                alt='Green double couch with wooden legs'
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>Cozy City Hotel</Heading>
                <Text>
                </Text>
                <Text color='#191e3b' fontSize='sm'>
                4.2/5(1,145)
                </Text>
              </Stack>
            </CardBody>
          </Card>
          </Carousel.Item>
      
          
      
          <Carousel.Item>
          <Card maxW='sm'>
            <CardBody>
              <Image
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPwPNQPFUSPfu4NRDbxNv0jiSmIx9ogfMwOg&s'
                alt='Green double couch with wooden legs'
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>Living room Sofa</Heading>
                <Text>
                  This sofa is perfect for modern tropical spaces, baroque inspired
                  spaces, earthy toned spaces and for people who love a chic design with a
                  sprinkle of vintage design.
                </Text>
                <Text color='#191e3b' fontSize='2xl'>
                  $450
                </Text>
              </Stack>
            </CardBody>
          </Card>
        </Carousel.Item>

        <Carousel.Item>
          <Card maxW='sm'>
            <CardBody>
              <Image
                src='https://images.unsplash.com/photo-1721390336122-c883e2b5c113?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8'
                alt='Green double couch with wooden legs'
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>Cozy City Hotel</Heading>
                <Text>
                </Text>
                <Text color='#191e3b' fontSize='sm'>
                4.5/5(1,145)
                </Text>
              </Stack>
            </CardBody>
          </Card>
          </Carousel.Item>

          <Carousel.Item>
          <Card maxW='sm'>
            <CardBody>
              <Image
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPwPNQPFUSPfu4NRDbxNv0jiSmIx9ogfMwOg&s'
                alt='Green double couch with wooden legs'
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>Cozy City Hotel</Heading>
                <Text>
                </Text>
                <Text color='#191e3b' fontSize='sm'>
                4.5/5(1,145)
                </Text>
              </Stack>
            </CardBody>
          </Card>
          </Carousel.Item>

          <Carousel.Item>
          <Card maxW='sm'>
            <CardBody>
              <Image
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPwPNQPFUSPfu4NRDbxNv0jiSmIx9ogfMwOg&s'
                alt='Green double couch with wooden legs'
                borderRadius='lg'
              />
              <Stack mt='6' spacing='3'>
                <Heading size='md'>Cozy City Hotel</Heading>
                <Text>
                </Text>
                <Text color='#191e3b' fontSize='sm'>
                4.5/5(1,145)
                </Text>
              </Stack>
            </CardBody>
          </Card>
          </Carousel.Item>
      </Carousel>

      
    </>
  );
};

export default Home;