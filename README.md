# 🌍 Travel Project - Complete Travel Booking & Management System

A full-stack travel booking and management application built with React.js frontend and Node.js backend, featuring user authentication, admin panel, booking management, and content management system.

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Environment Variables](#-environment-variables)
- [Usage](#-usage)
- [API Endpoints](#-api-endpoints)
- [Database Models](#-database-models)
- [Features in Detail](#-features-in-detail)
- [Contributing](#-contributing)
- [License](#-license)

## ✨ Features

### 🚀 Core Features

- **User Authentication & Authorization**

  - User registration and login
  - JWT-based authentication
  - Role-based access control (User/Admin)
  - Protected routes

- **Travel Booking System**

  - Browse travel packages and destinations
  - Search and filter functionality
  - Shopping cart management
  - Secure payment integration with Stripe
  - Order tracking and management

- **Content Management**

  - Travel posts and articles
  - Category management
  - Image upload with Cloudinary
  - Rich content creation

- **Admin Panel**
  - Dashboard with analytics
  - User management
  - Content moderation
  - Booking management
  - Category administration

### 🎯 User Experience

- Responsive design with Tailwind CSS
- Interactive UI components
- Real-time search functionality
- Mobile-first approach
- Modern and intuitive interface

## 🛠️ Tech Stack

### Frontend

- **React 19** - Modern React with latest features
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API calls
- **React Icons** - Icon library
- **React Multi Carousel** - Carousel components
- **React DatePicker** - Date selection
- **React Toastify** - Toast notifications
- **Stripe** - Payment processing

### Backend

- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Token authentication
- **Bcrypt** - Password hashing
- **Cloudinary** - Cloud image management
- **CORS** - Cross-origin resource sharing
- **Morgan** - HTTP request logger
- **Multer** - File upload handling

## 📁 Project Structure

```
Travel_project/
├── client/                          # Frontend React application
│   └── travel-project/
│       ├── src/
│       │   ├── components/         # Reusable UI components
│       │   ├── pages/             # Page components
│       │   ├── context/           # React context providers
│       │   ├── assets/            # Images and static files
│       │   └── App.jsx            # Main application component
│       ├── package.json
│       └── vite.config.js
├── server/                          # Backend Node.js application
│   ├── src/
│   │   ├── config/                # Database and cloudinary config
│   │   ├── controller/            # Route controllers
│   │   ├── middlewares/           # Custom middleware
│   │   ├── models/                # Database models
│   │   ├── routes/                # API routes
│   │   └── utils/                 # Utility functions
│   ├── package.json
│   └── index.js                   # Server entry point
└── README.md
```

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **MongoDB** (local installation or MongoDB Atlas)
- **Stripe Account** (for payment processing)
- **Cloudinary Account** (for image storage)

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone <repository-url>
cd Travel_project
```

### 2. Install Backend Dependencies

```bash
cd server
npm install
```

### 3. Install Frontend Dependencies

```bash
cd ../client/travel-project
npm install
```

### 4. Environment Setup

Create `.env` files in both `server/` and `client/travel-project/` directories (see Environment Variables section below).

### 5. Database Setup

- Ensure MongoDB is running locally or update connection string for MongoDB Atlas
- The application will automatically create necessary collections

## 🔐 Environment Variables

### Server (.env)

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/travel_project
JWT_SECRET=your_jwt_secret_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

### Client (.env)

```env
VITE_API_BASE_URL=http://localhost:3000/api
VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
```

## 🎯 Usage

### Starting the Backend Server

```bash
cd server
npm start
# or for development with nodemon
npx nodemon index.js
```

### Starting the Frontend Development Server

```bash
cd client/travel-project
npm run dev
```

### Building for Production

```bash
cd client/travel-project
npm run build
npm run preview
```

## 🌐 API Endpoints

### Authentication

- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile

### Posts

- `GET /api/post` - Get all posts
- `POST /api/post` - Create new post
- `PUT /api/post/:slug` - Update post
- `DELETE /api/post/:slug` - Delete post

### Categories

- `GET /api/category` - Get all categories
- `POST /api/category` - Create new category
- `PUT /api/category/:id` - Update category
- `DELETE /api/category/:id` - Delete category

### Bookings

- `GET /api/booking` - Get all bookings
- `POST /api/booking` - Create new booking
- `PUT /api/booking/:id` - Update booking status

## 🗄️ Database Models

### User Model

- Authentication details
- Profile information
- Role management
- Booking history

### Post Model

- Travel content
- Categories and tags
- Image management
- SEO optimization

### Category Model

- Travel categories
- Hierarchical organization
- Content classification

### Booking Model

- Trip details
- User information
- Payment status
- Booking dates

## 🔧 Features in Detail

### 🔐 Authentication System

- Secure password hashing with bcrypt
- JWT token generation and validation
- Protected route middleware
- Role-based access control

### 💳 Payment Integration

- Stripe payment processing
- Secure checkout flow
- Payment confirmation
- Order management

### 📱 Responsive Design

- Mobile-first approach
- Tailwind CSS utilities
- Component-based architecture
- Modern UI/UX patterns

### 🖼️ Image Management

- Cloudinary integration
- Automatic image optimization
- Multiple format support
- Secure file uploads

### 🔍 Search & Filter

- Real-time search functionality
- Category-based filtering
- Advanced search options
- Search result pagination

## 👥 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Namit Jain**

- Project: Travel Project
- Version: 1.0.0
- Description: A comprehensive travel booking and management system

## 🆘 Support

If you encounter any issues or have questions:

1. Check the existing issues in the repository
2. Create a new issue with detailed description
3. Contact the development team

## 🚀 Deployment

### Backend Deployment

- Deploy to platforms like Heroku, Railway, or DigitalOcean
- Set environment variables in deployment platform
- Ensure MongoDB connection is accessible

### Frontend Deployment

- Build the project: `npm run build`
- Deploy to platforms like Vercel, Netlify, or GitHub Pages
- Update API base URL for production

---

**Happy Traveling! ✈️🌍**
