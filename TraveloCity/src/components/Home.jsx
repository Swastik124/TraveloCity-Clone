import Carousel from 'better-react-carousel'
import { useState, useEffect } from 'react';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
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

  return (
   <>
   <h2 style={{padding:'1rem',fontFamily:'sans-serif'}}>Explore stays in trending destinations</h2>
    <Carousel responsive={responsive} cols={3} rows={1} gap={10} loop>
      {hotels.map((hotel) => (
        <Carousel.Item key={hotel.id}>
          
          <div className="hotel-card" style={{
            height: '15rem',
            objectFit: 'cover',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '0.2rem'
          }}>
            <img src={hotel.image} alt={hotel.name} style={{
              width: '100%',
              height: '10rem',
              objectFit: 'cover',
              borderRadius: '10px'
            }} />
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              margin: '0.5rem 0'
            }}>{hotel.name}</h2>
            <p style={{
              fontSize: '1rem',
              margin: '0.5rem 0'
            }}>{hotel.description}</p>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
    </>
  );
}

export default Home;