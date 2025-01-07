import './App.css';
import About from './Components/About';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Presentation from './Components/Presentation';
import Product from './Components/Product';

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Presentation/>
      <Product/>
      <Footer/>
    </div>
  );
}

export default App;
