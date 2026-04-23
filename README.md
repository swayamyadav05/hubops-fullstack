# HubOps Full Stack Assignment

## Setup

1. Clone the repository.
2. Install dependencies:

```bash
npm install
```

3. Copy environment variables:

```bash
cp .env.example .env.local
```

4. Start the development server:

```bash
npm run dev
```

## Live URL

https://hubops-fullstack.vercel.app

## Tech Decisions

### Why Next.js API Routes instead of a separate Express backend

Using Next.js API Routes keeps frontend and backend in a single codebase and deployment unit. This reduces operational overhead, avoids duplicate project scaffolding, and removes cross-origin setup complexity because API and UI share the same origin. It fully satisfies the backend requirement while keeping delivery simple and maintainable.

### Why SSG over SSR for /services

The services data is not user-specific and does not require per-request real-time rendering. Static Site Generation prebuilds the page at deploy time and serves it from CDN edge locations for consistently fast response times and strong SEO. SSR would add server compute and latency on every request without a product benefit for this page.

### Why Tailwind CSS v4

Tailwind CSS v4 provides CSS-first configuration with minimal setup and no required Tailwind config file for this scope. It helps keep styling co-located, reduces custom CSS overhead, and supports smaller output with a faster iteration loop.

## Component Structure

ServiceCard is a single, purely presentational unit responsible for rendering one service item. ServiceGrid is a layout wrapper that receives the services array and maps items to ServiceCard components. This separation keeps components focused and easy to extend as requirements evolve.

## Data Fetching

The /services page is implemented as a Server Component and fetches data from the API route with an absolute URL. Absolute URLs are required during build-time rendering for SSG because there is no browser location context available at build execution time.

## SEO & Performance

- metadata exports provide unique title and description values per route.
- Semantic HTML structure (main and headings) improves crawler understanding.
- SSG returns pre-rendered HTML instead of a client-only shell, improving crawlability and first meaningful paint.
- loading.tsx provides an immediate skeleton state during route transition to reduce perceived jank.

## API Thinking

**How would you scale this API if traffic increases?**
Add a short-TTL cache layer using Redis or Vercel KV for read-heavy endpoints. Move from in-memory data to PostgreSQL with connection pooling as data volume and query complexity grow. For extreme traffic, extract the API into an independently scalable service behind CDN caching.

**What security concerns should be addressed in production?**
Apply per-IP rate limiting, enforce HTTPS, restrict CORS to known origins where needed, and validate all input/query parameters. If write operations are introduced, require authenticated requests with scoped authorization.

**How would you version this API?**
Adopt URL-based versioning, for example /api/v1/services. Introduce /api/v2/services for breaking changes, run both versions during a deprecation window, and communicate deprecation timelines with response headers and release notes.

## SEO & Performance (Written Questions)

**What makes your page SEO-friendly?**
Static generation delivers fully rendered HTML to crawlers, metadata is page-specific, semantic HTML improves structure, and CDN delivery helps keep load times fast.

**What could be improved if this went live?**
Add Open Graph and Twitter card metadata, provide robots.txt and sitemap.xml, include JSON-LD structured data for services, and use next/image for optimized image delivery where applicable.

**How would you measure performance?**
Use Vercel Analytics to monitor Core Web Vitals in production and add Lighthouse CI in GitHub Actions to detect regressions before deployment.

## Refactoring Scenario

**If a junior developer joins and this grows 3x in complexity, what would you refactor first?**
Refactor the data layer first. The current in-memory services source should be replaced with a repository abstraction such as services.repository.ts. Keeping API routes and page components dependent on repository interfaces makes storage migration to PostgreSQL or a CMS straightforward without UI or routing rewrites.

## Architecture Diagram

[Optional — add PNG if time permits]
