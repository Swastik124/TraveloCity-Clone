import Carousel from 'better-react-carousel';
import { useState, useEffect } from 'react';
import './Home.css';
import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Text,
  SimpleGrid,
  CardHeader,
} from '@chakra-ui/react';


const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2
  }
};


function Home() {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/hotels')
      .then(response => response.json())
      .then(data => setHotels(data));
  }, []);
  function detail() {
    window.location.href = "/DestinationDetails";
  }

  return (
    <>
      <div className='mainBody'>
        <h2 style={{
          fontSize: ' 1.75rem',
          fontWeight: ' 500',
          lineHeight: '2rem',
          margin: '0.8%',
          fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif',
        }}>Recommended stays for you</h2>

        <div>
          <Carousel responsive={responsive} cols={4} rows={1} gap={10} loop>
            {hotels.map((hotel) => (
              <Carousel.Item key={hotel.id}>
                <div className="hotel-card" style={{
                  objectFit: 'cover',
                  height: '90%',
                  display: 'flex',
                  flex: '1',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin: '0.2rem',
                  boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',
                  borderRadius:'5%',
                  overflow: 'visible',

                }}>
                  <img src={hotel.image[0].image} alt={hotel.name} style={{
                    width: '100%',
                    height: '8rem',
                    objectFit: 'cover',
                    
                  }} />

                  <h3 style={{
                    fontSize: '1.2rem',
                    // fontWeight: 'bold',
                    margin: '0.5rem 0'
                  }}>{hotel.name}</h3>
                  <span style={{
                    paddingLeft: '1%',
                    paddingBottom: '1%',
                    fontSize: 'small',
                    display: 'inline-block',
                    margin: '0.5rem 0',
                    marginRight: '60%',
                    fontWeight: 'bold'
                  }}>
                    {hotel.rating}/5 ,({hotel.reviews})</span>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>

        <h2 style={{
          margin: '0.8%',
          fontSize: ' 1.75rem',
          fontWeight: ' 500',
          lineHeight: '2rem',
          fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif',
        }}>Explore stays in trending destinations</h2>

        <div>
          <Carousel responsive={responsive} cols={4} rows={1} gap={10} loop>
            {hotels.map((hotel) => (
              <Carousel.Item key={hotel.id}>
                <div className="hotel-card" style={{

                  height: '90%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin: '0.2rem',
                  boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',
                  borderRadius:'5%',
                  overflow: 'visible',
                }}>
                  <img src={hotel.image[0].image} alt={hotel.name} style={{
                    width: '100%',
                    height: '8rem',
                    objectFit: 'cover',
                   
                  }} />

                  <h2 style={{
                    fontSize: '1.2rem',
                    margin: '0.5rem 0'
                  }}>{hotel.name}</h2>
                  <p style={{
                    fontSize: '1rem',
                    margin: '0.5rem 0'
                  }}>{hotel.location.city}</p>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>

        <SimpleGrid templateColumns='repeat(3, minmax(5rem, 2fr))'  >
          <Card className='three_card' width={'26rem'} style={{ gap: '0', margin: '0', padding: '0' }} >
            <CardBody padding={0} margin={0}>
              <img src='https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ7JbNhTcBtFD4oRv7Z-nAgKVcmlYMs6myR4wQchvUp_ib_2nw8' alt='find your perfect trip' style={{
                width: '100%',
                height: '8rem',
                objectFit: 'cover',
                borderRadius: '10px',
                background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,2) 70%)', 
                filter:'brightness(80%)',
              }} />
              <div className='bottom-left'>Find your perfect trip</div>
              <CardFooter>
              Plan a trip for the whole family-from family travel tips to family-friendly filters, our tools make it easy.
              </CardFooter>
            </CardBody>
          </Card>

          <Card className='three_card' width={'26rem'}>
            <CardBody padding={0} margin={0}>
              <img src='https://c.stocksy.com/a/am2400/z9/964012.jpg' style={{
                width: '100%',
                height: '8rem',
                objectFit: 'cover',
                borderRadius: '10px',
                margin: '0',
                filter:'brightness(80%)',
                background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,2) 70%)', 
              }} /><div className='bottom-left'>Book with flexibility</div>
              
            </CardBody>
          </Card>

          <Card className='three_card' width={'26rem'}>
            <CardBody padding={0} margin={0}>
              <img src='https://blog.evolv.ai/hubfs/211014-blog-friction-social.jpg' style={{
                width: '100%',
                height: '8rem',
                objectFit: 'cover',
                borderRadius: '10px',
                filter:'brightness(80%)',
                background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,2) 70%)', 
              }} /><div className='bottom-left'>We've got your back</div>
            </CardBody>
          </Card>

        </SimpleGrid>

        <div className='view_details'>
          <img src='https://img.freepik.com/free-photo/umbrella-chair-around-swimming-pool_74190-2157.jpg?size=626&ext=jpg&ga=GA1.1.39043540.1693853883&semt=ais_user' style={{ filter: 'brightness(50%)' }} />
          <div className='textInside'>
            <h2 >All-inclusive resorts</h2>
            <p>Think of nothing beyond having a great time with your family</p>
            <button onClick={detail}
              style={{
                backgroundColor: 'white',
                color: '#0d5ab9',
                position: 'absolute',
                bottom: '10%',
                left: '10%',
                borderRadius: '20px',
                height: '3%',
                width: '8%',
              }}>
              view details
            </button>
          </div>
        </div>


      </div>
    </>
  );
}

export default Home;