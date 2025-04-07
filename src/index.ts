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

// Define a GET endpoint that returns test data
app.get('/test', async (c) => {
  return c.json({
    message: 'Test data retrieved successfully!',
    testData: {
      name: 'Example',
      value: 42,
      active: true,
    },
  });
});

export default app;