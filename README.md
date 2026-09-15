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
