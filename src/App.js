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
   *
   * returns undefined if dog does not exist
   */

  function getDogByName(name) {
    console.log("Inside getDogByName, dogs=", dogs);
    //use
    return dogs.find(dog => dog.name.toLowerCase() === name.toLowerCase());
  }

  //remove dogs.length ===0
  if (dogs.length === 0 && isDogsLoaded === false) {
    getDogs();
    return (
    <div>
      <p>Loading</p>
    </div>);
  }
  else {
    //could change OtherRoutes to inline Navigate instead
    return (
      <div className="App">
        <BrowserRouter>
          <Nav dogs={dogs} />
          <Routes>
            <Route element={<DogDetails getDogByName={getDogByName} />}
             path="/dogs/:name" />
            <Route element={<DogList dogs={dogs} />} path="/dogs" />

            <Route element={<OtherRoutes />} path="/*" />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
