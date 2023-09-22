import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const HomePage = React.lazy(() => import('./pages/Home/Home'));
const ArtworkPage = React.lazy(() => import('./pages/Artwork/Artwork'));

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<></>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/artwork/:id" element={<ArtworkPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRoutes;
