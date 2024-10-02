import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/header';
import AbrasivesPage from './components/pages/AbrasivesPage';
import CutterToolsPage from './components/pages/CutterToolsPage';
import Loading from './components/loading/Loading';
import Footer from './components/footer/Footer';
const LazyHome = React.lazy(() => import('./components/pages/HomePage/HomePage'));

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <React.Suspense fallback={<Loading />}>
            <LazyHome />
          </React.Suspense>
        } />
        <Route path="/abrasives" element={<AbrasivesPage />} />
        <Route path="/cutter-tools" element={<CutterToolsPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
