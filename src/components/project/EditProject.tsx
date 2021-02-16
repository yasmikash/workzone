import { Redirect } from "react-router-dom";
import { FC } from "react";
import { RouteComponentProps } from "react-router-dom";
import _ from "lodash";

import ProjectForm from "./ProjectForm";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

interface MatchParams {
  name: string;
}

interface MatchProps extends RouteComponentProps<MatchParams> {}

const AddProject: FC<MatchProps> = ({ match }) => {
  const { editProject } = useActions();

  const state = useTypedSelector((state) => {
    return { projects: state.projects, auth: state.auth };
  });

  const project = _.find(state.projects, { name: match.params.name });

  if (!project || state.auth.userType !== "admin") {
    return <Redirect to="/" />;
  }

  const onSubmit = (project: any) => {
    editProject(project);
  };

  return (
    <div className="container">
      <ProjectForm onSubmit={onSubmit} project={project} formType="Edit" />
    </div>
  );
};

export default AddProject;
