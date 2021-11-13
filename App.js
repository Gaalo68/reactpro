import logo from './logo.svg';
import './App.css';

function App() {

  return (
    <div className="App">
     
     <select>
       <option value="casa en llamas">casa en llamas</option>
       <option value="futurama">futurama</option>
       <option value="History">History</option>
       <option value="matrix">matrix</option>
       <option value="perrito">perrito</option>
     </select>

    <input type="text" placeholder="linea1"/>
    <br/>
    <input type="text" placeholder="linea2"/>
    <button>Exportar</button>

    <div>
      <span>Linea 1</span>
      <span>Linea 1</span>
    </div>
    </div>
  );
}

export default App;
