import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import { Home } from './pages/Home.tsx';
import { UserRepos } from './pages/UserRepos.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <main className="container mx-auto mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile/:username" element={<UserRepos />} />
        </Routes>
      </main>
    </Router>
  </StrictMode>
)
