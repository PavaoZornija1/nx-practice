# nx-next-nest-prisma-ory-template

## Overview

This repository is a full-stack template: NX monorepo, NestJS API, two Next.js frontends (Site Manager + Dispatcher), and Prisma with PostgreSQL.

## Features

- **NX Workspace**: Monorepo with shared packages and tooling.
- **NestJS**: Backend API (Fastify).
- **Next.js**: Site Manager (port 3000) and Dispatcher (port 3001).
- **Prisma**: PostgreSQL ORM with generated DTOs and migrations.

## Getting Started

### Prerequisites

- Node.js (version 18)
- pnpm
- Docker

### Installation

1. **Clone the Template Repository**

   You can perform this step through the GitHub UI.

2. **Clone your Forked Repository**

   ```bash
   git clone https://github.com/your-name/your-repo.git

   ```

3. **Install Dependencies**

   ```bash
   pnpm install
   ```

4. **Environment Configuration**

   Set up your `.env` file based on the provided `.env.example`.

5. **Run Migrations**

   ```bash
   pnpm migrate:deploy
   ```

### Running the Application

- **All apps (API + Site Manager + Dispatcher)**

  ```bash
  pnpm dev
  ```

  - Site Manager (public): http://localhost:3000  
  - Dispatcher (admin): http://localhost:3001  
  - API: http://localhost:3100  

- **Single app**

  ```bash
  pnpm dev:api
  pnpm dev:site-manager    # or dev:manager
  pnpm dev:dispatcher
  ```

- **Lint (all projects)**

  ```bash
  pnpm run lint
  ```

- **Production Build**

  ```bash
  pnpm build:api
  # or
  pnpm build:site-manager
  ```

## Documentation

- [NX Workspace](https://nx.dev/)
- [NestJS Documentation](https://nestjs.com/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Docs](https://www.prisma.io/docs/)

## Contributing

Contributions are welcome. Please follow the standard Git workflow - fork, branch, and pull request.

## License

This project is licensed under the Apache 2.0 - see the `LICENSE` file for details.
