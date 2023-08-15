import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './Components/Home';
import Education from './Components/Education';
import ContactDetails from './Components/ContactDetails';
import Navbar from './Components/Navbar';
import Skills from './Components/Skills';
import Certification from './Components/Certification';

function App() {
  return (
    <BrowserRouter>
    <body>
    <div className="App">
     <body>
      <Navbar/>
    

     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/educationdetails' element={<Education/>}></Route>
      <Route path='/contactdetails' element={<ContactDetails/>}></Route>
      <Route path='/skills' element={<Skills/>}></Route>
      <Route path='/certification' element={<Certification/>}></Route>

     
     </Routes>
    
     </body>
    </div>
    </body>
    </BrowserRouter>
  );
}

export default App;
