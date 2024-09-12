import './App.css';
import Counter from './components/Counter';
import CounterWithState from './components/CounterWithState';
import StateBatching from './components/StateBatching';
import Styler from './components/Styler';
import Theme from './components/Theme';
import ThemeOpti from './components/ThemeOpti';

function App() {
  return (
    <div className="App">
      <h1>This is app Component</h1>
      {/* <Counter/> */}
      {/* <CounterWithState/> */}
      {/*
      // <CounterWithState/>
      // <CounterWithState/> 
      
      //if we call like this then all three instances of component CounterWithState will be treated as independent instance hence on changing state in one will not affect others.
      */}

      {/* <Styler/> */}
      {/* <Theme/> */}

      <ThemeOpti/>
      {/* <StateBatching/> */}
    </div>
  );
}

export default App;
