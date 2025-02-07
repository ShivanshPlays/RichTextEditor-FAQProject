import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/home";
import Admin from "./components/pages/admin";
import { Navbar } from "./components/navbar";
import Layout from "./components/layout";

function App() {
  return (
    <div className="overflow-hidden">
      <Router>
      <Navbar />
        <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
