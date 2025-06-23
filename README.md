Here’s a clean and professional `README.md` layout for your **Contact Management Application**:

---

# 📇 Contact Management Application

A **full-stack CRUD** application for managing contacts, developed with **Spring Boot** (backend), **React.js** (frontend), and **PostgreSQL** (database), all containerized using **Docker Compose**. This project emphasizes clean code, modular architecture, and version control best practices.

---

## 📑 Table of Contents

* [Project Overview](#project-overview)
* [Features](#features)
* [Technologies Used](#technologies-used)
* [Project Structure](#project-structure)
* [Setup and Running the Application](#setup-and-running-the-application)

  * [Prerequisites](#prerequisites)
  * [Database Setup (Docker Compose)](#database-setup-docker-compose)
  * [Backend Setup](#backend-setup)
  * [Frontend Setup](#frontend-setup)
  * [Running with Docker Compose](#running-with-docker-compose)
* [API Endpoints](#api-endpoints)
* [Important Notes](#important-notes)

---

## 🧾 Project Overview

This application allows users to **create**, **view**, **update**, and **delete** contacts. It demonstrates:

* A layered backend architecture
* Modern frontend development principles
* REST API design
* Containerized deployment using Docker Compose

---

## 🚀 Features

### 🔙 Backend (Spring Boot)

* **RESTful API**: CRUD operations for contacts
* **Data Persistence**: PostgreSQL with Spring Data JPA (Hibernate)
* **Entity Model**: `Contact` with fields: `firstName`, `lastName`, `email`, `phoneNumber`, `address`
* **CRUD Endpoints**:

  * `GET /api/contacts`
  * `GET /api/contacts/{id}`
  * `POST /api/contacts`
  * `PUT /api/contacts/{id}`
  * `DELETE /api/contacts/{id}`
* **Input Validation**
* **Error Handling**
* **CORS Configuration** (for cross-origin requests)

### 🖥️ Frontend (React.js)

* **Responsive UI**: Functional components & hooks
* **State Management**: `useState`
* **Axios** for API interaction
* **Modals** for adding/editing contacts
* **Search Functionality** (by name, email, etc.)

---

## ⚙️ Technologies Used

### Backend:

* Java 17
* Spring Boot 3.3.1
* Spring Data JPA & Hibernate
* PostgreSQL (via Docker)
* Maven

### Frontend:

* React.js
* Vite
* Axios
* Tailwind CSS
* Nginx (in Docker)

### DevOps:

* Docker
* Docker Compose
* Git

---

## 📁 Project Structure

```
.
├── contact-book-backend/
│   ├── src/main/java/org/contacts/
│   │   ├── config/          # WebConfig (CORS)
│   │   ├── controller/      # ContactController
│   │   ├── model/           # Contact.java
│   │   ├── repository/      # ContactRepository
│   │   └── service/         # ContactService
│   ├── src/main/resources/  # application.properties
│   ├── src/test/java/       # Unit tests
│   ├── pom.xml
│   └── Dockerfile
├── contact-homepage-react/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   │   └── ContactListPage.jsx
│   │   └── main.jsx
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── Dockerfile
└── docker-compose.yml
```

---

## 🛠️ Setup and Running the Application

### ✅ Prerequisites

Make sure you have:

* Java 17+
* Maven
* Node.js (LTS) + npm
* Docker Desktop (Docker & Docker Compose)

---

### 🐘 Database Setup (Docker Compose)

From the backend root directory:

```bash
cd contact-book-backend
```

Ensure `docker-compose.yml` includes:

```yaml
POSTGRES_DB: contact_db
POSTGRES_USER: postgres
POSTGRES_PASSWORD: testpass123
```

---

### 🧰 Backend Setup

```bash
cd contact-book-backend
mvn clean package
```

> This builds `target/contact-book-backend-0.0.1-SNAPSHOT.jar` for Docker.

---

### 🌐 Frontend Setup

```bash
cd contact-homepage-react
```

Ensure you have a `.dockerignore`:

```dockerignore
node_modules/
dist/
.git/
.vscode/
npm-debug.log*
.env*
.DS_Store
```

---

### 🐳 Running with Docker Compose

From backend directory (where `docker-compose.yml` is):

```bash
docker compose up -d --build --force-recreate
```

Check containers:

```bash
docker ps
```

Access:

* Frontend: [http://localhost:3000](http://localhost:3000)
* API: [http://localhost:8080/api/contacts](http://localhost:8080/api/contacts)

Stop services:

```bash
docker compose down
```

---

## 🔗 API Endpoints

| Method | Endpoint             | Description                        |
| ------ | -------------------- | ---------------------------------- |
| GET    | `/api/contacts`      | Get all contacts (supports search) |
| GET    | `/api/contacts/{id}` | Get contact by ID                  |
| POST   | `/api/contacts`      | Create new contact                 |
| PUT    | `/api/contacts/{id}` | Update contact by ID               |
| DELETE | `/api/contacts/{id}` | Delete contact by ID               |

---

## ⚠️ Important Notes

* **React API Base URL**: Uses `VITE_REACT_APP_API_BASE_URL` from `docker-compose.yml` for backend access.
* **CORS**: Configured in `WebConfig.java` for cross-origin requests.
* **Database Schema**: `spring.jpa.hibernate.ddl-auto=update` auto-applies schema changes (dev only).
* **Passwords**: Avoid hardcoding in production; use `.env` or Docker secrets.

---
