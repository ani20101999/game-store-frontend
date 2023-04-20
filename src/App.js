import React from 'react';
import "./App.css";
import "react-router-dom";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/home/home';
import { Product } from './pages/product/product';
import { Products } from './pages/products/products';
import { Navbar } from './components/navbar/navbar';
import { Checkout } from './pages/checkout/heckout';

 export default function App(){

    return <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/products/:id' element={<Products/>}></Route>
        <Route path='/product' element={<Product/>}></Route>
        <Route path='/checkout' element={<Checkout/>}></Route>
        </Routes>
        </BrowserRouter>


}