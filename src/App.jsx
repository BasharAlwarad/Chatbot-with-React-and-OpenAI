import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Form } from './components/Form';
import { Register } from './components/Register';
import Nav from './components/Nav';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Nav />

        <div className="p-4">
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/form" element={<Form />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
