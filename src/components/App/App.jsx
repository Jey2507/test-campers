import { Route, Routes } from 'react-router-dom';
import './App.module.css';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('../../pages/Home/Home.jsx'));
const Catalog = lazy(() => import('../../pages/Catalog/Catalog.jsx'));

function App() {
  return (
      <Suspense fallback={null}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/catalog' element={<Catalog />} />
        </Routes>
      </Suspense>
  );
}

export default App;
