import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Nav from "./Nav";
import DogList from "./DogList";
import DogDetails from "./DogDetails";
import OtherRoutes from "./OtherRoutes";

const dogNames=["Fido"];

/**Renders the app
 *
 * Props: None
 *
 * State: None
 */

function App() {
  return (
    <BrowserRouter>
      <Nav dogs={dogNames}/>
      <Routes>
        <Route element= { <DogList />} path="/dogs" />
        <Route element= { <DogDetails />} path="/dogs/:name" />
        <Route element= { <OtherRoutes />} path="/*" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
