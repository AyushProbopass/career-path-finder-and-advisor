# Career Path Finder and Advisor

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
</p>
<p align="center">
  <img src="https://img.shields.io/badge/License-GPLv3-blue.svg?style=for-the-badge" alt="License: GPL v3">
  <img src="https://img.shields.io/github/stars/Ayushx404/career-path-finder-and-advisor?style=for-the-badge" alt="GitHub Stars">
  <img src="https://img.shields.io/github/forks/Ayushx404/career-path-finder-and-advisor?style=for-the-badge" alt="GitHub Forks">
</p>

A full-stack application designed to help users find and plan their career paths.

## 📝 About The Project

This application acts as a personal career advisor. It guides users through a simple multi-step process to find a job role and learning path that best fits their profile.

The app asks the user to provide their:
* **Skills:** A comprehensive checklist of technical and soft skills.
* **Interests:** The industries and fields they are passionate about.
* **Work Experience:** Their current professional level (Entry, Mid, Senior).

Based on this input, the application provides personalized job recommendations, complete with a "match score," salary estimates, skills analysis, and a visual career path to help users plan their next steps.

---

## 🖼️ Gallery

| Select Skills | Select Interests | Select Experience |
| :---: | :---: | :---: |
| <img src="./assets/skills.jpg" alt="Skills Page" width="300"> | <img src="./assets/interests.png" alt="Interests Page" width="300"> | <img src="./assets/experience.png" alt="Experience Page" width="300"> |

| Recommendations | Career Path |
| :---: | :---: |
| <img src="./assets/recommendations.png" alt="Recommendations Page" width="300"> | <img src="./assets/path.jpg" alt="Career Path Page" width="300"> |

---

## ✨ Key Features

* **Multi-Step User Profiling:** Gathers user data through an intuitive form (Skills, Interests, Experience).
* **Personalized Job Recommendations:** Lists suitable job roles with a percentage-based match score.
* **Detailed Job Analysis:** For each recommendation, provides:
    * Industry (e.g., "Tech")
    * Estimated Salary Range
    * Growth Score
    * Skills Analysis (skills you have vs. skills to learn).
* **Visual Career Path:** Displays a clear, step-by-step roadmap showing career progression (e.g., Junior -> Senior -> Full Stack) and the skills needed for each level.

---

## 🛠️ Tech Stack

* **Frontend:**
    * **React.js** (built with Create React App)
    * JavaScript (ES6+)
    * CSS & HTML
* **Backend:**
    * **Node.js**
    * **Express.js** 
* **Data:**
    * **JSON** (Data for jobs and career paths is served from static `.json` files)

---

## 🚀 Getting Started

Follow these instructions to get a local copy of the project up and running.

### Prerequisites

* Node.js (v18.x or higher)
* npm
    ```sh
    npm install npm@latest -g
    ```

### 💾 Installation

1.  Clone the repository:
    ```sh
    git clone [https://github.com/Ayushx404/career-path-finder-and-advisor.git](https://github.com/Ayushx404/career-path-finder-and-advisor.git)
    ```
2.  Navigate to the project directory:
    ```sh
    cd career-path-finder-and-advisor
    ```
3.  Install backend dependencies:
    ```sh
    cd backend
    npm install
    ```
4.  Install frontend dependencies:
    ```sh
    cd ../frontend
    npm install
    ```

---

## ▶️ Usage

1.  **Start the backend server:** (from the `/backend` directory)
    ```sh
    npm start 
    ```
    *(This will run `server.js`)*

2.  **Start the frontend application:** (from the `/frontend` directory in a **new terminal**)
    ```sh
    npm start
    ```

3.  Open your browser and navigate to `http://localhost:3000`.

---

## 🚀 How to Use the App

Once the application is running, a user follows a simple 3-step process to get their recommendations:

1.  **Select Your Skills:** The user is presented with a comprehensive list of skills. They check all the technologies, software, and soft skills they are familiar with.
2.  **Select Your Interests:** The user chooses the industries and fields they are interested in, such as "Tech," "Design," or "Healthcare."
3.  **Select Your Experience Level:** The user selects their current professional standing: "Entry Level (0-2 years)," "Mid Level (2-5 years)," or "Senior Level (5+ years)."
4.  **Get Recommendations:** After submitting, the app analyzes the input and presents a ranked list of job recommendations. Each entry shows a match score, salary estimate, and the key skills required.
5.  **View Your Path:** The user can click "View Career Path" on any recommendation to see a visual roadmap of how to progress from their current role to the next level (e.g., *Junior Developer* -> *Senior Developer* -> *Full Stack Developer*), including the new skills to learn for each step.

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/CareerPathFinder`)
3.  Commit your Changes (`git commit -m 'Add some CareerPathFinder'`)
4.  Push to the Branch (`git push origin feature/CareerPathFinder`)
5.  Open a Pull Request

---

## 📄 License

This project is licensed under the **GNU General Public License v3.0**.

See the `LICENSE` file in the repository's root for the full license text.
*(**Note:** Remember to add a file named `LICENSE` to your project and paste the [full GPLv3 text](https://www.gnu.org/licenses/gpl-3.0.txt) into it.)*

---

## ❓ FAQ

**Q: I ran `npm start` in the frontend, but I'm not getting any job recommendations. Why?**

> **A:** This project has two parts: a frontend and a backend. You must have **both** running at the same time.
> 1.  Open one terminal, navigate to the `/backend` folder, and run `npm start`.
> 2.  Open a **second** terminal, navigate to the `/frontend` folder, and run `npm start`.

**Q: How do I add or change the job roles, skills, or career paths?**

> **A:** All the data for this application is stored in static JSON files in the `/backend/data/` directory.
> * To add/edit job roles, modify `jobs.json`.
> * To add/edit the career path steps, modify `paths.json`.

**Q: Can I use this project for my own commercial product?**

> **A:** This project is licensed under the **GNU General Public License v3.0 (GPLv3)**. This "copyleft" license means that if you use this code in your own project, your project must **also** be open-sourced under the same GPLv3 license. You cannot use it in a closed-source, proprietary application.

**Q: Are you planning to connect this to a real database?**

> **A:** The project currently uses JSON files for simplicity, making it easy for anyone to run without setting up a database. We welcome contributions! If you'd like to integrate a database like PostgreSQL or MongoDB, please feel free to fork the project and open a Pull Request with your changes.

---

## 📧 Contact

Ayushx404 - aayush.roha@gmail.com

Project Link: [https://github.com/Ayushx404/career-path-finder-and-advisor](https://github.com/Ayushx404/career-path-finder-and-advisor)
