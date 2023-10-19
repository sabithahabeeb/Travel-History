import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home'
import View from './Pages/View'
import Selected from './Pages/Selected'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Corosel from './Components/Corosel';
import History from './Pages/History';
function App() {
  return (
    <div>
      <Header/>

      <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/view'} element={<View/>}/>
        <Route path={'/history'} element={<History/>}/>

        <Route path={'/selected'} element={<Selected/>}/>

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
