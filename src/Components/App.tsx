import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../Styles/App.css';
import Layout from './Layout';
import Home from './Home';
import Login from './Login';
import Quiz from './Quiz';
import Result from './Result';
import Signup from './Signup';


const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
