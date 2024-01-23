import { useParams } from "react-router-dom";
import OtherRoutes from "./OtherRoutes";
/**"Profile" page for a specific dog to display all their information
 *
 * Props: getDogByName: function to find the specific dog object in App's state
 *
 * State: None
 */

function DogDetails({ getDogByName }) {
  const { name } = useParams();
  console.log("got to DogDetails, name=", name);

  const dog = getDogByName(name);
  if (!dog) {
    return (
      <OtherRoutes />
    );
  }

  return (
    <div className="DogDetails">
      <p>Name: {dog.name}</p>
      <img alt="test" src={`/${dog.src}.jpg`} />
      <p>Age: {dog.age}</p>
      <div>Facts:
        <ul>
          {dog.facts.map(fact => <li key={fact}>{fact}</li>)}
        </ul>
      </div>
    </div>);
}

export default DogDetails;