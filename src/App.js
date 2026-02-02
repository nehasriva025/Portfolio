import './App.css';
// import NavBar from '/components/NavBar/NavBar';
import Home  from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import AnimatedCursor from "./animations/AnimatedCursor";

function App() {
  return (
    <div className="App">
       {/* <NavBar></NavBar> */}
      <div id="content">
        <Home></Home>
        <About></About>
        <Projects></Projects>
      </div>
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        color="255, 0, 0"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
      />
    </div>
  );
}

export default App;
