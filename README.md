<div align="center">
  <div>
    <img src="https://img.shields.io/badge/-Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white"/>
    <img src="https://img.shields.io/badge/-Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/>
    <img src="https://img.shields.io/badge/-Express.js-000000?style=for-the-badge&logo=express&logoColor=white"/>
    <img src="https://img.shields.io/badge/-Neon%20Postgres-2496ED?style=for-the-badge&logo=postgresql&logoColor=white"/>
    <img src="https://img.shields.io/badge/-Drizzle%20ORM-FFDF00?style=for-the-badge&logo=drizzle&logoColor=black"/>
  </div>
</div>

# 🚀 DevOps Acquisitions — Scalable Production Ready API

A comprehensive backend application built to demonstrate taking an API from code to production with Docker, Kubernetes, Node.js, Express.js, Neon Postgres, and Drizzle ORM.

---

## 📋 Table of Contents

- [📖 About The Project](#-about-the-project)
- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [🏗️ Project Structure](#️-project-structure)
- [🚀 Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [🤝 Contributing](#-contributing)

---

## 📖 About The Project

Master DevOps by taking an API from code to production with Docker, Kubernetes, Git & GitHub, Warp, and CI/CD Actions! Build a scalable backend using Node.js, Express.js, Neon Postgres, and Drizzle ORM, while testing ensures reliability at every step. Learn to containerize services, orchestrate deployments, automate pipelines, and monitor applications—perfect for developers who want hands-on experience shipping robust, production-ready systems.

---

## ✨ Features

- 📁 **Absolute Imports**: Clean import paths using `#` prefix aliases for more organized and readable code.
- 🏢 **Business Listings**: Create, update, delete, and browse business listings efficiently.
- 🗄️ **Database Integration**: Integrate PostgreSQL with Drizzle ORM, including migrations for schema management.
- 🤝 **Deal Management**: Create deals on listings, accept or reject offers, and track deal status.
- 🐳 **Docker Support**: Full containerization with development and production environments for consistent deployment.
- 🧹 **ESLint + Prettier**: Enforce code linting and formatting rules for cleaner, consistent code.
- 🏥 **Health Monitoring**: Endpoint to check system health and monitor overall application status.
- 🔥 **Hot Reload**: Development server automatically restarts on file changes for faster iteration.
- 🧪 **Jest Testing**: Framework for unit and integration testing with SuperTest for HTTP endpoints.
- ✅ **Request Validation**: Validate all API inputs using Zod schemas to ensure data integrity.
- 🔐 **Role-Based Access Control**: Implement admin and user roles with permission middleware for secure operations.
- 📝 **Structured Logging**: Winston-based logging throughout the application for better monitoring and debugging.
- 🔑 **User Authentication & Authorization**: JWT-based authentication supporting signup, signin, and signout workflows.
- 👤 **User Management**: CRUD operations for user accounts, enabling easy administration and management.

---

## 🛠️ Tech Stack

| Category          | Technology    | Purpose                                                               |
| :---------------- | :------------ | :-------------------------------------------------------------------- |
| **Runtime**       | Node.js       | Fast, event-driven JavaScript runtime                                 |
| **Framework**     | Express.js    | Minimal and flexible web application framework                        |
| **Database**      | Neon Postgres | Fully managed, serverless Postgres database                           |
| **ORM**           | Drizzle ORM   | TypeScript-first, lightweight ORM for SQL databases                   |
| **Containers**    | Docker        | Containerization platform for consistent behavior across environments |
| **Orchestration** | Kubernetes    | Automate deployment, scaling, and management of containerized apps    |
| **Security**      | Arcjet        | Developer-first security layer (bot protection, rate limiting, etc.)  |
| **Validation**    | Zod           | TypeScript-first schema validation library                            |
| **Terminal**      | Warp          | Modern terminal built in Rust optimized for developer productivity    |

---

## 🏗️ Project Structure

```
devops-acquisitions/
│
├── 📁 .github/                       # GitHub Actions workflows for CI/CD
├── 📁 .vscode/                       # VS Code workspace settings
├── 📁 drizzle/                       # Database migrations
├── 📁 scripts/                       # Utility scripts
├── 📁 src/                           # Application source code
│   ├── 📁 controllers/               # Route controllers
│   ├── 📁 middlewares/               # Express middlewares
│   ├── 📁 models/                    # Database models and schemas
│   ├── 📁 routes/                    # API route definitions
│   ├── 📁 services/                  # Business logic and services
│   └── index.js                      # Application entry point
├── 📁 tests/                         # Jest test suites
├── .env.example                      # Environment variables template
├── docker-compose.dev.yml            # Docker Compose configuration for development
├── docker-compose.prod.yml           # Docker Compose configuration for production
├── Dockerfile                        # Docker image definition
└── package.json                      # Project metadata and dependencies
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js >= 18.0.0
- npm >= 9.0.0
- Git
- Docker & Docker Compose (optional, for containerized execution)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Itssanthoshhere/devops-acquisitions.git
   cd devops-acquisitions
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure environment variables**
   Create a new file named `.env` in the root of your project and add the following content:

   ```env
   # Server Configuration
   PORT=3000
   NODE_ENV=development
   LOG_LEVEL=info

   # Database Configuration
   DATABASE_URL=

   # Arcjet
   ARCJET_KEY=
   ```

   Replace the placeholder values with your real credentials.

4. **Start the development server**

   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
