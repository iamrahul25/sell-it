# Sell It

Minimal setup: Next.js (TypeScript) frontend + Express backend.

## Setup

```bash
cd backend && npm install
cd ../frontend && npm install
```

## Environment

Each app has its own `.env`:

**backend/.env**
```env
BACKEND_PORT=5000
```

**frontend/.env**
```env
FRONTEND_PORT=3000
NEXT_PUBLIC_API_URL=http://localhost:5000
```

## Run

Start backend:

```bash
cd backend
npm run dev
```

Start frontend (new terminal):

```bash
cd frontend
npm run dev
```

- Frontend: http://localhost:3000
- Backend: http://localhost:5000

## Frontend structure

```
frontend/
  app/            # routes, layout, global styles
  components/     # home page sections
  data/           # dummy JSON data (stands in for MongoDB)
  lib/data.ts     # loads the JSON and formats price / posted time
```

### Dummy data

`data/products.json` and `data/categories.json` mimic MongoDB collections
(`_id`, nested `location` / `seller`, `createdAt`). The home page reads them
through `lib/data.ts`, so swapping to a real API later only means changing that
one file.
