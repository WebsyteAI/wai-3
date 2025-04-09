import { Hono } from 'hono';

const app = new Hono();

app.get('/geolocation', async (c) => {
  const cf = c.req.cf || {};

  return c.json({
    ip: c.req.header('CF-Connecting-IP') || c.req.header('X-Forwarded-For') || 'Unknown',
    colo: cf.colo || 'Unknown',
    country: cf.country || 'Unknown',
    city: cf.city || 'Unknown',
    continent: cf.continent || 'Unknown',
    latitude: cf.latitude || 'Unknown',
    longitude: cf.longitude || 'Unknown',
    postalCode: cf.postalCode || 'Unknown',
    metroCode: cf.metroCode || 'Unknown',
    region: cf.region || 'Unknown',
    regionCode: cf.regionCode || 'Unknown',
    timezone: cf.timezone || 'Unknown',
  });
});

export default app;