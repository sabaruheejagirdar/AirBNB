import './App.css'
import { Routes, Route } from 'react-router-dom';
import IndexPage from './pages/IndexPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import Layout from './Layout';

function App() {

  return (
    <div>
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
      

    </div>
  )
}

export default App
