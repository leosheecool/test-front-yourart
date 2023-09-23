import Loader from 'components/Loader/Loader';
import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const HomePage = React.lazy(() => import('./pages/Home/Home'));
const ArtworkPage = React.lazy(() => import('./pages/ArtworkPage/ArtworkPage'));
const NotFoundPage = React.lazy(
  () => import('./pages/NotFoundPage/NotFoundPage'),
);

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <>
            <Loader />
          </>
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/artwork/:id" element={<ArtworkPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRoutes;
