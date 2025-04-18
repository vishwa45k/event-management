# 📌 Event Management - Dhruva

[![KCE License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![Made with MERN](https://img.shields.io/badge/MERN-Stack-blue)

A full-stack web-based event management system designed to streamline the organization and participation in cultural and technical events.



<!-- Uncomment and add screenshots if available -->
<!--
![Home Page](./screenshots/home.png)
![Dashboard](./screenshots/dashboard.png)
-->

---

## 🚀 Features

- ✅ User authentication & role-based authorization
- ✅ Admin dashboard for managing departments and events
- ✅ Create, edit, and delete events (Technical & Cultural)
- ✅ Event registration with pass system
- ✅ View pass purchase records
- ✅ Download registered pass data as Excel/CSV
- ✅ Dynamic event department dropdowns
- ✅ Responsive UI with mobile-friendly navigation

---

## 🛠️ Tech Stack

**Frontend:**
- React.js
- Tailwind CSS
- React Router DOM
- Axios
- SweetAlert2

**Backend:**
- Node.js
- Express.js
- MongoDB with Mongoose

**Other Tools:**
- JWT for secure authentication
- Cloudinary for image upload handling
- Vercel for frontend deployment
- Render or Railway for backend deployment

---

## 📦 Installation

### 1. Clone the repository

```bash
git clone https://github.com/Siranjeevi619/event-management-dhruva.git
cd event-management-dhruva
```

### 2. Install backend dependencies

```bash
cd backend
npm install
```

### 3. Install frontend dependencies

```bash
cd ../frontend
npm install
```

---

## ⚙️ Environment Variables

Create a `.env` file inside the `backend/` directory with the following contents:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

---

## 🧪 Running the Project Locally

### Start the backend server

```bash
cd backend
npm run dev
```

### Start the frontend server (in a new terminal)

```bash
cd frontend
npm start
```

Now open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📁 Folder Structure

```
event-management-dhruva/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
│
├── frontend/
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── services/
│       └── App.js
```

---

## 🌐 Deployment

- **Frontend**: [https://event-management-dhruva.vercel.app](https://event-management-dhruva.vercel.app)
- **Backend**: Deployed using Render or Railway (based on your setup)

---

## 🙌 Contributing

Contributions are welcome!  
If you find a bug or want to add a feature, feel free to open an issue or a pull request.

---

## 👨‍💻 Developer

Made with ❤️ by [Siranjeevi P](https://github.com/Siranjeevi619)

---
