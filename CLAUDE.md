# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Full-stack vacation rental website for "Siesta Key Gulf Front Escape" (2-bed/2-bath Sarasota, FL condo). React frontend + FastAPI backend + MongoDB.

## Commands

### Frontend (`frontend/`)
```bash
yarn start          # Dev server at http://localhost:3000
yarn build          # Production build to build/
yarn test           # Run tests
```

### Backend (`backend/`)
```bash
pip install -r requirements.txt
uvicorn server:app --reload   # Dev server at http://localhost:8000
pytest                         # Run tests
black . && isort .             # Format code
flake8                         # Lint
mypy .                         # Type check
```

## Architecture

### Frontend
Single-page app using smooth-scroll navigation (no client-side routing). `App.js` composes all sections in order. The page flow is: Header → Hero → PropertyDetails → PhotoGallery → Amenities → AvailabilityCalendar → PricingSection → Testimonials → LocationInfo → ContactForm → Footer.

**Mock data** (`src/mock.js`) is the single source of truth for all property content: pricing by season, amenities, booked dates, contact info. This is where you update property details.

**Styling** uses Tailwind CSS v3 with CSS custom property design tokens defined in `src/index.css`. Colors reference variables like `--primary`, `--background`, etc. — both light and dark mode variants are defined there. The shadcn/ui component library ("new-york" style) lives in `src/components/ui/`.

**Path alias**: `@/` maps to `src/` (configured in `jsconfig.json` and `craco.config.js`).

### Backend
`backend/server.py` is the entire backend. FastAPI app with MongoDB via Motor (async). All routes are prefixed with `/api`. Currently has only health check and status check endpoints — the contact form is not yet wired to the backend (it shows a local toast on submit).

**Required env vars** in `backend/.env`:
- `MONGO_URL` — MongoDB connection string
- `DB_NAME` — database name
- `CORS_ORIGINS` — comma-separated allowed origins (default: `*`)

### Key Relationships
- `ContactForm.jsx` currently submits locally (no backend call) — backend integration is pending
- `AvailabilityCalendar.jsx` reads booked dates from `mock.js` — not yet fetched from backend
- `craco.config.js` wraps Create React App with webpack alias support and optional Emergent visual-edits integration
