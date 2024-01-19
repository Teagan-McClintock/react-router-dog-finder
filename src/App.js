import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from "./Nav";
import DogList from "./DogList";
import DogDetails from "./DogDetails";
import OtherRoutes from "./OtherRoutes";
import { useEffect, useState } from "react";
const DOG_LIST_URL = 'http://localhost:5001/dogs';

/**Renders the app
 *
 * Props: None
 *
 * State: None
 */

function App() {
  const [dogs, setDogs] = useState([]);

  // useEffect(function () {
  //   async function getDogs() {
  //     const response = await fetch(DOG_LIST_URL);
  //     const dogs = await response.json();
  //     setDogs(dogs);
  //   }
  //   getDogs();
  // }, [ ]);

  async function getDogs() {
        const response = await fetch(DOG_LIST_URL);
        const dogs = await response.json();
        setDogs(dogs);
  }

  function getDogByName(name){
    console.log("Inside getDogByName, dogs=", dogs);
    return dogs.filter(dog => dog.name === name)[0];
  }

  if (dogs.length === 0) getDogs();

  return (
    <BrowserRouter>
      <Nav dogs={dogs} />
      <Routes>
        <Route element={<DogDetails getDogByName={getDogByName} />} path="/dogs/:name" />
        <Route element={<DogList dogs={dogs} />} path="/dogs" />
        <Route element={<OtherRoutes />} path="/*" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
