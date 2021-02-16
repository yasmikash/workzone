import { FC } from "react";

interface DisplayFormProps {
  user: { username: string; userType: string; password: string };
  renderFooter(): void;
}

const DisplayForm: FC<DisplayFormProps> = ({ user, renderFooter }) => {
  return (
    <div className="card">
      <div className="card-body">
        <form>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              value={user.username}
              required
              disabled
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              value={user.password}
              required
              disabled
            />
          </div>
        </form>
      </div>
      {renderFooter()}
    </div>
  );
};

export default DisplayForm;
