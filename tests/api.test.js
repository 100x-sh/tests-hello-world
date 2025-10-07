const axios = require('axios');
const http = require('http');

const API_URL = 'http://localhost:3000';

// Create axios instance with keepAlive disabled to prevent open handle warnings
const client = axios.create({
  httpAgent: new http.Agent({ keepAlive: false }),
  timeout: 5000
});

describe('Hello World API', () => {
  test('GET /hello - should return "Hello World"', async () => {
    const response = await client.get(`${API_URL}/hello`);

    expect(response.status).toBe(200);
    expect(response.data).toBe('Hello World');
  });

  test('GET /hello/jeroen - should return "Hello jeroen"', async () => {
    const response = await client.get(`${API_URL}/hello/jeroen`);

    expect(response.status).toBe(200);
    expect(response.data).toBe('Hello jeroen');
  });

  test('GET /hello/alice - should return "Hello alice"', async () => {
    const response = await client.get(`${API_URL}/hello/alice`);

    expect(response.status).toBe(200);
    expect(response.data).toBe('Hello alice');
  });

  test('GET /hello/123 - should return "Hello 123"', async () => {
    const response = await client.get(`${API_URL}/hello/123`);

    expect(response.status).toBe(200);
    expect(response.data).toBe('Hello 123');
  });
});
