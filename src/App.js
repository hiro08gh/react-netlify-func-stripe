import React from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';

const App: React.FC = () => {
  return (
    <div className="App">
      <StripeProvider apiKey="pk_test_a6eCir8vmkwjqryD9znMe2Rq">
        <Elements>
            <CheckoutForm />
        </Elements>
      </StripeProvider>
    </div>
  );
}
export default App;
