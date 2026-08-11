import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import TechStackPage from './pages/TechStackPage';
import ProjectsPage from './pages/ProjectsPage';
import ExperiencePage from './pages/ExperiencePage';
import GithubStatsPage from './pages/GithubStatsPage';
import ContactsPage from './pages/ContactsPage';
import DonatePage from './pages/DonatePage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/techstack" element={<TechStackPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/experience" element={<ExperiencePage />} />
      <Route path="/githubstats" element={<GithubStatsPage />} />
      <Route path="/contacts" element={<ContactsPage />} />
      <Route path="/donate" element={<DonatePage />} />
    </Routes>
  );
}
