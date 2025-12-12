Product Management Dashboard

This project is a simple and clean product management dashboard built with React on the frontend and Node.js/Express on the backend.
It supports full product CRUD operations, search functionality, pagination, and JWT-based authentication.

Features
Frontend

Add, edit, delete, and view products

Modern modal UI for all actions

Pagination and product filtering

Search by product name

Toast notifications for user feedback

Axios instance with automatic token handling

Backend

RESTful API for product management

JWT authentication

Protected routes using middleware

Modular routing structure

CORS enabled

Swagger documentation included

Technologies Used
Frontend

React

Axios

React Hot Toast

React Icons

CSS Modules

Backend

Node.js / Express

JSON Web Token (JWT)

CORS

Swagger UI

Getting Started
Backend Setup
cd backend
npm install
npm start

The server automatically selects the first available port (default: 3000).
Swagger documentation is available at:

/api-docs

Frontend Setup
cd frontend
npm install
npm start

Authentication

A JWT token is stored in localStorage after a successful login:

token: "eyJhbGciOi..."

Axios automatically attaches the token for all authenticated requests:

Authorization: Bearer token

Debugging Notes

Log API responses while developing product CRUD

Ensure searchQuery is passed correctly

Verify Axios token headers when receiving 401 or 403 errors

Check product IDs when updating or deleting
