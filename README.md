Shopping Cart Application
A fully containerized Shopping Cart application built with Astro.js and TypeScript for the frontend and Node.js for the backend. The app provides APIs for managing products and shopping cart functionalities while offering a responsive UI for interacting with the cart.

Features
Backend Features
Product Management:
Add, update, delete, and fetch products.
Shopping Cart Management:
Add items to the cart.
Remove items from the cart.
Update item quantities in the cart.
View items in the cart.
Frontend Features
Responsive User Interface:
View a list of products.
Add products to the shopping cart.
View cart details.
Update quantities or remove items from the cart.
Additional Features
Built with Astro.js, TypeScript, and React.
Follows Domain-Driven Design (DDD) principles.
Comprehensive error handling and validation.
Unit and integration tests for backend and frontend.
Dockerized for seamless deployment.
Tech Stack
Frontend
Framework: Astro.js
Language: TypeScript
Styling: CSS (Global)
Backend
Framework: Node.js with Express
Database: MongoDB
ORM/ODM: Mongoose
Authentication: None (for simplicity)
Containerization
Docker: Containerizes both the frontend and backend.
Docker Compose: Orchestrates multi-container deployment.
Setup Instructions
1. Clone the Repository
  
Edit
git clone [https://github.com/your-repo/shopping-cart-astro.git](https://github.com/afrinashar/shoppingcart)
cd shopping-cart-astro
2. Install Dependencies
For Backend:
  
Edit
cd backend
npm install
For Frontend:
  
Edit
cd frontend
npm install
3. Configure Environment Variables
Backend
Create a .env file in the backend directory:

env
Copy
Edit
PORT=5000
MONGO_URI=mongodb://mongo:27017/shopping-cart
Frontend
No additional configuration is needed for the frontend.

4. Run the Application
Using Docker Compose (Recommended)
Ensure Docker is installed and running.
Run the application:
  
Edit
docker-compose up --build
Access the app at:
Frontend: http://localhost:3000
Backend: http://localhost:5000
Running Locally
Backend:

  
Edit
cd backend
npm run dev
The backend will run on http://localhost:5000.

Frontend:

  
Edit
cd frontend
npm run dev
The frontend will run on http://localhost:3000.

API Endpoints
Product Management
Method	Endpoint	Description
GET	/api/products	Fetch all products
POST	/api/products	Add a new product
PUT	/api/products/:id	Update product details
DELETE	/api/products/:id	Delete a product
Shopping Cart
Method	Endpoint	Description
GET	/api/cart	Fetch all items in the cart
POST	/api/cart	Add an item to the cart
PUT	/api/cart/:id	Update the quantity of an item
DELETE	/api/cart/:id	Remove an item from the cart
frontend/
├── src/
│   ├── components/         # Reusable UI components
│   ├── pages/              # Astro pages
│   ├── styles/             # Global styles
├── public/                 # Static assets (e.g., images)
├── astro.config.mjs        # Astro configuration
└── package.json            # Frontend dependencies

Backend
  
Edit
backend/
├── src/
│   ├── models/             # Mongoose schemas
│   ├── routes/             # API routes
│   ├── controllers/        # Business logic for APIs
│   ├── app.js              # Express app setup
│   ├── server.js           # Entry point
├── .env                    # Environment variables
├── package.json            # Backend dependencies
└── Dockerfile              # Docker configuration
Testing
Run Tests
Backend:
  
Edit
cd backend
npm run test
Frontend:
  
Edit
cd frontend
npm run test
Future Improvements
Add user authentication and authorization (e.g., JWT).
Implement a product search and filter feature.
Add checkout functionality with payment gateway integration.
Enhance UI with animations and modern design libraries (e.g., Tailwind CSS).
Add role-based access control for product management (admin-only).
Contributing
Feel free to open issues or create pull requests if you’d like to contribute!

