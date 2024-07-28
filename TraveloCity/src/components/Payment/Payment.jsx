import { Box, Flex } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { FinalSubmit } from "./FinalSubmit";
import { PaymentForm } from "./PaymentForm";
import { PriceDetail } from "./PriceDetail";

const Wrapper = Flex`
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Payment = () => {
    const { paymentAmount } = useSelector(state => state)

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <Wrapper>
            <Box>
                <PaymentForm />
                <FinalSubmit />
            </Box>

            <PriceDetail price={paymentAmount} />
        </Wrapper>
    );
};
