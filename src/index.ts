import { Hono } from 'hono';

const app = new Hono();

// Define a POST endpoint for the webhook
app.post('/webhook', async (c) => {
  return c.json({
    message: 'Webhook received!',
    exampleData: {
      id: 123,
      status: 'success',
      timestamp: new Date().toISOString(),
    },
  });
});

export default app;