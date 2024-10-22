import './App.css';
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Header } from './components/Header/Header';
import { Card } from './components/Card/Card';
import { Footer } from './components/Footer/Footer';
import ItemDetail from './components/ItemDetail/ItemDetail';
import ProductsPage from './components/Products/Products';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Card />
      <Routes> 
        <Route path='/products' element={<ProductsPage />} />  
        <Route path='/item-detail' element={<ItemDetail />} /> 
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
