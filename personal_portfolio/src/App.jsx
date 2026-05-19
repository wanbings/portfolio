import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { Misc } from './pages/Misc';

const NotFound = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
    <h1 className="text-4xl font-bold mb-2">404</h1>
    <p>Page Not Found</p>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="misc" element={<Misc />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;