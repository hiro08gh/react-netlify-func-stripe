import React, {useState} from 'react';
import axios from 'axios';
import {CardElement, injectStripe} from 'react-stripe-elements';

const IS_PROD = process.env.NODE_ENV === 'production';

const ENDPOINT = IS_PROD ? 'netlify_url' : 'http://localhost:9000/charge';

const CheckoutForm = (props) => {
  const [amount, setAmount] = useState(2000);

  const handleSubmit = async (e) => {
    try {
      const {token} = await props.stripe.createToken({name: 'Name'});

      const res = await axios.post(
        ENDPOINT,
        {
          amount: amount,
          body: token.id,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      if (res) {
        console.log('ok');
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      チェックアウト
      <CardElement />
      <button onClick={handleSubmit}>チェックアウト</button>
    </div>
  );
};

export default injectStripe(CheckoutForm);
