import './App.css'
import {Route, Routes} from 'react-router-dom'
import Home from'./Components/Pages/Home'
import Navbar from'./Components/Navbar/Navbar'
import Users from './Components/Pages/User'



function App() {
  return (

    <div className="App">
 
      
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>}> Home </Route>
          <Route path='/Users' element={<Users/>}>UserDetail</Route>
      </Routes>
      
    
    </div>
  );
}

export default App;