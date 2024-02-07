import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingNavbar from './Components/LandingComponents/LandingNavbar';
import LandingPage from './Components/LandingComponents/LandingPage';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Userhome from './Components/User/Userhome';
import UserLogin from './Components/User/UserLogin';
import UserSignup from './Components/User/UserSignup';

function App() {

  return (
    <BrowserRouter>
      <div className="App">

      <Routes>
          {/* <Route exact path="/" element={<LandingPage/>} />
          <Route exact path="user/" element={<Userhome/>} /> */}
          </Routes>
{/* <UserLogin/> */}
<UserSignup/>

      </div>
    </BrowserRouter>
  )
}
export default App;
