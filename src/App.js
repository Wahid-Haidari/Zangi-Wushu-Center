import React, {useState} from 'react';
import './App.css';
import Menu from './components/menu/Menu';
import Home from './components/Home';
import About from './components/About';
import AboutWushu from './components/AboutWushu';
import Schedule from './components/schedule/Schedule';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Events from './components/Events';


function App() {

  const [currentMenuOption , selectMenuOption] = useState('home');
  

  return (
    <div class="text-center">
      <Menu selectMenuOption={selectMenuOption}/>
      {currentMenuOption ==='home' && <Home/>}
      {currentMenuOption ==='aboutUs' && <About/>}
      {currentMenuOption ==='aboutWushu' && <AboutWushu/>}
      {currentMenuOption ==='schedule' && <Schedule/>}
      {currentMenuOption ==='gallery' && <Gallery/>}
      {currentMenuOption ==='events' && <Events/>}
      {currentMenuOption ==='contact' && <Contact/>}
    </div>
  );
}


export default App;
