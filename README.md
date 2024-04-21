# MERN Chat Application
This is a real-time chat application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It allows users to register, log in, and chat with other users in real-time.this is a 
task which is assigned by techdome too me.

## Features

- User authentication: Users can register and log in securely .
- Real-time messaging: Users can chat with each other in real-time.
- User presence: Users can see when other users are online.
- Responsive design: The application is responsive and works well on desktop and mobile devices.

## Technologies Used

- MongoDB: A NoSQL database used to store user data and chat messages.
- Express.js: A Node.js web application framework used for building the backend API.
- React.js: A JavaScript library used for building the user interface.
- Node.js: A JavaScript runtime environment used to run the server-side code.
- Socket.IO: A library used for real-time, bidirectional communication between web clients and servers.
- Cloudinary : I used cloudnary for storing files..

## How I Built

This chat application was built using the MERN (MongoDB, Express.js, React.js, Node.js) stack along with Socket.IO and cloudinary for real-time messaging.

### Backend (Node.js & Express.js)

The backend of the application was built using Node.js and Express.js. Here's an overview of the backend architecture:

- **User Authentication:** User registration and authentication were implemented using JSON Web Tokens (JWT) and bcrypt for secure authentication.
- **Database:** MongoDB was chosen as the database to store user information and chat messages. Mongoose was used as the ODM (Object Data Modeling) library for MongoDB.
- **API Endpoints:** Express.js was used to define various API endpoints for user authentication, message retrieval, and user presence tracking.
- **Real-Time Communication:** Socket.IO was integrated with Express.js to enable real-time bidirectional communication between clients and the server.

### Frontend (React.js)

The frontend of the application was built using React.js. Here's an overview of the frontend architecture:

- **User Interface:** The user interface was designed using React components to create a seamless and interactive chat experience.
- **Routing:** React Router was used for client-side routing to navigate between different pages, such as the login/register page and the chat page.
- **Styling:** The application was styled using CSS, with some components utilizing CSS frameworks like Bootstrap for quicker styling.

### Real-Time Messaging (Socket.IO)

Socket.IO was used to enable real-time messaging functionality in the application. Here's how it was integrated:

- **Server-Side Integration:** Socket.IO was integrated into the Express.js server to establish WebSocket connections with clients.
- **Client-Side Integration:** On the client-side, Socket.IO's JavaScript client library was used to establish a WebSocket connection with the server.
- **Real-Time Events:** Socket.IO's event-based communication model was utilized to handle real-time events such as user connection, disconnection, and message transmission.

## Project overview..
- The moment you will enter in application you will be redirected to login section without login you wont be able to access anything becuase all of the routes are protected routes..
- If dont have an account then will have to register first. for creating account you will have to enter your username,email,password if you will any field empty then you wont be registered..
- once you have created you account you will be redirected into chat userdashboard where you will have chat new group search profile and logout option...
- if you want to talk to someone personally then you can do it by searching that person and sending him message..
- if you want to do group conversation then you can do it by clicking on New group option and selecting the peoples with whom you want to talk with remember only admin can add or remove someone from group..
- By clicking on profile Button your details will be displayed you can update you details as well..
- By clicking on notification icon all notification will be displayed..
- By clicking on logout button you will be redirecected in Homepage....

