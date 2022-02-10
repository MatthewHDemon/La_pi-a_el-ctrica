import React from "react";
import "../styles/list.css"
import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/HOME/Home";
import { Catalog } from "../pages/CATALOG/Catalog";
import { Cart } from "../pages/Cart";
import { NotFound } from "../pages/NotFound";
import { Navbar } from "./Navbar";

    function App () {
        return (
                <HashRouter>
                <Routes>
                     <Route path="/" element={<Navbar/>} >
                        <Route path="/" element={<Home />} />
                        <Route path="/Catalog" element={<Catalog />} />
                        <Route path="/Cart" element={<Cart />} />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
                </HashRouter>
        )
    }

    export default App;