import React from "react";
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './views/home';
import Conta from './views/conta';

const RouteDom = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/conta" element={<Conta />} />
            </Routes>
        </BrowserRouter>
    )
}
export default RouteDom;