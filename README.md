
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.




# 🎥 Live Session Frontend (TutorArc Assignment)

This is the **frontend** for the **TutorArc Live Session App**, built using React + Vite.  
It allows the **admin** to start a live video session and the **student** to join using a unique session link.

---

## 🛠️ Tech Stack

- ⚛️ React (Vite)
- 💨 TailwindCSS
- 🔁 React Router DOM
- 🌐 Axios

---

## ⚙️ Features

- ✅ **Start Session:** Admin can start a new session with one click.  
- ✅ **Unique URL:** Automatically generates a shareable link for students.  
- ✅ **Video Player:** Embedded HTML5 video player with full controls.  
- ✅ **Dynamic Routing:** Student joins the same session using `/session/:id`.  
- ✅ **API Integration:** Connects with Express backend for session creation and validation.

---

## 🧩 Folder Structure

frontend/
┣ src/
┃ ┣ pages/
┃ ┃ ┣ Home.jsx
┃ ┃ ┗ Session.jsx
┃ ┣ App.jsx
┃ ┗ main.jsx
┣ index.html
┣ package.json
┗ README.md


---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Hrittik17/Live-Session-App-TutorArc-Assignment-.git
cd tutorarc-frontend

2️⃣ Install Dependencies
npm install

3️⃣ Run the App
npm run dev

🌐 Live Deployment


Name: Hrittik Kumar Tanti
Email: hrittikkumartanti@gmail.com
GitHub: https://github.com/Hrittik17

Built with ❤️ using React + Vite
