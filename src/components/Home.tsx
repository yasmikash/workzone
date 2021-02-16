import { FC } from "react";
import { Link } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypedSelector";

const Home: FC = () => {
  const auth = useTypedSelector((state) => state.auth);

  const renderContent = () => {
    if (!auth.signedIn) {
      return (
        <div className="container">
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">User</h5>
              <Link to="/user/sign-up" className="btn btn-primary mr-2">
                Sign Up
              </Link>
              <Link to="/user/sign-in" className="btn btn-success">
                Sign In
              </Link>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Admin</h5>
              <Link to="/admin/sign-up" className="btn btn-primary mr-2">
                Sign Up
              </Link>
              <Link to="/admin/sign-in" className="btn btn-success">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="container">
        <h4>You are signed in as {auth.username}</h4>
      </div>
    );
  };

  return renderContent();
};

export default Home;
