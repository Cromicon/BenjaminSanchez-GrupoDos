import './App.css';
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import ItemDetail from './components/ItemDetail/ItemDetail';
import ProductsPage from './components/Products/Products';
import ContactPage from './components/Contact/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/Home/Home';
import AboutPage from './components/About/About';

function App() {
  return (
    <Router>
      <Header />
      <Routes> 
        <Route path="/" element={<HomePage />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/products/:productId' element={<ItemDetail />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
