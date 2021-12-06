import './App.scss';
import {Nav, About, Market, Info, Pricing, Footer} from './components/index';

function App() {
  return (
    <div>
      <Nav/>
      <About/>
      <Market/>
      <Info/>
      <Pricing/>
      <Footer/>
    </div>
  );
}

export default App;
