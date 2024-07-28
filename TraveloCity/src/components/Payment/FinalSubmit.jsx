import { Box, Button, Icon, Text, VStack } from '@chakra-ui/react';
import { CheckIcon, LockIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

const Wrapper = Box`
  background: white;
  width: 75%;
  margin: 40px auto;
  padding: 15px;
  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const FinalSubmit = () => {
  const navigate = useNavigate();

  const successPayment = () => {
    swal({
      title: "Are you sure?",
      icon: "info",
      buttons: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("order_id #57RYE556AB7568", {
          icon: "success",
          button: false,
          title: "Your booking has been successful!",
          timer: 3000,
        });
        setTimeout(() => {
          navigate('/')
        }, 3200)
      } else {
        swal("Your payment has been cancelled!", {
          icon: "error",
          button: false,
          timer: 1500,
        });
      }
    })
  }

  return (
    <Wrapper>
      <Text fontSize="lg" fontWeight="bold">Important information about your booking</Text>
      <VStack spacing={4} alignItems="flex-start">
        <Text fontSize="sm">
          Cancellations or changes made after 6:00pm (property local time) on
          Sep 9, 2021 or no-shows are subject to a property fee equal to 100% of
          the total amount paid for the reservation.
        </Text>
        <Text fontSize="sm">
          To make arrangements for check-in please contact the property at least
          24 hours before arrival using the information on the booking
          confirmation. Guests must contact the property in advance for check-in
          instructions. Front desk staff will greet guests on arrival.
        </Text>
      </VStack>
      <Text fontSize="sm">
        By clicking on the button below, I acknowledge that I have reviewed the
        Privacy Statement Opens in a new window. and Government Travel Advice
        Opens in a new window. and have reviewed and accept the Rules &
        Restrictions Opens in a new window. and Terms of Use Opens in a new
        window..
      </Text>

      <VStack spacing={2} alignItems="flex-start">
        <Box display="flex" alignItems="center">
          <Icon as={CheckIcon} color="green.500" />
          <Text fontSize="sm" color="green.500">Change of plans? No problem. You can cancel for free</Text>
        </Box>
        <Button colorScheme="green" onClick={successPayment}>Complete Booking</Button>
        <Box display="flex" alignItems="center">
          <Icon as={LockIcon} color="gray.500" />
          <Text fontSize="sm" color="gray.500">
            We use secure transmission and encrypted storage to protect your
            personal information.
          </Text>
        </Box>
        <Text fontSize="sm" color="gray.500">
          This payment will be processed in the U.S. This does not apply when the
          travel provider (airline/hotel/rail, etc.) processes your payment.
        </Text>
      </VStack>
    </Wrapper>
  );
};
