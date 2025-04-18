import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Blog from "./pages/Blog";
import Pricing from "./pages/Pricing";
import Services from "./pages/Services";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Services />} />
                <Route path="/blogs" element={<Blog />} />
                <Route path="/pricing" element={<Pricing />} />
            </Routes>
        </Router>
    );
}

export default App;
