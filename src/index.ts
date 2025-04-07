// src/index.ts
import { Hono } from 'hono';

interface Env {}

const app = new Hono<{ Bindings: Env }>();

app.get('/geolocation', (c) => {
  // Return the current request headers for debugging purposes
  return c.json(Object.fromEntries(c.req.headers));
});

export default app;
