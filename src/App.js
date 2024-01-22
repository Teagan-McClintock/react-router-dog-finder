import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from "./Nav";
import DogList from "./DogList";
import DogDetails from "./DogDetails";
import OtherRoutes from "./OtherRoutes";
import { useEffect, useState } from "react";
const DOG_LIST_URL = 'http://localhost:5001/dogs'

const dogNames=["Fido"];

/**Renders the app
 *
 * Props: None
 *
 * State: None
 */

function App() {
  const [dogs, setDogs] = useState([]);

  useEffect(function(){
    async function getDogs(){
      const response = await fetch(DOG_LIST_URL);
      const dogs = await response.json();
      setDogs(dogs);
    }
    getDogs();
  }, [ ]);

  return (
    <BrowserRouter>
      <Nav dogs={dogNames}/>
      <Routes>
        <Route element= { <DogList dogs={dogs}/>} path="/dogs" />
        <Route element= { <DogDetails />} path="/dogs/:name" />
        <Route element= { <OtherRoutes />} path="/*" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
