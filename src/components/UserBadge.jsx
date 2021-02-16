import { Link } from "react-router-dom";

import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";

const UserBatch = () => {
  const auth = useTypedSelector((state) => state.auth);

  const { signOut } = useActions();

  const onClick = () => {
    signOut();
  };

  if (!auth.signedIn) {
    return null;
  }

  const renderUser = () => {
    if (auth.userType === "admin") {
      return (
        <>
          <Link to={`/admin/${auth.username}`} className="btn btn-link">
            <span className="badge badge-pill badge-danger mr-2">admin</span>
            {auth.username}
          </Link>
          <Link to="/projects" className="btn btn-link">
            Projects
          </Link>
        </>
      );
    } else {
      return (
        <Link to={`/user/${auth.username}`} className="btn btn-link">
          <span className="badge badge-pill badge-info mr-2">user</span>
          {auth.username}
        </Link>
      );
    }
  };

  return (
    <>
      {renderUser()}
      <button onClick={onClick} type="button" className="btn btn-link">
        Sign Out
      </button>
    </>
  );
};

export default UserBatch;
