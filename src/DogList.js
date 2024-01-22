
/**A list of all dogs with their names and images
 *
 * Props: dogs: list of dog objects
 *
 * State: None
 */

function DogList({ dogs }) {
  return(
  <div>
    { dogs.map(dog => <p>{dog.name}</p>) }
  </div>
  );
}

export default DogList;