# 🌍 Wanderlust — Travel Listing Web App

**Wanderlust** is a full-stack travel listing web application where users can discover, create, and review campgrounds or travel spots. The app features authentication, CRUD operations, image uploads, and location mapping using Mapbox.

🔗 **Live Demo:** [https://delta-project-62rm.onrender.com/listings](https://delta-project-62rm.onrender.com/listings)

---

## ✨ Features

- 🧭 View all listed travel spots with title, image, price, and location
- 🔐 User authentication (signup/login/logout)
- ➕ Add new travel listings (with image + location)
- 📝 Edit or delete your own listings
- 💬 Post and delete reviews on listings
- 🌍 Location support with interactive Mapbox maps
- 🖼️ Image uploads using Cloudinary
- ⚠️ Flash messages for form validation and actions
- 🔒 Authorization for protected routes
- 🛠️ Error handling middleware and custom error pages

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Node.js** | Server runtime |
| **Express.js** | Web framework |
| **MongoDB** | NoSQL database |
| **Mongoose** | MongoDB ODM |
| **EJS** | Server-side templating |
| **Passport.js** | User authentication |
| **Cloudinary** | Image hosting |
| **Mapbox** | Geolocation + maps |
| **Bootstrap 5** | Styling and layout |
| **Multer** | File upload middleware |

---

## 📁 Folder Structure

delta-project/
├── controllers/
├── models/
├── routes/
├── views/
│ ├── listings/
│ ├── reviews/
│ └── partials/
├── public/
├── utils/
├── app.js
├── cloudConfig.js
├── .env (not included)
└── README.md

yaml
Copy
Edit

---

## 🚀 Getting Started
```bash
### 1. Clone the Repository


git clone https://github.com/aakashschauhan/delta-project.git
cd delta-project
2. Install Dependencies
bash
Copy
Edit
npm install
3. Set Up Environment Variables
Create a .env file in the root with:

env
Copy
Edit
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_KEY=your_key
CLOUDINARY_SECRET=your_secret
MAPBOX_TOKEN=your_mapbox_token
DB_URL=mongodb://localhost:27017/wanderlust
SECRET=your_session_secret
⚠️ Replace with your actual credentials. Don’t push .env to GitHub!

4. Run the App Locally
bash
Copy
Edit
node app.js
Visit http://localhost:8080/listings in your browser.


🙋‍♂️ Author
Aakash Singh Chauhan
https://github.com/aakashschauhan

📝 License
This project is licensed under the MIT License.
