import './App.css';
import {Routes, Route, Link} from 'react-router-dom'
import Tasks from './components/Task/Task'
import Home from './components/Home/Home'
import Login from './components/Login/Login'

// import Header from './components/Header'


function App() {
  return (
    <div>  
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/task" element={<Tasks/>} />
        
      </Routes>
    </div>
  );
}

export default App;
