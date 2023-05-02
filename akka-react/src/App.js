// Ici, le classique : j'importe ce dont j'ai besoin (Méthodes (useState, etc...), images, css, ... Y compris les composants enfants)
import {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import Item01 from './Item01'
import Item02 from './Item02'
import Item03 from './Item03';

// Ici on écrit en JSX (des div classeName, etc etc...).
// C'est un composant stateFull (puisque qu'il utilise un/des state(s)) SINON ça serait un stateLess.

function App() {

  console.log("MAJ App... Un state a changé ? -_o ...");

  // ITEM 01 /////////////////////////////////////////////
  const [State01, setState01] = useState(0);
  const modifState01 = () => {
    setState01(previousState01 => previousState01 + 1)
  }
  // ITEM 01 /////////////////////////////////////////////

  // ITEM 03 /////////////////////////////////////////////
  const [State03, setState03] = useState("C'est vide ! Cliquez ci-dessous");
  const modifState03 = (data) => {
    setState03(data)
  }
  // ITEM 03 /////////////////////////////////////////////

  return (
    <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> Edit <code>src/App.js</code> and save to reload. </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer"> Learn React </a>
      </header>

      <main>
        
        {/* ITEM 01  */}
        <h1>Compteur 01 (via useState dans App) : {State01}</h1>
        <button onClick={modifState01}>Ajouter 1 au compteur</button>
        <Item01 number={State01} />
        {/* ITEM 01  */}

        <br />

        {/* ITEM 02  */}
        <h2>Compteur 02 (via useState dans Item02) : </h2>
        <Item02 func02={modifState01}/>
        {/* ITEM 02  */}

        {/* ITEM 03  */}
        <h3>Compteur 03 : {State03}</h3>
        <Item03 func03={modifState03} />
        {/* ITEM 03  */}
        {/*VOIR COMM' dans Item03.js*/}

      </main>

      <footer>
        <br /><br /><br />
        <p>Fin de page...</p>
      </footer>

    </div>
  );
}

export default App;
