
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CandidatesList from './Components/Pages/CandidatesList';
import CreateCandidate from './Components/Pages/CreateCandidate';
import Home from './Components/Pages/Home';
import Login from './Components/Pages/Login';
import SignUp from './Components/Pages/SignUp';
import Navbar from './Components/Shared/Navbar';

function App() {
  return (
    <div >
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/candidateslist' element={<CandidatesList />} />
        <Route path='/createcandidate' element={<CreateCandidate />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
