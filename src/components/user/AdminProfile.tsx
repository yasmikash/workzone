import _ from "lodash";
import { RouteComponentProps } from "react-router-dom";
import { FC } from "react";
import { Redirect, Link } from "react-router-dom";

import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import DisplayForm from "./DisplayForm";

interface MatchParams {
  username: string;
}

interface MatchProps extends RouteComponentProps<MatchParams> {}

const AdminProfile: FC<MatchProps> = ({ match }) => {
  const state = useTypedSelector((state) => {
    return { admins: state.admins, auth: state.auth };
  });

  const { deleteUser, signOut } = useActions();

  const admin = _.find(state.admins, { username: match.params.username });

  if (!admin) {
    return <Redirect to="/" />;
  }

  const onClick = () => {
    deleteUser({ username: admin.username, userType: admin.userType });
    signOut();
  };

  const renderFooter = () => {
    if (admin.username !== state.auth.username) {
      return null;
    }

    return (
      <div className="card-footer">
        <Link to="/projects/add" className="btn btn-primary mr-3">
          Add Project
        </Link>
        <Link
          to={`/admin/edit/${admin.username}`}
          className="btn btn-secondary mr-3"
        >
          Edit Profile
        </Link>
        <button onClick={onClick} type="button" className="btn btn-danger">
          Delete Profile
        </button>
      </div>
    );
  };

  return (
    <div className="container">
      <DisplayForm user={admin} renderFooter={renderFooter} />
    </div>
  );
};

export default AdminProfile;
