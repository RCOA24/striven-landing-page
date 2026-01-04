import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Striven Payment Server is running');
});

app.post('/create-paymongo-source', async (req, res) => {
  try {
    const { amount, type } = req.body;

    if (!amount || !type) {
      return res.status(400).json({ error: 'Amount and type are required' });
    }

    const secretKey = process.env.PAYMONGO_SECRET_KEY;
    if (!secretKey) {
      return res.status(500).json({ error: 'Server configuration error: Missing Secret Key' });
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
            amount: amount, // Amount in centavos
            type: type, // 'paymaya' or 'gcash'
            currency: 'PHP',
            redirect: {
              success: 'http://localhost:5173/success', // Replace with your actual success URL
              failed: 'http://localhost:5173/failed',   // Replace with your actual failed URL
            },
          },
        },
      }),
    };

    const response = await fetch('https://api.paymongo.com/v1/sources', options);
    const data = await response.json();

    if (data.errors) {
      console.error('PayMongo API Error:', data.errors);
      return res.status(400).json({ error: data.errors });
    }

    const checkoutUrl = data.data.attributes.redirect.checkout_url;
    res.json({ checkout_url: checkoutUrl });

  } catch (error) {
    console.error('Server Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
