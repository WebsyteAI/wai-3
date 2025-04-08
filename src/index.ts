import { Hono } from 'hono';
import { cors } from 'hono/cors';

const app = new Hono();

// Enable CORS middleware
app.use('*', cors());

// Define a GET endpoint for the webhook
app.get('/webhook', async (c) => {
  return c.json({
    message: 'Webhook received!',
    exampleData: {
      id: 123,
      status: 'success',
      timestamp: new Date().toISOString(),
    },
  });
});

// Define a POST endpoint that returns "testing"
app.post('/test', async (c) => {
  return c.text('testing');
});

// Add additional test endpoints
app.get('/test/one', async (c) => {
  return c.json({
    message: 'This is test endpoint one.',
    data: { value: 1 },
  });
});

app.get('/test/two', async (c) => {
  return c.json({
    message: 'This is test endpoint two.',
    data: { value: 2 },
  });
});

// Catch-all endpoint to test if requests are being received
app.all('*', async (c) => {
  return c.json({
    message: 'Catch-all endpoint hit!',
    method: c.req.method,
    path: c.req.path,
    timestamp: new Date().toISOString(),
  });
});

export default app;