import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import Home from './pages/Home'
import Product from './pages/Product'
import ProductInfo from './pages/ProductInfo'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Product />} />
          <Route path="/singleProduct/:id" element={<ProductInfo />} />
          <Route path="/sidebar" element={<Sidebar />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Sidebar />
      </Router>
    </div>
  );
}

export default App;
