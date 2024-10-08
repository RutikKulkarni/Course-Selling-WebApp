# **Course Selling WebApp - Backend**

This is the backend service for the **Course Selling WebApp**. The backend is built using **Node.js** and **Express** and offers several features, including course management, user authentication, course reviews, wishlists, and more. This service interacts with a MongoDB database and implements JWT-based authentication for both users and admins.



## **Features**

- **User Authentication**: Users can sign up, log in, and manage their profile.
- **Admin Management**: Admins can create, update, and delete courses.
- **Course Management**: Users can purchase, review, and rate courses.
- **Course Wishlist**: Users can add courses to their wishlist.
- **Course Reviews & Ratings**: Users can leave reviews and ratings for purchased courses.
- **Purchase History**: Users can view their course purchase history.
- **Search & Filter Courses**: Search for courses by title and filter by price, rating, or category.

---

## **Technologies Used**

- **Node.js** - Backend runtime
- **Express.js** - Web framework for Node.js
- **MongoDB** - NoSQL database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication and authorization
- **dotenv** - Manage environment variables
- **bcrypt.js** - Password hashing

## **Environment Variables**

The application requires the following environment variables:

| Variable          | Description                                         |
|-------------------|-----------------------------------------------------|
| `PORT`            | The port number the server will run on              |
| `DB_URI`          | MongoDB connection URI                              |
| `USER_JWT_SECRET` | JWT secret key for user token generation            |
| `ADMIN_JWT_SECRET`| JWT secret key for admin token generation           |


## **API Endpoints**

### **Authentication Routes**

| Method | Endpoint             | Description                  |
|--------|-----------------------|------------------------------|
| POST   | `/api/auth/signup`    | Register a new user           |
| POST   | `/api/auth/login`     | Login a user                  |
| POST   | `/api/admin/login`    | Admin login                   |

### **User Routes**

| Method | Endpoint                   | Description                              |
|--------|-----------------------------|------------------------------------------|
| GET    | `/api/users/profile`        | Get user profile                         |
| PUT    | `/api/users/profile`        | Update user profile                      |
| GET    | `/api/users/purchase-history`| View user's purchase history             |

### **Admin Routes**

| Method | Endpoint              | Description                         |
|--------|------------------------|-------------------------------------|
| POST   | `/api/admin/create-course` | Create a new course               |
| PUT    | `/api/admin/update-course/:id` | Update an existing course       |
| DELETE | `/api/admin/delete-course/:id` | Delete a course                 |

### **Course Routes**

| Method | Endpoint             | Description                       |
|--------|-----------------------|-----------------------------------|
| GET    | `/api/courses`        | Get all courses                   |
| GET    | `/api/courses/:id`    | Get course details by ID          |
| POST   | `/api/courses/:id/review` | Submit a course review (User only)|

### **Wishlist Routes**

| Method | Endpoint              | Description                       |
|--------|------------------------|-----------------------------------|
| POST   | `/api/wishlist/add/:id` | Add a course to wishlist          |
| GET    | `/api/wishlist`         | Get all wishlist courses          |



## **Authentication**

The app uses **JWT (JSON Web Token)** for authentication:

- **User Token**: Generated using a secret key stored in `USER_JWT_SECRET`.
- **Admin Token**: Generated using a separate key stored in `ADMIN_JWT_SECRET`.

Tokens are validated by middleware on protected routes to ensure only authorized users or admins can access them.


## **Middlewares**

- **Admin Middleware**: Verifies that the request is authorized by an admin JWT.
- **User Middleware**: Verifies that the request is authorized by a user JWT.
