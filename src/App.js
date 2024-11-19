import './App.css';
import { ToggleProvider } from './components/ToggleContext';
import Nav2 from './components/Nav2';
import Footer from './components/Footer';
import EventOwners from './pages/EventOwners';
import { Route, Routes } from 'react-router-dom';
import TokenHolders from './pages/TokenHolders';
import Signup from './modals/Signup';
import { useLocation } from 'react-router-dom';

function App() {

  const location = useLocation();

  const isModalPath = location.pathname.includes('/signup');

  return (
    <ToggleProvider>
      <div className={isModalPath ? "modal-overlay" : ""}>
        <Routes>
          <Route path='/*' element={<Pages/>} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </ToggleProvider>
  );
}

const Pages = () => {
  return (
    <>
      <Nav2 home='Token Holders' about='Event Owners' />
      <Routes>
        <Route path="/" element={<EventOwners />} />
        <Route path="/token-holders" element={<TokenHolders />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;
