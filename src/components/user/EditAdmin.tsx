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

const EditAdmin: FC<MatchProps> = ({ match }) => {
  const state = useTypedSelector((state) => {
    return { admins: state.admins, auth: state.auth };
  });

  const { edit } = useActions();

  const admin = _.find(state.admins, { username: match.params.username });

  if (!admin || !state.auth.signedIn) {
    return <Redirect to="/" />;
  }

  const onSubmit = (user: any) => {
    edit({ ...user, userType: "admin" });
  };

  return (
    <div className="container">
      <h3>Edit Profile</h3>
      <UserForm
        formType="Edit"
        onSubmit={onSubmit}
        user={{ username: admin.username, password: admin.password }}
      />
    </div>
  );
};

export default EditAdmin;
