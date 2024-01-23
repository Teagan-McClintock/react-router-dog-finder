import { Link } from "react-router-dom";
import "./Nav.css";
/**Renders a navbar with a list of dogs and links to their detail pages
 *
 * Props:
 * -dogs: array of dog objects
 *
 * State: none
 */

function Nav({ dogs }) {
  return (
    <div className="Nav">
      {dogs.map(dog =>
        <Link className="Nav-link" key={`nav-${dog.name}`} to={`/dogs/${dog.name}`}>
          {dog.name}
        </Link>
      )}
    </div>
  );
}

export default Nav;