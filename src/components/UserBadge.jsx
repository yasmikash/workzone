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

  const renderUserType = () => {
    if (auth.userType === "admin") {
      return <span className="badge badge-pill badge-danger mr-2">admin</span>;
    } else {
      return <span className="badge badge-pill badge-info mr-2">user</span>;
    }
  };

  return (
    <button onClick={onClick} type="button" className="btn btn-link">
      {renderUserType()}
      Sign Out ({auth.username})
    </button>
  );
};

export default UserBatch;
