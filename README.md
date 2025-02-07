<div style="display: flex; align-items: center;">
  <img src="./frontend/public/bhrathfd_logo.png" alt="Logo" width="40" height="40">
  <h1 style="margin-left: 10px;">BhrathFd Backend Assignment</h1>
</div>

## Credentials 

### Admin
Username: admin
Password: falgun

### User
Username: user
Password: falgun

## 🛠️ Tech Stack

- **TypeScript** : Typed superset of JavaScript
- **Node.js** : JavaScript runtime
- **Express** : Web framework for Node.js (Backend)
- **SuperBase** : Postgres database
- **Prisma** : ORM for database management
- **Redis** : In-memory data structure store for caching
- **Google-Translate API-X** : Translation service
- **React + Vite** : Frontend
- **ContextAPI**: For Context Management
- **Express Validator**: For Input Validation


## 🎬 Demo Video

https://github-production-user-asset-6210df.s3.amazonaws.com/105922142/409458289-16780718-f4a9-4e3c-aad7-b8a41d71155b.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250204%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250204T081010Z&X-Amz-Expires=300&X-Amz-Signature=9129a5d282b0b71a01804263bf8cb9b639730da73ef4138cd9d2c95ee033a16c&X-Amz-SignedHeaders=host

## 🚀 Quick Start

### FrontEnd Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/falgun143/BhrathFd_FAQ.git
   cd BhrathFd_FAQ
   ```

2. **Go to frontend dir:**

   ```bash
   cd frontend
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Run Frontend Server:**

   ```bash
   npm run dev
   ```

### Backend Setup

##### 1st Way. 🐳 Docker Setup for backend

1. **Build the Docker image:**

   ```bash
   docker build -t bhrathfd .
   ```

2. **Run the Docker container:**

   ```bash
   docker run -p 8000:8000 bhrathfd
   ```

##### 2nd Way. 🛠️ Normal Setup for backend (Might Give redis TCP connection error)

