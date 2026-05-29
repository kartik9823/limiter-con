# 🚦 Scalable API Rate Limiter

A production-inspired API Rate Limiter built using **Node.js**, **Express.js**, and **Redis** to deeply understand backend engineering, distributed systems, middleware architecture, and scalability concepts.

This project is not just about limiting requests.  
It is about learning **how real backend systems are designed, scaled, and optimized in production environments**.

---

## 📌 Project Objective

The goal of this project is to move beyond tutorial-level backend development and understand:

- How middleware actually works
- Request lifecycle in Express
- Fixed Window Rate Limiting
- Why in-memory storage fails at scale
- Distributed system challenges
- Redis fundamentals and atomic operations
- Scalability tradeoffs
- Production-level backend thinking

---

# 🧠 What I'd Learn

## Phase 1 — Backend Foundations
- HTTP Request-Response lifecycle
- Express middleware architecture
- Rate limiting fundamentals
- Fixed Window Algorithm
- IP-based request tracking
- In-memory rate limiter using `Map`

## Phase 2 — Why Simple Systems Fail
- Burst traffic problem
- Memory growth issues
- Multi-server inconsistency
- Race conditions
- Horizontal scaling limitations
- Server restart problems

## Phase 3 — Redis Deep Dive
- What Redis actually is
- In-memory datastore concepts
- Key-value architecture
- TTL (Time To Live)
- Atomic operations
- Why Redis is ideal for rate limiting

## Phase 4 — Redis Integration
- Redis setup and connection
- Replacing Map with Redis
- `INCR` and `EXPIRE`
- Shared state across servers
- Graceful error handling

## Phase 5 — Production Enhancements
- Sliding Window Algorithm
- Token Bucket Algorithm
- Retry headers
- API key based limiting
- Monitoring and analytics
- DDOS considerations

## Phase 6 — Resume-Level Engineering
- Dockerization
- Deployment
- Stress testing
- Unit & Integration testing
- Metrics dashboard
- Production architecture thinking

---

# 🏗️ Tech Stack

## Backend
- Node.js
- Express.js

## Datastore
- Redis

## Optional Additions
- MongoDB (analytics/logging)
- Docker
- Prometheus/Grafana

---

# 📂 Project Structure

```bash
rate-limiter/
│
├── src/
│   ├── middleware/
│   │   └── rateLimiter.js
│   │
│   ├── config/
│   │   └── redisClient.js
│   │
│   ├── routes/
│   │   └── testRoutes.js
│   │
│   ├── utils/
│   │   └── helperFunctions.js
│   │
│   └── server.js
│
├── package.json
├── .env
├── .gitignore
└── README.md

Client Request
      ↓
Express Middleware
      ↓
Identify User/IP
      ↓
Check Request Count
      ↓
Allowed ? → Continue
Blocked ? → Return 429
