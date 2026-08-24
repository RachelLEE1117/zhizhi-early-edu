import Sidebar from './components/Sidebar';
import TodayPage from './pages/TodayPage';
import LibraryPage from './pages/LibraryPage';
import ThemesPage from './pages/ThemesPage';
import EnglishPage from './pages/EnglishPage';
import RecordsPage from './pages/RecordsPage';
import MaterialsPage from './pages/MaterialsPage';
import SpacePage from './pages/SpacePage';
import PrinciplesPage from './pages/PrinciplesPage';
import SettingsPage from './pages/SettingsPage';
import { useStore } from './store';

export default function App() {
  const page = useStore((s) => s.page);
  return (
    <div className="app">
      <Sidebar />
      <main className="content">
        {page === 'today' && <TodayPage />}
        {page === 'library' && <LibraryPage />}
        {page === 'themes' && <ThemesPage />}
        {page === 'english' && <EnglishPage />}
        {page === 'records' && <RecordsPage />}
        {page === 'materials' && <MaterialsPage />}
        {page === 'space' && <SpacePage />}
        {page === 'principles' && <PrinciplesPage />}
        {page === 'settings' && <SettingsPage />}
      </main>
    </div>
  );
}
