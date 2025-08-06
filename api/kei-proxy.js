// api/kei-proxy.js
export default async function handler(req, res) {
  // Enable CORS for all origins
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // Handle preflight OPTIONS requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const { method, url, body: requestBody, authToken } = req.body;

    // Validate required fields
    if (!authToken) {
      res.status(400).json({ error: 'Auth token required' });
      return;
    }

    if (!url) {
      res.status(400).json({ error: 'URL required' });
      return;
    }

    // Log the request for debugging
    console.log(`Proxying ${method || 'GET'} request to: ${url}`);
    console.log(`Auth token length: ${authToken.length}`);
    console.log(`Request body:`, requestBody ? JSON.stringify(requestBody).substring(0, 200) : 'None');

    // Make the actual API call to KEI.ai
    const response = await fetch(url, {
      method: method || 'GET',
      headers: {
        'Authorization': `Bearer ${authToken}`,
        'Content-Type': 'application/json',
        'User-Agent': 'KEI-Generator-Proxy/1.0'
      },
      body: requestBody ? JSON.stringify(requestBody) : undefined
    });

    // Get response data
    const data = await response.json();

    // Log response status
    console.log(`Response status: ${response.status}`);
    console.log(`Response data:`, JSON.stringify(data).substring(0, 200));

    // Return the response with the same status code
    res.status(response.status).json(data);

  } catch (error) {
    console.error('Proxy error:', error);
    res.status(500).json({ 
      error: 'Proxy request failed', 
      details: error.message,
      timestamp: new Date().toISOString()
    });
  }
}