import { Link, Redirect } from "react-router-dom";

import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";

const ProjectList = () => {
  const state = useTypedSelector((state) => {
    return { projects: state.projects, auth: state.auth };
  });

  const { deleteProject } = useActions();

  if (state.auth.userType !== "admin") {
    return <Redirect to="/" />;
  }

  const renderContent = () => {
    if (!state.projects.length) {
      return <div>No available projects to show</div>;
    }

    return (
      <div>
        <h3>Available Projects</h3>
        <div className="card">
          <ul className="list-group list-group-flush">
            {state.projects.map((project) => {
              return (
                <li key={project.name} className="list-group-item">
                  <Link to={`/projects/${project.name}`}>{project.name} </Link>
                  <Link
                    to={`/projects/edit/${project.name}`}
                    className="btn btn-outline-secondary mr-2"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteProject({ name: project.name })}
                    type="button"
                    className="btn btn-outline-danger"
                  >
                    Delete
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  };

  return (
    <div className="container">
      {renderContent()}
      <Link to="/projects/add" className="btn btn-primary mt-3">
        Add Project
      </Link>
    </div>
  );
};

export default ProjectList;
