import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from './components/ProductList/ProductList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';

const App = () => {
  return (
    //указываем что роутинг юулет в браузере 
    <BrowserRouter>
    {/* header будет на всех ваших страницах */}
     <Header />
     {/* для переклюяения роутов  */}
      <Routes>
        {/* сами роуты */}
        <Route path="/" element={<ProductList />} />
        <Route path="/add-product" element={<h1>Add Product</h1>}/>
        <Route path="/edit-product" element={<h1>Edit Product</h1>}/>
        <Route path="/contacts" element={<h1>Contacts</h1>}/>
        <Route path="/about-us" element={<h1>About Us</h1>}/>
      </Routes>
      {/* футер будет на всх страницах */}
      <h1>Footer</h1>
    </BrowserRouter>
  );
};

export default App;  
