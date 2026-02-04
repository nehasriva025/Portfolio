import './App.css';
// import NavBar from '/components/NavBar/NavBar';
import Home  from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
       {/* <NavBar></NavBar> */}
      <div id="content">
        <Home></Home>
        <About></About>
        <Projects></Projects>
        <Contact></Contact>
      </div>
      
    </div>
  );
}

export default App;
