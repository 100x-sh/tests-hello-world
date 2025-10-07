# Build a Hello World API

Create a simple REST API with these endpoints:
- GET /hello - Returns "Hello World"
- GET /hello/:name - Returns "Hello {name}" (e.g., /hello/joe returns "Hello joe")

Requirements:
- Use Express.js framework
- Start server on port 3000
- Return plain text responses
- **IMPORTANT**: Create a `package.json` with all dependencies (express, etc.)
- **IMPORTANT**: Include a start script in package.json: `"start": "node <your-entrypoint-file>"`
- The server must be startable via `npm install && npm start`
