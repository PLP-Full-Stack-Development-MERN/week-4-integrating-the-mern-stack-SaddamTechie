# Task Manager

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen)](https://task-manager-ch8o.onrender.com)

### [![Home Screenshot](./screenshots/tasks.png)](https://task-manager-ch8o.onrender.com)

### Installation Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/PLP-Full-Stack-Development-MERN/week-4-integrating-the-mern-stack-SaddamTechie.git week4
   cd week4
   ```

2. Install dependencies(for both frontend & backend):

   ```bash
   npm run build
   ```

3. Set up the database:

- Either setup local database or mongo cloud.

4. Configure environment variables:

   ```env
   MONGO_URI=<YOUR_MONGODB_CONNECTION_STRING>
   PORT=8000
   ```

   Create a `.env` file in the root directory and add the above configuration.

5. Insert fake data into database

   ```bash
   npm run generate-data
   ```

6. Start the server:

   ```bash
   npm run start
   ```

   Go to localhost port 8000 to access your web app.

## 📈 Future Implementations and Improvements

- User Authentication and Authorization
- Adding new tasks page.
- Task edit.

---

Made with ❤️ by [Saddam](https://saddamtechie.github.io/)

---

© 2025 [Task Manager.](https://task-manager-ch8o.onrender.com) All rights reserved.
