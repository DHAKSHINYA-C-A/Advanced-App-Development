
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserLogin from './components/userLogin';
import Nav from './components/nav';
import Uprofile from './pages/user/uProfile';
import About from './components/about';
import Services from './components/services';
import Avail from './components/avail';
import Aservice from './components/aservice';
import AHome from './components/aHome';
import UManage from './components/uManage';
import Dashboard from './components/dashboard';
import Feedback from './components/feedback';
import Booking from './components/booking';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path='/' element={<UserLogin />} />
        <Route path='/booking' element={<Booking />} />
        <Route path='/feedback' element={<Feedback />} />
        <Route path='/uManage' element={<UManage />} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/avail' element={<Avail />} />
        <Route path='/aHome' element={<AHome />} />
        <Route path='/aservice' element={<Aservice />} />
        <Route path='/nav' element={<Nav />} />
        <Route path='/uProfile' element={<Uprofile />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
