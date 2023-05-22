import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Support from "./components/Support";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Support></Support>
    </div>
  );
}

export default App;
