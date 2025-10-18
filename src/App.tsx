import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';

function App() {
    return (
        <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">
            <BrowserRouter basename="/zibaweb">
                <Routes>
                    <Route path="*" element={<Index />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;