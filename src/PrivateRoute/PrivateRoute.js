import { Button, Spinner } from "react-bootstrap";
import { Redirect, Route } from "react-router";
import useAuth from "../Firebase/HooksFirebase/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
  let { user, islooding } = useAuth();

  if (islooding) {
    return (
      <Button className="mt-5" variant="primary" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </Button>
    );
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
export default PrivateRoute;
