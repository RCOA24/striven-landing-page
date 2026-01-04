import { Buffer } from 'buffer';

export const handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { amount, type } = JSON.parse(event.body);

    if (!amount || !type) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Amount and type are required' }) };
    }

    const secretKey = process.env.PAYMONGO_SECRET_KEY;
    if (!secretKey) {
      return { statusCode: 500, body: JSON.stringify({ error: 'Server configuration error: Missing Secret Key' }) };
    }

    const encodedKey = Buffer.from(secretKey).toString('base64');

    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        authorization: `Basic ${encodedKey}`,
      },
      body: JSON.stringify({
        data: {
          attributes: {
            amount: amount,
            type: type,
            currency: 'PHP',
            redirect: {
              success: process.env.URL + '/success', // Netlify provides the site URL
              failed: process.env.URL + '/failed',
            },
          },
        },
      }),
    };

    const response = await fetch('https://api.paymongo.com/v1/sources', options);
    const data = await response.json();

    if (data.errors) {
      console.error('PayMongo API Error:', data.errors);
      return { statusCode: 400, body: JSON.stringify({ error: data.errors }) };
    }

    const checkoutUrl = data.data.attributes.redirect.checkout_url;
    return {
      statusCode: 200,
      body: JSON.stringify({ checkout_url: checkoutUrl }),
    };

  } catch (error) {
    console.error('Server Error:', error);
    return { statusCode: 500, body: JSON.stringify({ error: 'Internal Server Error' }) };
  }
};
