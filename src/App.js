import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingNavbar from './Components/LandingComponents/LandingNavbar';
import LandingPage from './Components/LandingComponents/LandingPage';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Userhome from './Components/User/Userhome';
import Features from './Components/User/Features';
import Navbar from './Components/User/Navbar';
import UserLogin from './Components/User/UserLogin';
import UserSignup from './Components/User/UserSignup';
import UserFooter from './Components/User/UserFooter';

function App() {

  return (
    <BrowserRouter>
      <div className="App">

      <Routes>
          
         
          {/* <Route exact path="/" element={<LandingPage/>} />
          <Route exact path="user/" element={<Userhome/>} /> */}
          <Route exact path="/Features" element={[<LandingPage/>,<Features/>]} />
          <Route exact path="/Navbar" element={<Navbar/>} />
          <Route exact path="/UserLogin" element={<UserLogin/>} />
          <Route exact path="/UserSignup" element={<UserSignup/>} />
          <Route exact path="/UserFooter" element={<UserFooter/>} />
          </Routes>
          



      </div>
    </BrowserRouter>
  )
}
export default App;
