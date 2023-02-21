import './App.css';
import Todos from './components/todos/todos';
import Simple from './components/simple/simple';
import OnMouseMove from './components/on-resize/on-mouse-move';
import LocalStorage from './components/local-storage/local-storage';
import Focus from './components/focus/focus';
import Observer from './components/observer/observer';
import ChainedEffect from './components/chained-effect/chained-effect';

function App() {
  return (
    <div className="App">
      {/*<Simple />*/}
      {/*<Todos />*/}
      {/*<OnMouseMove />*/}
      {/*<LocalStorage />*/}
      {/*<Focus />*/}
      {/*<Observer />*/}
      <ChainedEffect />
    </div>
  );
}

export default App;
