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

const UserProfile: FC<MatchProps> = ({ match }) => {
  const state = useTypedSelector((state) => {
    return { users: state.users, auth: state.auth };
  });

  const { deleteUser, signOut } = useActions();

  const user = _.find(state.users, { username: match.params.username });

  if (!user) {
    return <Redirect to="/" />;
  }

  const onClick = () => {
    deleteUser({ username: user.username, userType: user.userType });
    signOut();
  };

  const renderFooter = () => {
    if (user.username !== state.auth.username) {
      return null;
    }

    return (
      <div className="card-footer">
        <Link
          to={`/user/edit/${user.username}`}
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
      <DisplayForm user={user} renderFooter={renderFooter} />
    </div>
  );
};

export default UserProfile;
