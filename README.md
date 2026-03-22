# Node.js Mini Framework

A lightweight, reusable REST API framework built with pure Node.js and TypeScript. No external dependencies — only built-in Node.js modules.

## Motivation

Most Node.js frameworks like Express abstract away too much. This project was built to understand how HTTP frameworks work under the hood and to provide a minimal, reusable foundation for any REST API project.

## Features

- Route registration by HTTP method — GET, POST, PUT, PATCH, DELETE
- Dynamic route parameters — `/users/:id`
- Middleware chain — executed sequentially before the route handler
- Request body parsing — JSON
- Query parameter parsing — `?lang=ru`
- Convenient response methods — `json()`, `send()`, `status()`
- Request logging
- Centralized error handling

## Tech Stack

- Node.js — built-in modules only (`node:http`, `node:url`)
- TypeScript

## Project Structure

```
src/
  core/
    Request.ts       — wrapper over IncomingMessage
    Response.ts      — wrapper over ServerResponse
    Middleware.ts    — middleware type definition
    Router.ts        — route storage and matching
    Application.ts   — main class
  middlewares/
    logger.ts        — request logging
    json.ts          — body parsing
  routes/
    index.ts         — application routes
  server.ts          — entry point
```

## Usage

```ts
const app = new Application();

app.use(logger());
app.use(json());

app.get('/users', (req, res) => {
  res.json({ users: [] });
});

app.post('/users', (req, res) => {
  res.status(201).json({ created: true });
});

app.delete('/users/:id', (req, res) => {
  res.status(204).send('');
});

app.listen(3000);
```

## Getting Started

```bash
npm install
npm run dev
```