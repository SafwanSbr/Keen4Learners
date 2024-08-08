import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../Styles/App.css';
import Layout from './Layout';
import Home from './Home';
import Login from './Login';
import Quiz from './Quiz';
import Result from './Result';
import Signup from './Signup';
import { AuthProvider } from '../Contexts/AuthContext';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';


const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
      <Layout>
        <Routes>
        <Route path="/" element={<Home />} />
            <Route path="/signup" element={<PublicRoute><Signup /></PublicRoute>} />
            <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
            <Route path="/quiz" element={<PrivateRoute><Quiz /></PrivateRoute>} />
            <Route path="/result" element={<PrivateRoute><Result /></PrivateRoute>} />
        </Routes>
      </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
