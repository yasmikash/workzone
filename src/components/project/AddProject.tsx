import { Redirect } from "react-router-dom";

import ProjectForm from "./ProjectForm";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const AddProject = () => {
  const auth = useTypedSelector((state) => state.auth);

  const { addProject } = useActions();

  if (auth.userType !== "admin") {
    return <Redirect to="/" />;
  }

  const onSubmit = (project: any) => {
    addProject(project);
  };

  return (
    <div className="container">
      <ProjectForm onSubmit={onSubmit} formType="Add" />
    </div>
  );
};

export default AddProject;
