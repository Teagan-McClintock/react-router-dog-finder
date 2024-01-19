import { Navigate } from "react-router-dom";

/**Redirects to /dogs
 *
 * Props: None
 *
 * State: None
 */

function OtherRoutes(){
  return <Navigate to="/dogs" />
}

export default OtherRoutes;