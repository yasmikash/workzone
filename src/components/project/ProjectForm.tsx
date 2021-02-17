import { FC, useState } from "react";

interface ProjectFormProps {
  onSubmit(project: { name: string; description: string }): void;
  project?: { name: string; description: string };
  formType: "Add" | "Edit";
}

const ProjectForm: FC<ProjectFormProps> = ({ onSubmit, project, formType }) => {
  const [name, setName] = useState<string>(project ? project.name : "");
  const [description, setDescription] = useState<string>(
    project ? project.description : ""
  );

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit({ name, description });
      }}
    >
      <div className="form-group">
        <label>Name</label>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          className="form-control"
          placeholder="Enter Project Name"
          value={name}
          required
          disabled={formType === "Edit" ? true : false}
        />
      </div>
      <div className="form-group">
        <label>Description</label>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          className="form-control"
          rows={3}
          value={description}
          required
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        {formType}
      </button>
    </form>
  );
};

export default ProjectForm;
