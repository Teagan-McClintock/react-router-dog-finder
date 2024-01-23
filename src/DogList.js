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
      //key only has to be unique to this list
      //remove <br> and add some css instead
        <div key={`list-${dog.name}`}>
          <Link to={`/dogs/${dog.name}`}>{dog.name}</Link>

          <br></br>
          <img src={`/${dog.src}.jpg`} />
        </div>
      )}
    </div>
  );
}

export default DogList;