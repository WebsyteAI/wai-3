import { Hono } from 'hono';
import { cors } from 'hono/cors';

const app = new Hono();

// Enable CORS middleware
app.use('*', cors());

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

// Define a GET endpoint that returns "testing"
app.get('/test', async (c) => {
  return c.text('testing');
});

export default app;