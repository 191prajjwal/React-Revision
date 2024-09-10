// import './App.css';
import './App.css'
import Footer from "./components/Footer.js";
import Header from "./components/Header.js";
import Navbar from './components/Navbar.js';

function App() {
  return (
    <>
    <Navbar/>
    <div className="container">
      <Header/>
      {Footer()}
      </div>
    </>
  );
}


export default App;

