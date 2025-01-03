# 📚 Library Management System (Gestion de Bibliothèque)

A modern microservices-based library management platform built with React, NestJS, and AWS services.

---

## 🎯 Project Context

This application serves as a modern digital platform for a local library, enabling users to:
- Register and login securely
- Search and borrow available books  
- Receive notifications for loan reminders and returns

The project is structured around three main services and DevOps infrastructure:
- Authentication Service
- Book Management Service  
- Frontend Web Application

---

## 🏗️ Architecture

### Authentication Service
- **Role**: Manages user registration, login, and authentication via AWS Cognito
- **Tech Stack**: NestJS, AWS Cognito, DynamoDB
- **Key Features**:
  - User registration
  - JWT-based authentication
  - User profile management

### Book Service  
- **Role**: Handles book management and loan operations
- **Tech Stack**: NestJS, DynamoDB
- **Key Features**:
  - CRUD operations for books
  - Search by title, author, category
  - Loan management
  - Return tracking

### Frontend (Bookio Web)
- **Role**: User interface for interacting with backend services
- **Tech Stack**: React.js, Axios
- **Key Features**:
  - Homepage/Landing page
  - User authentication flows
  - Book search and details
  - User dashboard
  - Admin panel (optional)

---

## 🛠️ Technology Stack

### Backend
- NestJS
- TypeScript
- AWS Services:
  - Cognito
  - DynamoDB
  - Lambda/ECS
  - API Gateway
  - Secrets Manager
  - S3
  - CloudFront

### Frontend  
- React.js
- TypeScript
- Axios
- AWS Amplify

---

## 📝 API Endpoints

### Authentication Service
```http
POST /auth/signup - Register new user
POST /auth/login - User login
GET /auth/me - Get user profile
```
🚀 Quick Start
```http
git clone https://github.com/yourusername/Gestion_de_Bibliotheque.git
cd Gestion_de_Bibliotheque
```
Install Dependencies

```http
cd auth-service
npm install
cp .env.example .env # Configure env variables

```
Book Service


```http
cd ../book-service
npm install
cp .env.example .env # Configure env variables
```
Frontend


```http
cd ../frontend
npm install
cp .env.example .env # Configure env variables

```

