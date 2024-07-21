import { Box, Button, Flex, Icon, List, ListItem, Text } from '@chakra-ui/react';
import { CheckIcon, LockIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert';

const Wrapper = Box`
  background: white;
  width: 75%;
  margin: 40px auto;
  padding: 15px;
`;

export const FinalSubmit = () => {
  const navigate = useNavigate();

  const successPayment = () => {
    Swal.fire({
      title: 'Are you sure?',
      icon: 'info',
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('order_id #57RYE556AB7568', 'Your booking has been successful!', 'success');
        setTimeout(() => {
          navigate('/');
        }, 3200);
      } else {
        Swal.fire('Your payment has been cancelled!', '', 'error');
      }
    });
  };

  return (
    <Wrapper>
      <Text fontSize="lg" fontWeight="bold">
        Important information about your booking
      </Text>
      <List fontSize="sm" mb={4}>
        <ListItem>
          Cancellations or changes made after 6:00pm (property local time) on Sep 9, 2021 or
          no-shows are subject to a property fee equal to 100% of the total amount paid for
          the reservation.
        </ListItem>
        <ListItem>
          To make arrangements for check-in please contact the property at least 24 hours before
          arrival using the information on the booking confirmation. Guests must contact the
          property in advance for check-in instructions. Front desk staff will greet guests on
          arrival.
        </ListItem>
      </List>
      <Text fontSize="sm">
        By clicking on the button below, I acknowledge that I have reviewed the Privacy Statement
        Opens in a new window. and Government Travel Advice Opens in a new window. and have
        reviewed and accept the Rules & Restrictions Opens in a new window. and Terms of Use
        Opens in a new window..
      </Text>

      <Flex alignItems="center" color="green" fontSize="sm">
        <Icon as={CheckIcon} />
        <Text>Change of plans? No problem. You can cancel for free</Text>
      </Flex>

      <Button
        backgroundColor="green"
        color="white"
        _hover={{ color: 'black' }}
        onClick={successPayment}
      >
        Complete Booking
      </Button>

      <Flex alignItems="center" color="gray" fontSize="sm">
        <Icon as={LockIcon} />
        <Text>We use secure transmission and encrypted storage to protect your personal information.</Text>
      </Flex>

      <Text fontSize="sm" color="gray">
        This payment will be processed in the U.S. This does not apply when the travel provider
        (airline/hotel/rail, etc.) processes your payment.
      </Text>
    </Wrapper>
  );
};

export default FinalSubmit;