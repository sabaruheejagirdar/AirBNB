import './App.css'
import { Routes, Route } from 'react-router-dom';
import IndexPage from './pages/IndexPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import Layout from './Layout';
import axios from 'axios';
import {UserContextProvider} from "./UserContext";
import {useEffect} from "react";

axios.defaults.baseURL = 'http://127.0.0.1:4000';
axios.defaults.withCredentials = true;

function App() {


  return (
    <div>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Layout />} />
        </Routes>
        <Routes>
          <Route index element={<IndexPage />} />
        </Routes>

        <Routes>
          <Route path="/login" element={<Layout />} />
        </Routes>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
        </Routes>

        <Routes>
          <Route path="/register" element={<Layout />} />
        </Routes>
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </UserContextProvider>    

    </div>
  )
}

export default App