1. **Go to backend dir:**

   ```bash
   cd backend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Compile the ts files to js:**

   ```bash
   tsc
   ```

4. **Run the server:**

   ```bash
   npm run dev
   ```

<div style="display: flex; align-items: center;">
  <h2>Testing through postman</h2>
  <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" id="postman" width="24" height="24" style="margin-left: 10px;">
    <path fill="#F36933" d="M18.855,6.049L18.855,6.049l-0.059,0.117l0.006,0.042V6.207l0.043,0.183c0,0.102-0.036,0.194-0.097,0.266h0.001l-0.031,0.087l0.054,0.109l0.084,0.03l0.106-0.05c0.099-0.119,0.16-0.273,0.16-0.442c0-0.111-0.027-0.216-0.074-0.31l-0.112-0.059L18.855,6.049L18.855,6.049z"></path>
    <polygon fill="#F36933" points="19.049 6.082 19.047 6.078 19.048 6.081 19.049 6.082"></polygon>
    <path fill="#F36933" d="M13.527,0.099C6.955-0.744,0.942,3.9,0.099,10.473c-0.843,6.572,3.8,12.584,10.373,13.429c6.574,0.843,12.588-3.802,13.429-10.374C24.745,6.955,20.101,0.943,13.527,0.099L13.527,0.099z M15.998,7.584c-0.232,0.003-0.441,0.097-0.593,0.25l-4.453,4.453l-0.949-0.95C14.392,6.961,15.183,6.919,15.998,7.584L15.998,7.584z M11.135,12.445l4.44-4.44c0.113-0.118,0.272-0.192,0.449-0.192c0.342,0,0.62,0.278,0.62,0.62c0,0.19-0.086,0.361-0.221,0.475l-0.001,0.001l-4.699,4.125L11.135,12.445L11.135,12.445z M11.466,13.139l-1.1,0.238l-0.013,0.001l-0.054-0.033l-0.008-0.029l0.018-0.044l0.645-0.644L11.466,13.139L11.466,13.139z M8.662,12.68l1.172-1.172l0.879,0.878l-1.979,0.426l-0.019,0.002l-0.067-0.04l-0.011-0.039L8.662,12.68L8.662,12.68z M5.016,18.737L5.016,18.737l-0.069-0.075v-0.008l0.022-0.046h0.002l0.946-0.946l1.222,1.222L5.016,18.737L5.016,18.737z M7.442,17.483L7.442,17.483l-0.124,0.202l0.006,0.056v-0.002l0.203,0.864l0.004,0.031l-0.125,0.125l-0.09-0.038H7.314l-1.228-1.229l3.763-3.758l1.82-0.394l0.874,0.874C11.287,15.316,9.571,16.415,7.442,17.483L7.442,17.483z M12.72,14.054h-0.002l-0.839-0.839l4.699-4.125l0.116-0.125l0.002-0.002C16.549,10.308,14.669,12.208,12.72,14.054L12.72,14.054z M17.662,8.126c-0.502,0-0.957-0.203-1.286-0.532h0.001l-0.003-0.002c-0.328-0.329-0.531-0.784-0.531-1.285c0-1.006,0.816-1.822,1.822-1.822c0.446,0,0.854,0.159,1.17,0.426l-0.003-0.002l-1.61,1.612l-0.036,0.084l0.036,0.085l1.247,1.246C18.234,8.056,17.956,8.126,17.662,8.126L17.662,8.126z M18.956,7.594c-0.081,0.08-0.169,0.151-0.265,0.214l-0.006,0.004h-0.001l-1.207-1.207l1.533-1.532C19.671,5.792,19.646,6.905,18.956,7.594L18.956,7.594z"></path>
    <path fill="#D45B2C" d="M8.715,12.813l-0.067-0.04l-0.011-0.039l0.024-0.055l1.172-1.172l0.879,0.878l-1.979,0.426L8.715,12.813L8.715,12.813z M10.952,12.287l-0.949-0.95c3.179-3.17,4.471-4.066,5.251-4.066c0.297,0,0.52,0.13,0.745,0.313c-0.232,0.003-0.441,0.097-0.593,0.25L10.952,12.287L10.952,12.287z M11.986,0C6.039,0,0.876,4.418,0.099,10.473C-0.39,14.28,0.964,17.9,3.466,20.436l1.688-1.688l-0.139-0.01v0.001l-0.069-0.076v-0.008l0.022-0.046h0.002l0.946-0.946l0.161,0.161l0.17-0.17l-0.162-0.162l3.763-3.758l0.409-0.088l0.312-0.312l-0.203,0.044l-0.013,0.001l-0.054-0.033l-0.008-0.029l0.018-0.044l0.645-0.644l0.161,0.161l0.182-0.182l-0.161-0.161l4.44-4.44c0.113-0.118,0.272-0.192,0.449-0.192c0.021,0,0.042,0.001,0.062,0.003l0.257-0.256c-0.309-0.326-0.5-0.768-0.5-1.252c0-1.006,0.816-1.822,1.822-1.822c0.446,0,0.854,0.159,1.17,0.426l-0.003-0.002l-1.61,1.612l-0.036,0.084l0.032,0.077l3.216-3.216c-1.806-1.788-4.193-3.019-6.908-3.367C13.009,0.032,12.495,0,11.986,0L11.986,0z"></path>
  </svg>
</div>

- Register API: `POST http://localhost:8000/api/register`
- Login API: `POST http://localhost:8000/api/login`
- Get FAQs API: `GET http://localhost:8000/api/faqs?lang={lang}`
- Create FAQ API: `POST http://localhost:8000/api/faqs`
- Update FAQ API: `PUT http://localhost:8000/api/faqs/{id}`
- Delete FAQ API: `DELETE http://localhost:8000/api/faqs/{id}`

## 📄 Assumptions

- The database schema is predefined and migrations are managed using Prisma. Used google-translate-api-x instead google translate api as it was easy to use.

## 🙏 Acknowledgments

- Prisma team for the ORM.
- Express team for the web framework.
- Google Translate API team for the translation service.
