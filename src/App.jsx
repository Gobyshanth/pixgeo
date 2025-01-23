// import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home/Home";
import { Header } from "./Components/Header/Header";
import { Services } from "./Components/Services/Services";
import { About } from "./Components/About/About";
import { Contact } from "./Components/Contact/Contact";
import { Footer } from "./Components/footer/footer";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <Router>
      <div>
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
