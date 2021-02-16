import { FC, useState } from "react";

interface UserFormProps {
  onSubmit(user: { username: string; password: string }): void;
  formType: "Sign In" | "Sign Up" | "Edit";
  user?: { username: string; password: string };
}

const UserForm: FC<UserFormProps> = ({ onSubmit, formType, user }) => {
  const [username, setUsername] = useState<string>(user ? user.username : "");
  const [password, setPassword] = useState<string>(user ? user.password : "");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit({ username, password });
      }}
    >
      <div className="form-group">
        <label>Username</label>
        <input
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          className="form-control"
          placeholder="Enter Username"
          required
          disabled={formType === "Edit" ? true : false}
          defaultValue={formType === "Edit" ? user?.username : ""}
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="form-control"
          placeholder="Enter Password"
          required
          defaultValue={formType === "Edit" ? user?.password : ""}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        {formType}
      </button>
    </form>
  );
};

export default UserForm;
