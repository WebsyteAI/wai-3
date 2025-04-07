// src/index.ts
import { Hono } from 'hono';

interface Env {}

const app = new Hono<{ Bindings: Env }>();

app.get('/geolocation', (c) => {
  // Return the raw request object for debugging purposes
  return c.json(c.req.raw);
});

export default app;
