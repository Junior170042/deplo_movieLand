import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Loading from './components/Loading';
import { Home, Popular, Kids, Comedies, Dramas, Search, Detalles } from './components';

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="populares" element={<Popular />} />
          <Route path="enfantiles" element={<Kids />} />
          <Route path="comedias" element={<Comedies />} />
          <Route path="dramas" element={<Dramas />} />
          <Route path="buscador/:key" element={<Search />} />
          <Route path="detalles/:id" element={<Detalles />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
