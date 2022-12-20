import './App.css';
import NavigationBar from './Components/NavigationBar';
import { Routes, Route } from 'react-router';
import Lowongan from './Page/Lowongan';
import { BrowserRouter } from 'react-router-dom';
import CarouselPage from './Components/CarouselPage';
import Pagination from './Components/Pagination';
import NavigationBarHomepage from './Components/NavigationBarHomepage';
import Homepage from './Page/Homepage';
import LandingPage from './Page/LandingPage';
import SkeletonLoader from './Components/SkeletonLoader';
import CallApiMagang from './Components/apimagang';
import CallApiLowongan from './Components/apilowongan';
import DeskripsiMagang from './Page/deskripsimagang';
import DeskripsiLowongan from './Page/deskripsilowongan';
import HalamanLogin from './Page/HalamanLogin';
import HalamanMentoring from './Page/HalamanMentoring';
import HalamanSignup from './Page/HalamanSignup';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<NavigationBar />} />
      <Route path='/' element={<CarouselPage />} />
      <Route path='/' element={<SkeletonLoader/>} />
      <Route path='/' element={<Pagination />} />
      <Route path='/' element={<NavigationBarHomepage />} />
      <Route path='/LandingPage' element={<LandingPage />} />
      <Route path='/Lowongan' element={<CallApiLowongan />} /> 
      <Route path='/Homepage' element={<Homepage />} />
      <Route path='/Magang' element={<CallApiMagang />} />
      <Route path='/DeskripsiMagang/:id' element={<DeskripsiMagang />} />
      <Route path='/DeskripsiLowongan/:id' element={<DeskripsiLowongan />} />
      <Route path='/HalamanLogin' element={<HalamanLogin />} />
      <Route path='/HalamanMentoring' element={<HalamanMentoring />} />
      <Route path='/HalamanSignup' element={<HalamanSignup />} />

    </Routes> 
    </BrowserRouter>    
  );
};

export default App;
