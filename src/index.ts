// src/index.ts
import { Hono } from 'hono';

interface Env {}

const app = new Hono<{ Bindings: Env }>();

app.get('/geolocation', (c) => {
  const geo = c.req.cf;

  if (!geo) {
    return c.json(
      {
        error: 'Geolocation data is not available.',
      },
      500
    );
  }

  const geolocationData = {
    ip: c.req.headers.get('cf-connecting-ip') || 'Unknown',
    country: geo.country || 'Unknown',
    city: geo.city || 'Unknown',
    latitude: geo.latitude || 'Unknown',
    longitude: geo.longitude || 'Unknown',
    timezone: geo.timezone || 'Unknown',
    region: geo.region || 'Unknown',
    postalCode: geo.postalCode || 'Unknown',
  };

  return c.json(geolocationData);
});

export default app;
