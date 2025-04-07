// src/index.ts
import { Hono } from 'hono';

interface Env {}

const app = new Hono<{ Bindings: Env }>();

app.get('/geolocation', (c) => {
  const geo = c.req.cf;

  if (!geo) {
    return c.html('<p>Geolocation data is not available.</p>', 500);
  }

  let html_content = '<h1>Geolocation Data</h1>';
  html_content += '<p>Colo: ' + geo.colo + '</p>';
  html_content += '<p>Country: ' + geo.country + '</p>';
  html_content += '<p>City: ' + geo.city + '</p>';
  html_content += '<p>Continent: ' + geo.continent + '</p>';
  html_content += '<p>Latitude: ' + geo.latitude + '</p>';
  html_content += '<p>Longitude: ' + geo.longitude + '</p>';
  html_content += '<p>PostalCode: ' + geo.postalCode + '</p>';
  html_content += '<p>MetroCode: ' + geo.metroCode + '</p>';
  html_content += '<p>Region: ' + geo.region + '</p>';
  html_content += '<p>RegionCode: ' + geo.regionCode + '</p>';
  html_content += '<p>Timezone: ' + geo.timezone + '</p>';

  return c.html(html_content);
});

export default app;
