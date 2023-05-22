// Ici, le classique : j'importe ce dont j'ai besoin (Méthodes (useState, etc...), images, css, ... Y compris les composants enfants)

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {useState} from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Item01 from './Components/Items/Item01';
import Item02 from './Components/Items/Item02';
import Item03 from './Components/Items/Item03';
import Item04Images from './Components/Items/Item04Images';
import Item05Inputs from './Components/Items/Item05Inputs';
import Item06Toggle from './Components/Items/Item06ToggleONOFF';
import Item07Toggle2 from './Components/Items/Item07Toggle2';
import Item08Toggle3 from './Components/Items/Item08Toggle3';
import Item09ToggleCSS from './Components/Items/Item09ToggleCSS';
import Item10LIST from './Components/Items/Item10LIST';
import Form from './Components/Todo-List/Form';
import FormMongo from './Components/Todo-list-mongo/FormMongo';

// Ici on écrit en JSX (des div classeName, etc etc...).
// C'est un composant stateFull (puisque qu'il utilise un/des state(s)) SINON ce serait un stateLess.

function App() {

  console.log("MAJ App... Un state a changé ? -_o ...");

  // ITEM 01 /////////////////////////////////////////////
  const [State01, setState01] = useState(0);
  const modifState01 = () => {
    setState01(previousState01 => previousState01 + 1);
  };

  // ITEM 03 /////////////////////////////////////////////
  const [State03, setState03] = useState("C'est vide ! Cliquez ci-dessous");
  const modifState03 = (data) => {
    setState03(data);
  };

  return (
    <div className="App">

      <Header />

      <main>
        
        <h1>Compteur 01 (via useState dans App) : {State01}</h1>
        <button onClick={modifState01}>Ajouter 1 au compteur</button>
        <Item01 number={State01} />

        <br /><br />

        <h2>Compteur 02 (via useState dans Item02) : </h2>
        <Item02 func02={modifState01}/>

        <br /><br />

        <h3>Compteur 03 : {State03}</h3>
        <Item03 func03={modifState03} />
        {/*VOIR COMM' dans Item03.js*/}

        <br /><br />

        <Item04Images />

        <br /><br />

        <Item05Inputs />

        <br /><br />

        <Item06Toggle />

        <br /><br />

        <Item07Toggle2 />

        <br /><br />

        <Item08Toggle3 />

        <br /><br />

        <Item09ToggleCSS />

        <br /><br />

        <Item10LIST />

        <br /><br />

        <Form />

        <br /><br />

        <FormMongo />

      </main>

      <br /><br /><br />

      <Footer />

    </div>
  );
}

export default App;
