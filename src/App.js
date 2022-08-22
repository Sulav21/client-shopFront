import { Button } from 'react-bootstrap';
import './App.css';
import { Home } from './pages/home/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { ProductClick } from './pages/product-click/ProductClick';
import { Bat } from './pages/product-bat/Bat';
import { Accessories } from './pages/accessories/Accessories';

export const App=()=>{
  return (
    <div className="default-layout">
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/cricket-bats' element={<Bat/>} />
      <Route path='/accessories' element={<Accessories/>} />
      <Route path={`/product-landing/:_id`} element={<ProductClick/>} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
