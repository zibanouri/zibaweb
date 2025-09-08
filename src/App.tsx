import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';

function App() {
    return (
        <BrowserRouter basename="/cores">
            <Routes>
                <Route path="*" element={<Index />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
