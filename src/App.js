
import './App.css';
import { Button } from 'primereact/button';
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons

function App() {
  return (
    <div className="App">
      <h1>Hello Prime react</h1>
      <Button label="Save" />
    </div>
  );
}

export default App;
