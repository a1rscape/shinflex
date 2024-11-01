import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/header';
import AbrasivesPage from './components/pages/CollectionsPage/CollectionsPage.jsx';
import CutterToolsPage from './components/pages/CutterToolsPage';
import Footer from './components/footer/Footer';
import Home from './components/pages/HomePage/HomePage';
import Err404 from './components/pages/err404.jsx';
import Login from './components/header/Login/Login.jsx';
import ProductDetails from './components/pages/ProductDetails/ProductDetails.jsx';
import ScrollToTop from './components/loading/ScrollToTop.js';
import FAQ from './components/pages/FAQ/FAQ.jsx';
import AboutUs from './components/pages/AboutUs/AboutUs.jsx';
import Blogs from './components/pages/Blogs/Blogs.jsx';
import BlogItem from './components/pages/Blogs/BlogItem/BlogItem.jsx';

const App = () => {
  return (
    <Router>
      <Header />
      <ScrollToTop />
      <main style={{ overflowY: 'auto', minHeight: '100vh' }}>
        <Routes>
          <Route path="*" element={<Err404 />} />
          <Route path="/" element={<Home />} />
          <Route path="/account/login" element={<Login />} />
          <Route path="/product-details" element={<ProductDetails />} />
          <Route path="/collections/:category/:categoryID" element={<AbrasivesPage />} />
          <Route path="/cutter-tools" element={<CutterToolsPage />} />
          <Route path='/pages/faq' element={<FAQ />} />
          <Route path='/pages/about-us' element={<AboutUs />} />
          <Route path='/blogs/news' element={<Blogs/>} />
          <Route path="/news/post/:id" element={<BlogItem />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;