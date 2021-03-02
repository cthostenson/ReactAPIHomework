import {Posts} from './components/Posts/Posts';
import {Books} from './components/Books/Books';
import './App.scss';

function App() {
  return (
    <div className="App">
      <h1>Our first react app</h1>
      <hr/>
      <Posts/>

      <Books />
    </div>
  );
}

export default App;
