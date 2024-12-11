# Movie App

This project is a movie discovery application where users can browse, search, and mark movies as favorites. It allows users to explore various movie genres, view detailed movie information, and manage their movie preferences. Additionally, it includes functionality for managing orders and products.

## Features

- User Authentication: Users can log in with their email and password.
- Favorites: Users can add movies to their favorites list.
- Search: Users can search for movies by title.
- Genres: Filter movies by genre.
- Movie Details: View detailed information about each movie including ratings and images.
- Order Management: View and manage orders.
- Product Management: Add, update, and delete products.

## Technologies Used

- Next.js 15.0.4
- React 18.3.1
- TypeScript
- Tailwind CSS
- NextUI
- React Hook Form
- Zod for form validation
- Axios for API requests
- Vitest for unit and integration testing
- Playwright for end-to-end testing
- Docker for containerization

## Installation

### Local Installation

Clone the project

\`\`\`bash
git clone https://github.com/your-username/movie-app.git
\`\`\`

Go to the project directory

\`\`\`bash
cd movie-app
\`\`\`

Install dependencies

\`\`\`bash
npm install
\`\`\`

### Docker Installation

To run the application using Docker, make sure you have Docker and Docker Compose installed on your machine.

1. Build the Docker image:

\`\`\`bash
docker-compose build
\`\`\`

2. Start the container:

\`\`\`bash
docker-compose up
\`\`\`

The application will be available at \`http://localhost:3000\`.

To stop the container, use:

\`\`\`bash
docker-compose down
\`\`\`

## Running Locally

Start the development server

\`\`\`bash
npm run dev
\`\`\`

Visit \`http://localhost:3000\` to view the app in your browser.

## Available Scripts

- \`npm run dev\`: Start the development server
- \`npm run build\`: Build the application for production
- \`npm run start\`: Start the production server
- \`npm run lint\`: Run ESLint for code linting
- \`npm test\`: Run all tests (unit, integration, and e2e)
- \`npm run test:unit\`: Run unit tests
- \`npm run test:integration\`: Run integration tests
- \`npm run test:e2e\`: Run end-to-end tests with Playwright
- \`npm run test:coverage\`: Run tests with coverage report
- \`npm run docker:test:all\`: Run all tests in Docker environment

## Folder Structure

\`\`\`plaintext
/src
/app
/api
/login
route.ts
/orders
route.ts
/products
/[pid]
route.ts
/all
route.ts
route.ts
/components
/Navbar
/MovieCard
/FavoriteButton
/SearchBar
/GenreFilter
/context
/AuthContext
/MoviesContext
/pages
/index.js
/login.js
/movie/[id].js
/styles
/components
globals.css
tailwind.config.js
/services
api.js
/utils
/helpers.js
\`\`\`

## API Reference

The application interacts with various API endpoints for user authentication, order management, and product management. Below are the details of these endpoints:

### User Login

\`\`\`http
POST /api/login
\`\`\`

| Parameter    | Type       | Description                   |
| :----------- | :--------- | :---------------------------- |
| \`username\` | \`string\` | **Required**. User's email    |
| \`password\` | \`string\` | **Required**. User's password |

#### Response

\`\`\`javascript
{
"token": "token_simulado_1234567890"
}
\`\`\`

In case of invalid credentials:

\`\`\`javascript
{
"error": "Credenciales inválidas"
}
\`\`\`

### Get All Orders

\`\`\`http
GET /api/orders
\`\`\`

#### Response

\`\`\`javascript
[
{ "id": 1, "customer": "Cliente 1", "total": 99.99, "status": "Enviado", "products": [1, 2, 3] },
{ "id": 2, "customer": "Cliente 2", "total": 149.99, "status": "Pendiente", "products": [2, 4] },
{ "id": 3, "customer": "Cliente 3", "total": 199.99, "status": "Entregado", "products": [1, 3, 5] }
]
\`\`\`

### Update Product

\`\`\`http
PATCH /api/products/{pid}
\`\`\`

| Parameter | Type       | Description                               |
| :-------- | :--------- | :---------------------------------------- |
| \`pid\`   | \`number\` | **Required**. ID of the product to update |

#### Request Body

\`\`\`javascript
{
"name": "Updated Product Name",
"price": 29.99,
"stock": 100
}
\`\`\`

#### Response

\`\`\`javascript
{
"id": 1,
"name": "Updated Product Name",
"price": 29.99,
"stock": 100,
"image": "https://example.com/image.jpg"
}
\`\`\`

### Delete Product

\`\`\`http
DELETE /api/products/{pid}
\`\`\`

| Parameter | Type       | Description                               |
| :-------- | :--------- | :---------------------------------------- |
| \`pid\`   | \`number\` | **Required**. ID of the product to delete |

#### Response

\`\`\`javascript
{
"id": 1,
"name": "Deleted Product",
"price": 19.99,
"stock": 50,
"image": "https://example.com/image.jpg"
}
\`\`\`

### Get All Products

\`\`\`http
GET /api/products/all
\`\`\`

#### Response

\`\`\`javascript
[
{
"id": 1,
"name": "Product 1",
"price": 19.99,
"stock": 50,
"image": "https://example.com/image1.jpg"
},
{
"id": 2,
"name": "Product 2",
"price": 29.99,
"stock": 100,
"image": "https://example.com/image2.jpg"
}
]
\`\`\`

### Add New Product

\`\`\`http
POST /api/products
\`\`\`

#### Request Body

\`\`\`javascript
{
"name": "New Product",
"price": 39.99,
"stock": 75
}
\`\`\`

#### Response

\`\`\`javascript
{
"id": 3,
"name": "New Product",
"price": 39.99,
"stock": 75,
"image": "https://via.placeholder.com/150"
}
\`\`\`

## Running Tests

To run tests, use the following commands:

- Run all tests: \`npm test\`
- Run unit tests: \`npm run test:unit\`
- Run integration tests: \`npm run test:integration\`
- Run end-to-end tests: \`npm run test:e2e\`
- Run tests with coverage: \`npm run test:coverage\`

For running tests in a Docker environment:

- Run all tests in Docker: \`npm run docker:test:all\`

The test suite includes the following unit tests:

- ConfirmModal (3 tests)
- Header (2 tests)
- OrderTable (1 test)
- ProductCard (4 tests)
- ProductCreateForm (2 tests)
- ProductForm (2 tests)
- ProductList (1 test)

These tests ensure the reliability and correctness of key components in the application.

## Deployment

### Vercel Deployment

This application has been deployed on Vercel. You can access it at the following URL:

[Vercel Deployment Link] <!-- Replace this with the actual Vercel deployment link -->

### Local Deployment

To deploy the project locally, you can run the following command, which builds the app and prepares it for production deployment:

\`\`\`bash
npm run build
\`\`\`

Then, to start the production server:

\`\`\`bash
npm run start
\`\`\`

### Docker Deployment

To deploy using Docker:

1. Build the production Docker image:

\`\`\`bash
docker build -t movie-app .
\`\`\`

2. Run the container:

\`\`\`bash
docker run -p 3000:3000 movie-app
\`\`\`

The application will be available at \`http://localhost:3000\`.

## License

This project is licensed under the MIT License.
