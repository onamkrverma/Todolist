import './App.css';
import Home from './components/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Active from './components/Active';
import Completed from './components/Completed';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes> 
    <Route path="/" element={<Home/>}/>
    <Route path="/active" element={<Active/>}/>
    <Route path="/completed" element={<Completed/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
