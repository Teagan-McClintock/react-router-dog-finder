import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from "./Nav";
import DogList from "./DogList";
import DogDetails from "./DogDetails";
import OtherRoutes from "./OtherRoutes";
import { useState } from "react";
const DOG_LIST_URL = 'http://localhost:5001/dogs';

/**Renders the app
 *
 * Props: None
 *
 * State:
 * - dogs: array [{name, age, src, facts}, ...]
 * - isDogsLoaded: boolean for if dogs is populated
 */

function App() {
  const [dogs, setDogs] = useState([]);
  const [isDogsLoaded, setIsDogsLoaded] = useState(false);

  //Commented out below as we received a suggestion to go a different route
  // useEffect(function () {
  //   async function getDogs() {
  //     const response = await fetch(DOG_LIST_URL);
  //     const dogs = await response.json();
  //     setDogs(dogs);
  //   }
  //   getDogs();
  // }, [ ]);

  /**Makes GET request to "external server" and updates dogs in state with the
   * list of dogs received once it has resolved. Also updates state to confirm
   * dogs have loaded
   */

  async function getDogs() {
        const response = await fetch(DOG_LIST_URL);
        const dogs = await response.json();
        setDogs(dogs);
        setIsDogsLoaded(true);
  }


  /**Given the name of a dog, returns the first element of the dog array in
   * state that has a dog with that name
   */

  function getDogByName(name){
    console.log("Inside getDogByName, dogs=", dogs);
    return dogs.filter(dog => dog.name.toLowerCase() === name.toLowerCase())[0];
  }

  if (dogs.length === 0 && isDogsLoaded === false){
    getDogs();
    return(<div>
      <p>Loading</p>
    </div>)
  }
  else{
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
}

export default App;
