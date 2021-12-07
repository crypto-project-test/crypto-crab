import './App.scss';
import {Nav, About, Market, Info, Pricing, Footer} from './components/index';

function App() {
  return (
    <div>
      <Nav/>
      <main className="main" id="main">
        <About/>
        <Market/>
        <Info/>
        <Pricing/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
