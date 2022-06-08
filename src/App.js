
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CandidatesList from './Components/Pages/CandidatesList';
import CreateCandidate from './Components/Pages/CreateCandidate';
import Home from './Components/Pages/Home';
import Login from './Components/Pages/Login';
import SignUp from './Components/Pages/SignUp';
import Navbar from './Components/Shared/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UpdateCandidate from './Components/Pages/UpdateCandidate';
import PrivateRoute from './Components/Shared/PrivateRoute';

function App() {
  return (
    <div >
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        
        <Route element={<PrivateRoute />}>
        <Route path='/updatecandidates/:id' element={<UpdateCandidate/>} />
        <Route path='/candidateslist' element={<CandidatesList />} />
        <Route path='/createcandidate' element={<CreateCandidate />} />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
