// src/index.ts
import { Hono } from 'hono';

interface Env {}

const app = new Hono<{ Bindings: Env }>();

app.get('/geolocation', (c) => {
  // Return the entire request object as JSON for debugging purposes
  return c.json(c.req);
});

export default app;
