import { FC } from "react";
import { RouteComponentProps } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import _ from "lodash";
import { Redirect } from "react-router-dom";

import UserForm from "../UserForm";

interface MatchParams {
  username: string;
}

interface MatchProps extends RouteComponentProps<MatchParams> {}

const EditUser: FC<MatchProps> = ({ match }) => {
  const state = useTypedSelector((state) => {
    return { users: state.users, auth: state.auth };
  });

  const { edit } = useActions();

  const user = _.find(state.users, { username: match.params.username });

  if (!user || !state.auth.signedIn) {
    return <Redirect to="/" />;
  }

  const onSubmit = (user: any) => {
    edit({ ...user, userType: "user" });
  };

  return (
    <div className="container">
      <h3>Edit Profile</h3>
      <UserForm
        formType="Edit"
        onSubmit={onSubmit}
        user={{ username: user.username, password: user.password }}
      />
    </div>
  );
};

export default EditUser;
