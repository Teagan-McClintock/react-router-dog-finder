import { Link } from "react-router-dom";

/**Renders a navbar with a list of dogs and links to their detail pages
 *
 * Props:
 * -dogs: array of dog objects
 *
 * State: none
 */

function Nav({ dogs }) {
  return (
    <div>
      { dogs.map(dog => <p>{dog.name}</p>) }
    </div>
  );
}

export default Nav;