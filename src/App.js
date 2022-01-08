import './App.css';
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import { Home } from './Home';
import { About } from './components/About';
import Login from './components/Login';






function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/reactlivewebsite" element={<Login />} />
          <Route exact path="/Home" element={<Home name="Home component" />} />
          <Route exact path="/About" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
