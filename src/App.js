import { Button } from 'react-bootstrap';
import './App.css';
import { Home } from './pages/home/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { ProductClick } from './pages/product-click/ProductClick';

export const App=()=>{
  return (
    <div className="default-layout">
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/product-landing' element={<ProductClick/>} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
