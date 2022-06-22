import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ServicesPage from './pages/ServicesPage';
import SignupPage from './pages/SignupPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/products' element={<ProductsPage/>} />
      <Route path='/services' element={<ServicesPage/>} />
      <Route path='/sign-up' element={<SignupPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
