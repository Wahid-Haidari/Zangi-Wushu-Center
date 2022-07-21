import React, {useState} from 'react';
import './App.css';
import Menu from './components/menu/Menu';
import Home from './components/home/Home';
import About from './components/about/About';
import AboutWushu from './components/about-wushu/AboutWushu';
import Schedule from './components/schedule/Schedule';
import Contact from './components/contact/Contact';
import Gallery from './components/gallery/Gallery';


function App() {

  const [currentMenuOption , selectMenuOption] = useState('home');
  

  return (
    <div className="App">
      <Menu selectMenuOption={selectMenuOption}/>
      {currentMenuOption ==='home' && <Home/>}
      {currentMenuOption ==='aboutUs' && <About/>}
      {currentMenuOption ==='aboutWushu' && <AboutWushu/>}
      {currentMenuOption ==='schedule' && <Schedule/>}
      {currentMenuOption ==='gallery' && <Gallery/>}
      {currentMenuOption ==='contact' && <Contact/>}
    </div>
  );
}

export default App;
