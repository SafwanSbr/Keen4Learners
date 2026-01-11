# 🎓 Keen4 Learners

<div align="center">

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.3.4-646CFF?logo=vite&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-10.12.5-FFCA28?logo=firebase&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.19-38B2AC?logo=tailwind-css&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green.svg)

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-keen4--learners.vercel.app-2563eb?style=for-the-badge)](https://keen4-learners.vercel.app/)

</div>

---

<div align="center">

**A modern, interactive learning platform that combines video-based education with comprehensive quiz assessments, built for learners who are keen on mastering new skills.**

</div>

---

## 📸 Visual Showcase

### App Preview

> **Note:** Replace these placeholder paths with your actual screenshots once available.

| **Landing Page** | **Quiz Interface** | **Results Dashboard** |
|:---:|:---:|:---:|
| ![Landing Page](/public/screenshots/landing-page.png) | ![Quiz Interface](/public/screenshots/quiz-interface.png) | ![Results Dashboard](/public/screenshots/results-dashboard.png) |

**Suggested Screenshots to Capture:**
1. **Home Page** - Showcase the video grid with infinite scroll
2. **Quiz Page** - Display the question interface with progress bar and mini video player
3. **Results Page** - Highlight the score summary and detailed answer analysis

---

## ✨ Key Features

### 🔐 Authentication & User Management
- **Secure Authentication** - Firebase Authentication with email/password
- **User Profiles** - Custom display names and account management
- **Protected Routes** - Private routes for authenticated users only
- **Session Management** - Persistent login state with automatic session handling

### 📹 Video-Based Learning
- **YouTube Integration** - Seamless video playback using React Player
- **Infinite Scroll** - Efficient pagination for large video libraries
- **Video Grid** - Responsive, modern card-based video display
- **Mini Player** - In-context video player during quiz sessions

### 📝 Interactive Quiz System
- **Multiple Choice Questions** - Support for single and multiple correct answers
- **Progress Tracking** - Real-time progress bar showing quiz completion
- **Question Navigation** - Easy navigation between questions (next/previous)
- **Answer Persistence** - Answers saved to Firebase Realtime Database

### 📊 Results & Analytics
- **Score Calculation** - Automatic scoring based on correct answers (5 points per question)
- **Detailed Analysis** - Question-by-question breakdown of answers
- **Summary Dashboard** - Visual summary of quiz performance
- **Answer Comparison** - Compare your answers with correct solutions

### 🎨 Modern UI/UX
- **Responsive Design** - Fully responsive across mobile, tablet, and desktop
- **Tailwind CSS** - Custom color palette with modern design system
- **Smooth Animations** - Hover effects and transition animations
- **Loading States** - Elegant loading indicators and error handling
- **Accessibility** - Semantic HTML and keyboard navigation support

### ⚡ Performance & Optimization
- **Code Splitting** - Optimized bundle sizes with Vite
- **Lazy Loading** - Efficient data fetching with pagination
- **TypeScript** - Type-safe codebase for better developer experience
- **SWC Compilation** - Fast refresh and hot module replacement

---

## 🛠️ Tech Stack

### Frontend
| Technology | Version | Purpose |
|:---|:---:|:---|
| **React** | 18.3.1 | UI library for building interactive components |
| **TypeScript** | 5.2.2 | Type-safe JavaScript for better code quality |
| **Vite** | 5.3.4 | Fast build tool and development server |
| **React Router DOM** | 6.26.0 | Client-side routing and navigation |
| **Tailwind CSS** | 3.4.19 | Utility-first CSS framework |
| **React Player** | 3.4.0 | Video player component for YouTube videos |
| **React Infinite Scroll** | 6.1.0 | Infinite scrolling for video lists |

### Backend & Services
| Service | Purpose |
|:---|:---|
| **Firebase Authentication** | User authentication and session management |
| **Firebase Realtime Database** | Real-time data storage for videos, questions, and results |
| **Firebase Analytics** | User behavior tracking and analytics |

### Development Tools
- **ESLint** - Code linting and quality checks
- **PostCSS** - CSS processing and optimization
- **Autoprefixer** - Automatic vendor prefixing

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v16.0.0 or higher recommended)
- **npm** (v7.0.0 or higher) or **yarn**
- A **Firebase project** with Authentication and Realtime Database enabled

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/keen4-learners.git
   cd keen4-learners
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory and add your Firebase configuration:
   
   ```env
   VITE_apiKey=your_firebase_api_key
   VITE_authDomain=your_project_id.firebaseapp.com
   VITE_databaseURL=https://your_project_id-default-rtdb.firebaseio.com
   VITE_projectId=your_project_id
   VITE_storageBucket=your_project_id.appspot.com
   VITE_messagingSenderId=your_messaging_sender_id
   VITE_appId=your_firebase_app_id
   VITE_measurementId=your_analytics_measurement_id
   ```
   
   > **⚠️ Important:** Never commit your `.env` file to version control. Add it to your `.gitignore` file.

