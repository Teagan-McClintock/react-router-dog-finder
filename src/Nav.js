import { Link } from "react-router-dom";

/**Renders a navbar with a list of dogs and links to their detail pages
 *
 * Props:
 * -dogs: array
 *
 * State: none
 */

function Nav({ dogs }) {
  return (
    <div>
      { dogs.map(dog => <p>{dog}</p>) }
    </div>
  );
}

export default Nav;