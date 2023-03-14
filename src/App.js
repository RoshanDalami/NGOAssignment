import { Routes,Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import Home from './pages/Home';
import Activities from './pages/Activities';
import About from './pages/About';


function App() {
  return (
    <div className="App">
      
      
      <Routes>
        <Route path='/' element={<NavBar/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/activities' element={<Activities/>}/>
        <Route path='/about' element={<About/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
