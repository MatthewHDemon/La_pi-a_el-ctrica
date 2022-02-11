import React from "react";
import "../STYLES/list.css"
import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "../PAGES/HOME/Home";
import { Catalog } from "../PAGES/CATALOG/Catalog";
import { Cart } from "../PAGES/Cart";
import { NotFound } from "../PAGES/NotFound";
import { Navbar } from "./Navbar";

function App() {
    return (
        <HashRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Catalog" element={<Catalog />} />
                <Route path="/Cart" element={<Cart />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </HashRouter>
    )
}

export default App;