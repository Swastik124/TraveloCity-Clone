import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';
import { FinalSubmit } from './components/Payment/FinalSubmit';
import { Payment } from './components/Payment/Payment';
import {PriceDetail} from './components/Payment/PriceDetail';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
      <FinalSubmit/>
      <Payment/>
      <PaymentForm/>
      <PriceDetail/>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);