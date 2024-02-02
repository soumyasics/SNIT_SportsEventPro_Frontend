import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingNavbar from './Components/LandingComponents/LandingNavbar';
import LandingPage from './Components/LandingComponents/LandingPage';

function App() {

  return (
    <BrowserRouter>
      <div className="App">

      <Routes>
          <Route exact path="/" element={<LandingPage/>} />
          </Routes>
      </div>
    </BrowserRouter>
  )
}
export default App;