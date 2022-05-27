import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import LandingPage from './pages/LandingPage';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Signup from './pages/Signup';
import Error from './pages/Error';
import Alert from './components/Alert';
import { UserState } from './Context';
function App() {
  const {user} = UserState()
  return (
    <div className="App">
    
      
      <Router>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="*" element={<Error/>}/>
        {user ? "Logout" :  <Route exact path="/" element={<LandingPage/>}/>}

        </Routes>
          
        <Alert/>
          
      </Router>
    </div>
  );
}

export default App;
