// server.js

const express = require('express');
const stripe = require('stripe')('sk_test_51OTKY8SBqLM2lXWedpJyF0rSYXo3yqopR8R32Hnm7B7O5PSQ7A8Sejb633adk8YLH5rbCcjhqu7yfp0EbgPo6v1800DHXUt1Fp'); // Replace 'your-secret-key' with your actual secret key

const app = express();
const port = 3001;

app.use(express.json());

// Create a checkout session
app.post('/api/create-checkout-session', async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: req.body.items,
      mode: 'payment',
      success_url: 'http://localhost:3000/success', // Replace with your success URL
      cancel_url: 'http://localhost:3000/cancel', // Replace with your cancel URL
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
