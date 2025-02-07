<div style="display: flex; align-items: center;">
  <img src="./frontend/public/bhrathfd_logo.png" alt="Logo" width="40" height="40">
  <h1 style="margin-left: 10px;">BhrathFd FullStack Assignment</h1>
</div>

## 🛠️ Tech Stack

- **TypeScript** : Typed superset of JavaScript
- **Node.js** : JavaScript runtime
- **Express** : Web framework for Node.js (Backend)
- **MongoDB** : NoSQL database
- **Redis** : In-memory data structure store for caching
- **Google-Translate API-X** : Translation service
- **React + Vite** : Frontend 

## 🌍 Live Links

- **Frontend:** [Try it here](https://faq-bharatfdproject.shivanshsaxena.tech/)
- **Backend:** [API Documentation](https://texteditorbe.shivanshsaxena.tech/api/faqs)
  
## 🚀 Quick Start

### Frontend Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/ShivanshPlays/RichTextEditor-FAQProject
   cd RichTextEditor-FAQProject
   ```

2. **Navigate to the frontend directory:**

   ```bash
   cd frontend
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Run the frontend server:**

   ```bash
   npm run dev
   ```

### Backend Setup

Navigate to the `faq-backend` directory.

#### 🐳 Docker Setup for Backend

1. **Build the Docker image:**

   ```bash
   docker build -t bhrathfd .
   ```

2. **Run the Docker container:**

   ```bash
   docker run -p 3000:3000 bhrathfd
   ```
   
   Redis instance will run and connect to the backend within the Docker container.

#### 🛠️ Manual Setup for Backend

_Ensure Redis is installed and running locally before proceeding._

1. **Navigate to the backend directory:**

   ```bash
   cd backend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Compile TypeScript files to JavaScript:**

   ```bash
   npx tsc
   ```

4. **Run the backend server:**

   ```bash
   node dist/index.js
   ```

## 📌 Testing API with Postman

<div style="display: flex; align-items: center;">
  <h2>Postman API Testing</h2>
</div>

You can use **Postman** to test the API endpoints. Import the API collection and start testing.

---
