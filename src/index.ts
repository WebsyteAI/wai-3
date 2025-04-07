// src/index.ts
import { Hono } from 'hono';

interface Env {}

const app = new Hono<{ Bindings: Env }>();

// Health check endpoint
app.get('/health', (c) => {
  return c.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
  });
});

// Endpoint to receive webhooks
app.post('/webhook', async (c) => {
  try {
    const body = await c.req.json();

    return c.json({
      success: true,
      message: 'Webhook received successfully.',
      data: body,
    });
  } catch (error) {
    console.error('Error processing webhook:', error);
    return c.json({
      success: false,
      message: 'Failed to process webhook.',
    }, 500);
  }
});

export default app;
