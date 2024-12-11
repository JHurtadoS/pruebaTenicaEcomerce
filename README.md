# Product and Order Management Application

This project is a comprehensive application developed for managing products and orders. It implements a modern frontend using React with Next.js and TailwindCSS, along with a simulated backend using mocked services and detailed testing.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Testing](#testing)
- [Component Details](#component-details)
- [API Reference](#api-reference)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features

- Product Management: Create, edit, list, and delete products
- Order Management: View and manage orders
- Form validation using React Hook Form
- Interactive notifications with React Toastify
- Responsive and modern design using NextUI and TailwindCSS
- Unit and integration tests using React Testing Library and Vitest
- Mocked API services with Mock Service Worker (MSW)

## Technologies Used

### Frontend

- React 18 and Next.js 13 (App Router)
- TypeScript
- TailwindCSS for styling
- NextUI for interactive components
- React Toastify for notifications
- React Hook Form for form handling
- Zod for form validation

### Backend (Mocked)

- Mock Service Worker (MSW) to simulate API services

### Testing

- Vitest for unit and integration testing
- React Testing Library for rendering and DOM manipulation in tests
- Playwright for end-to-end testing

### DevOps

- Docker for containerization

## Project Structure

```plaintext
src/
├── app/
│   ├── components/         # React components
│   │   ├── Header.tsx      # Application header
│   │   ├── Sidebar.tsx     # Sidebar navigation
│   │   ├── product/        # Product-related components
│   │       ├── ProductCard.tsx
│   │       ├── ProductList.tsx
│   │       ├── ProductForm.tsx
│   ├── services/           # Mocked API services
│   │   ├── products.ts     # Functions to interact with products
│   ├── contexts/           # React contexts
│   ├── test/               # Unit and integration tests
│       ├── unit/           # Unit tests
│       ├── integration/    # Integration tests
```
