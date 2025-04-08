export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);

    // Enable CORS
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders });
    }

    // Route handling
    if (url.pathname === '/webhook' && request.method === 'GET') {
      return new Response(
        JSON.stringify({
          message: 'Webhook received!',
          exampleData: {
            id: 123,
            status: 'success',
            timestamp: new Date().toISOString(),
          },
        }),
        { status: 200, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
      );
    }

    if (url.pathname === '/test' && request.method === 'PUT') {
      return new Response('testing', { status: 200, headers: corsHeaders });
    }

    if (url.pathname === '/test/one' && request.method === 'GET') {
      return new Response(
        JSON.stringify({
          message: 'This is test endpoint one.',
          data: { value: 1 },
        }),
        { status: 200, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
      );
    }

    if (url.pathname === '/test/two' && request.method === 'GET') {
      return new Response(
        JSON.stringify({
          message: 'This is test endpoint two.',
          data: { value: 2 },
        }),
        { status: 200, headers: { 'Content-Type': 'application/json', ...corsHeaders } }
      );
    }

    // Default 404 response
    return new Response('Not Found', { status: 404, headers: corsHeaders });
  },
};