# 🚀 MERN Post App

A simple MERN stack application built using React, Node.js, Express, MongoDB, and ImageKit for creating and displaying posts with image upload support.

---

# 🌐 Live Links

## Backend Live URL
https://post-app-backend-4b0m.onrender.com

## Frontend Live URL

https://post-app-frontend.netlify.app/


---

# 📡 API Endpoints

## Create Post
POST /create-post

Live Endpoint:
https://post-app-backend-4b0m.onrender.com/create-post

Body (form-data):
- image → file
- caption → text

---

## Get All Posts
GET /posts

Live Endpoint:
https://post-app-backend-4b0m.onrender.com/posts

---

# 🧪 Testing

You can test APIs using:
- Postman
- Browser (/posts endpoint)

---

# ⚙️ Tech Stack

## Frontend
- React.js
- Axios
- CSS

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Multer
- ImageKit

---

# 🔐 Environment Variables

Make sure `.env` is added in `.gitignore` to keep credentials secure.

Required variables:

```env
MONGO_URI=
IMAGEKIT_PUBLIC_KEY=
IMAGEKIT_PRIVATE_KEY=
IMAGEKIT_URL_ENDPOINT=
