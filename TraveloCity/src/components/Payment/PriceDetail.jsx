import { Box, Divider, Text, Flex } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

const PriceDetail = ({ price }) => {
  const paymentAmount = useSelector((state) => state.paymentAmount);

  let { type, tax, Price } = JSON.parse(localStorage.getItem('PriceDetails'));

  return (
    <Box
      bg="white"
      w="50%"
      m="40px auto"
      p="15px"
      h="fit-content"
    >
      <Text fontSize="1.4rem" fontWeight="700" color="#1f1e1e">
        Price Details
      </Text>
      <Divider />
      {type === 'car' ? (
        <Flex justify="space-between" mb="10px">
          <Text>Booked Price</Text>
          <Text>${Price}</Text>
        </Flex>
      ) : (
        <Flex justify="space-between" mb="10px">
          <Text>1 room x 1 night</Text>
          <Text>${Price}</Text>
        </Flex>
      )}
      <Box
        w="40%"
        p="3px 8px"
        borderRadius="10px"
        bg="green"
        color="white"
        textAlign="center"
      >
        You saved 10%
      </Box>
      <Flex justify="space-between" mb="10px">
        <Text>Taxes and fees</Text>
        <Text>${tax}</Text>
      </Flex>
      <Divider />
      <Flex justify="space-between" mb="10px" fontWeight="700" fontSize="1.2rem">
        <Text>Total</Text>
        <Text>${Price + tax}</Text>
      </Flex>
      <Text fontSize="0.8rem" color="blue">
        Use a coupon, credit, or promotion code
      </Text>
    </Box>
  );
};

export default PriceDetail;