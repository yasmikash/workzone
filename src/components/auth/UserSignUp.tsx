import UserForm from "../UserForm";
import { useActions } from "../../hooks/useActions";

const UserSignUp = () => {
  const { signUp } = useActions();

  const onSubmit = (user: any) => {
    signUp({ ...user, userType: "user", projectName: null });
  };

  return (
    <div className="container">
      <h3>Sign Up - User</h3>
      <UserForm onSubmit={onSubmit} formType="Sign Up" />
    </div>
  );
};

export default UserSignUp;
