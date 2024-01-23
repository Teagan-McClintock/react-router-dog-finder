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
      { dogs.map(dog => <Link to={`/dogs/${dog.name}`}>{dog.name}</Link>) }
    </div>
  );
}

export default Nav;