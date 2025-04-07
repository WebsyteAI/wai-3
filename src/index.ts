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

// Serve a simple UI on the root route
app.get('/', (c) => {
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Test Webhook</title>
    </head>
    <body>
      <h1>Test Webhook Endpoint</h1>
      <button id="testButton">Test Webhook</button>
      <p id="response"></p>
      <script>
        document.getElementById('testButton').addEventListener('click', async () => {
          const responseElement = document.getElementById('response');
          responseElement.textContent = 'Testing...';
          try {
            const response = await fetch('/webhook', { method: 'POST' });
            const data = await response.json();
            responseElement.textContent = JSON.stringify(data, null, 2);
          } catch (error) {
            responseElement.textContent = 'Error: ' + error.message;
          }
        });
      </script>
    </body>
    </html>
  `;
  return c.html(html);
});

export default app;