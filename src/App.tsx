import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Expertise from './pages/Expertise';
import Solutions from './pages/Solutions';
import Certifications from './pages/Certifications';
import News from './pages/News';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/expertise" element={<Expertise />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
