import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { showRoutes } from 'hono/debug';

const app = new Hono();

// Enable CORS middleware
app.use('*', cors());

// Replace POST /webhook with GET /webhook
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

// Define a GET endpoint that returns "testing"
app.get('/test', async (c) => {
  return c.text('testing');
});

// Debugging: Show all registered routes
showRoutes(app);

export default app;