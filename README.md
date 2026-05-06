# 🚀 Post App Backend

A simple backend application built using **Node.js, Express, and MongoDB** for creating posts with image upload support.

---

## 📡 API Endpoint

### Create Post
**POST /create-post**

**Body (form-data):**
- `image` → file  
- `caption` → text  

---

## 🧪 Testing

You can test APIs using:
- Postman

---

## 🔐 Environment Variables

Make sure `.env` is added in `.gitignore` to keep your credentials safe.

## 📁 Project Structure

```
post-app/
│── src/
│   ├── db/
│   ├── models/
│   ├── services/
│   └── app.js
│
│── server.js
│── package.json
│── .env
│── .gitignore
```
## 📈 Future Improvements

- Save posts in database  
- Complete image upload integration  
- Add authentication (JWT)  
- Add full CRUD operations (update/delete posts)  

---

##  Author

**Tania Tariq**
