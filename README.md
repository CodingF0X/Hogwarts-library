# Book Library Monolith

A robust, modular NestJS & TypeScript application implementing Domain‑Driven Design (DDD) and Clean Architecture principles. Each domain feature is organized into its own module with clearly separated layers (Domain, Application, Infrastructure, Interfaces) to promote maintainability, testability, and future scalability.

---

## Table of Contents

1. [Architecture Overview](#architecture-overview)
2. [Directory Structure](#directory-structure)
3. [Getting Started](#getting-started)
4. [Technology Stack](#technology-stack)
5. [Contributing](#contributing)
6. [License](#license)

---

## Architecture Overview

This monolithic application is architected according to DDD and Clean Architecture:

* **Domain Layer**: Encapsulates core entities, and value objects.
* **Application Layer**: Defines use‑cases (services), DTOs, and ports (interfaces) that orchestrate domain operations.
* **Infrastructure Layer**: Contains concrete implementations of repositories.
* **Interface Layer**: Exposes HTTP controllers that map incoming requests to application use‑cases.

This vertical slice (feature‑first) organization ensures each module is self‑contained and can be extracted into a standalone service if required.

---

## Directory Structure



---

## Getting Started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Configure environment**

   * Copy `.env.example` to `.env` and set database and API keys.

3. **Run database migrations**

   ```bash
   npm run migrate
   ```

4. **Start the server**

   ```bash
   npm run start:dev
   ```

5. **Access API**

   * Swagger UI: `http://localhost:4000/api-docs`

---

## Technology Stack

* **Framework**: NestJS
* **Language**: TypeScript
* **ORM**: TypeORM
* **Database**: PostgreSQL
* **Validation**: class-validator / class-transformer
* **Testing**: Jest
