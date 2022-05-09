import './App.css';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import Contact from './pages/Contact/Contact'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <div id='home'>
        <Home/>
      </div>
      <div id='about'>
        <About/>
      </div>
      <div id='services'>
        <Services/>
      </div>
      <div id='contact'>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
