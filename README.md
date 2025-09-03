# 🧳 Wanderlust - Full-Stack Travel Listing App

A full-stack **Travel Listing Web Application** built with **Node.js, Express, and MongoDB**.  
It allows users to **browse, create, edit, and review travel listings** with authentication, images, and interactive maps.

---

## 🚀 Features  
- **CRUD operations** for creating, editing, and deleting travel listings.  
- **User authentication & authorization** using Passport.js (secure login, sessions).  
- **Image upload & storage** integrated with Cloudinary.  
- **Interactive maps** powered by Mapbox API.  
- **Flash messages & error handling** for improved user experience.  
- Responsive **EJS-based UI** with modular routing.  

---

## 🛠️ Tech Stack  
- **Frontend**: HTML, CSS, JavaScript, EJS  
- **Backend**: Node.js, Express.js, MongoDB, Mongoose  
- **Authentication**: Passport.js, Express-Session  
- **Storage & APIs**: Cloudinary, Mapbox API  
- **Tools**: Git, GitHub, Render, VS Code  

---

## 📂 Project Structure  
```
wanderlust/
│
├── app.js                # Main server file
├── models/               # Mongoose models (User, Listing, Review)
├── routes/               # Express routes for listings, reviews, users
├── views/                # EJS templates
├── public/               # Static assets (CSS, JS)
├── utils/                # Custom error handling
├── .env                  # Environment variables (DB URL, Secrets, API keys)
└── README.md             # Project documentation
```

---

## ⚡ Setup Instructions  

### 1️⃣ Clone Repository  
```bash
git clone https://github.com/aakashschauhan/wanderlust.git
cd wanderlust
```

### 2️⃣ Install Dependencies  
```bash
npm install
```

### 3️⃣ Configure Environment Variables  
Create a `.env` file in the root directory and add:  
```env
ATLASDB_URL=your_mongodb_url_here
SECRET=your_session_secret_here
MAPBOX_TOKEN=your_mapbox_api_key_here
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_KEY=your_cloudinary_key
CLOUDINARY_SECRET=your_cloudinary_secret
```

### 4️⃣ Run Locally  
```bash
node app.js
```
Server will run on: `http://localhost:8080`  

---

## 🌍 Deployment  
- Deployed on [Render](https://render.com).  
- Configure environment variables in the deployment dashboard.  
- Upload images stored via Cloudinary.  

---

## 🤝 Contributing  
Pull requests are welcome! For major changes, open an issue first to discuss.  

---

## 📜 License  
This project is open source under the [MIT License](LICENSE).  
