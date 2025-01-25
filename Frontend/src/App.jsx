import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Home from './pages/Home';
import Posts from './pages/Posts';
import Products from './pages/Products';
import Jokes from './pages/Jokes';
import Quotes from './pages/Quotes';
import ComplexUsers from './pages/ComplexUsers';
import Users from './pages/Users';
import Custom from './pages/Custom';
import Todos from './pages/Todos';
import Docs from './pages/Docs';
import About from './pages/About';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="flex min-h-screen flex-col">
        <div className="flex flex-1">
          <Sidebar />
          <MainContent>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/posts" element={<Posts />} />
              <Route path="/products" element={<Products />} />
              <Route path="/jokes" element={<Jokes />} />
              <Route path="/quotes" element={<Quotes />} />
              <Route path="/complex-users" element={<ComplexUsers />} />
              <Route path="/users" element={<Users />} />
              <Route path="/custom" element={<Custom />} />
              <Route path="/todos" element={<Todos />} />
              <Route path="/docs" element={<Docs />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </MainContent>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
