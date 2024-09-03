import { Route, Routes } from 'react-router-dom';
import './App.module.css';
import { lazy, Suspense } from 'react';
import TrackFeatures from '../TrackFeatures/TrackFeatures.jsx';
import TrackReviews from '../TrackReviews/TrackReviews.jsx';

const Home = lazy(() => import('../../pages/Home/Home.jsx'));
const Catalog = lazy(() => import('../../pages/Catalog/Catalog.jsx'));
const DetailInfo = lazy(() => import('../../pages/DetailInfo/DetailInfo.jsx'))

function App() {
  return (
      <Suspense fallback={null}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/catalog' element={<Catalog />} />
          <Route path='/catalog/:catalogId' element={<DetailInfo />}>
          <Route path='features' element={<TrackFeatures />} />
          <Route path='reviews' element={<TrackReviews />} />
        </Route>
        </Routes>
      </Suspense>
  );
}

export default App;
