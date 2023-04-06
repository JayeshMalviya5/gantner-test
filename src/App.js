import { Route, Routes } from 'react-router-dom';
import './App.css';
import Landing from './Components/LandingPage/Landing';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';

function App() {
  return (
    <>
    <Routes>
      <Route exact path='/' element={<Login />} />
      <Route exact path='/signup' element={<Signup />} />
      <Route exact path='/landing' element={<Landing />} />
    </Routes>
  
    </>
  );
}

export default App;
