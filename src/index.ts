import { Hono } from 'hono';

const app = new Hono();

app.get('/geolocation', async (c) => {
  const ip = c.req.header('CF-Connecting-IP') || c.req.header('X-Forwarded-For') || 'Unknown';
  const geo = c.req.header('CF-IPCountry') || 'Unknown';

  return c.json({
    ip,
    country: geo,
  });
});

export default app;