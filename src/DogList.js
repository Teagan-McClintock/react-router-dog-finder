import { Link } from "react-router-dom";


/**A list of all dogs with their names as Link components and images
 *
 * Props: dogs: list of dog objects
 *
 * State: None
 */

function DogList({ dogs }) {
  console.log("Rendering DogList");
  return (
    <div>
      {dogs.map(dog =>
        <div key={`list-${dog.name}`}>
          <Link to={`/dogs/${dog.name}`}>{dog.name}</Link>
          <br></br>
          <img src={`/${dog.src}.jpg`} />
        </div>)}
    </div>
  );
}

export default DogList;