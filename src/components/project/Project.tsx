import { Redirect } from "react-router-dom";
import { FC } from "react";
import { RouteComponentProps } from "react-router-dom";
import _ from "lodash";

import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

interface MatchParams {
  name: string;
}

interface MatchProps extends RouteComponentProps<MatchParams> {}

const Project: FC<MatchProps> = ({ match }) => {
  const state = useTypedSelector((state) => {
    return { projects: state.projects, auth: state.auth, users: state.users };
  });

  const { assignToProject, unnasignFromProject } = useActions();

  const project = _.find(state.projects, { name: match.params.name });

  if (!project || state.auth.userType !== "admin") {
    return <Redirect to="/" />;
  }

  const onChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
    username: string
  ) => {
    if (e.target.value === "assigned") {
      assignToProject({ username: username, projectName: project.name });
    } else {
      unnasignFromProject(username);
    }
  };

  const renderUsers = () => {
    if (!state.users.length) {
      return <div>No users to assign</div>;
    }

    return (
      <div className="card">
        <ul className="list-group list-group-flush">
          {state.users.map((user) => {
            if (user.projectName) {
              if (user.projectName === project.name) {
                return (
                  <li key={user.username} className="list-group-item">
                    {user.username}
                    <div className="form-group">
                      <select
                        onChange={(e) => onChange(e, user.username)}
                        className="form-control"
                        defaultValue="assigned"
                      >
                        <option value="assigned">Assigned</option>
                        <option value="not_assigned">Not Assigned</option>
                      </select>
                    </div>
                  </li>
                );
              }
            } else {
              return (
                <li key={user.username} className="list-group-item">
                  {user.username}
                  <div className="form-group">
                    <select
                      onChange={(e) => onChange(e, user.username)}
                      className="form-control"
                      defaultValue="not_assigned"
                    >
                      <option value="assigned">Assigned</option>
                      <option value="not_assigned">Not Assigned</option>
                    </select>
                  </div>
                </li>
              );
            }
          })}
        </ul>
      </div>
    );
  };

  return (
    <div className="container">
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      {renderUsers()}
    </div>
  );
};

export default Project;
