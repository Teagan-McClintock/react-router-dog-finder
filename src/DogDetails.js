import { useParams } from "react-router-dom";
/**"Profile" page for a specific dog
 *
 * Props: dogs: array of dog objects
 *
 * State: None
 */

function DogDetails({ getDogByName }){
  const { name } = useParams();
  console.log("got to DogDetails, name=", name);

  const dog = getDogByName(name);

  return(
  <div className="DogDetails">
    <p>Name: {dog.name}</p>
    <img alt="test" src={`/${dog.src}.jpg`}/>
    <p>Age: {dog.age}</p>
    <div>Facts: <ul>
      {dog.facts.map(fact => <li key={fact}>{fact}</li>)}
      </ul>
    </div>
  </div>)
}

export default DogDetails;