4. **Configure Firebase**
   
   - Enable **Authentication** with Email/Password provider
   - Enable **Realtime Database** and set up your database structure:
     ```
     videos/
       {videoId}/
         title: string
         youtubeID: string
         noq: number
     
     questions/
       {videoId}/
         {questionId}/
           title: string
           options: array
     
     answers/
       {videoId}/
         {questionId}/
           title: string
           options: array (with correct flags)
     
     result/
       {userId}/
         {videoId}: array (user's answers)
     ```

5. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   
   The application will be available at `http://localhost:5173`

6. **Build for production**
   ```bash
   npm run build
   # or
   yarn build
   ```
   
   The optimized production build will be in the `dist` directory.

---

## 📂 Project Structure

```
keen4-learners/
├── public/                 # Static assets
├── src/
│   ├── Components/         # React components
│   │   ├── Account.tsx     # User account management
│   │   ├── Analysis.tsx    # Quiz answer analysis
│   │   ├── Answers.tsx     # Answer selection component
│   │   ├── App.tsx         # Main app component with routing
│   │   ├── Home.tsx        # Home page component
│   │   ├── Layout.tsx      # Main layout wrapper
│   │   ├── Login.tsx       # Login page
│   │   ├── Quiz.tsx        # Quiz interface
│   │   ├── Result.tsx      # Results page
│   │   ├── Signup.tsx      # Signup page
│   │   ├── Video.tsx       # Video card component
│   │   └── VideoList.tsx   # Video list with infinite scroll
│   ├── Contexts/           # React contexts
│   │   └── AuthContext.tsx # Authentication context
│   ├── Hooks/              # Custom React hooks
│   │   ├── useAnswers.ts   # Hook for fetching quiz answers
│   │   ├── useQuestions.ts # Hook for fetching quiz questions
│   │   └── useVideoList.ts # Hook for fetching video list
│   ├── Styles/             # Global styles
│   │   └── App.css         # Application styles
│   ├── firebase.ts         # Firebase configuration
│   ├── Model.ts            # TypeScript type definitions
│   └── main.tsx            # Application entry point
├── .env                    # Environment variables (not committed)
├── index.html              # HTML template
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite configuration
```

---

## 🎨 Design System

The project uses a custom Tailwind CSS color palette:

- **Primary**: Blue (`#2563eb`) - Buttons, links, primary actions
- **Secondary**: Emerald (`#10b981`) - Success states, active indicators
- **Accent**: Violet (`#8b5cf6`) - Highlights and special elements
- **Background**: Slate tones - Clean, modern backgrounds
- **Text**: Dark slate for primary text, medium slate for secondary

---

## 🔒 Environment Variables

The following environment variables are required for the application to function:

| Variable | Description | Required |
|:---|:---|:---:|
| `VITE_apiKey` | Firebase API key | ✅ |
| `VITE_authDomain` | Firebase authentication domain | ✅ |
| `VITE_databaseURL` | Firebase Realtime Database URL | ✅ |
| `VITE_projectId` | Firebase project ID | ✅ |
| `VITE_storageBucket` | Firebase storage bucket | ✅ |
| `VITE_messagingSenderId` | Firebase messaging sender ID | ✅ |
| `VITE_appId` | Firebase app ID | ✅ |
| `VITE_measurementId` | Firebase Analytics measurement ID | ⚠️ Optional |

---

## 📝 Available Scripts

| Script | Description |
|:---|:---|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build production-ready bundle |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |

---

## 🤝 Contributing

Contributions are welcome! If you'd like to contribute to Keen4 Learners, please follow these steps:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add some amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### Contribution Guidelines

- Follow the existing code style and conventions
- Write meaningful commit messages
- Add comments for complex logic
- Ensure all tests pass (if applicable)
- Update documentation as needed

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Firebase** - For providing an excellent backend-as-a-service platform
- **Vite** - For the lightning-fast development experience
- **Tailwind CSS** - For the utility-first CSS framework
- **React Team** - For the amazing React library

---

## 📧 Contact & Support

For questions, suggestions, or support, please open an issue on GitHub or contact the maintainers.

---

<div align="center">

**Made with ❤️ for learners who are keen on mastering new skills**

⭐ Star this repo if you find it helpful!

</div>
