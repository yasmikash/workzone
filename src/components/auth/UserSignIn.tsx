import UserForm from "../UserForm";
import { useActions } from "../../hooks/useActions";

const UserSignIn = () => {
  const { signIn } = useActions();

  const onSubmit = (user: any) => {
    signIn({ ...user, userType: "user" });
  };

  return (
    <div className="container">
      <h3>Sign In - User</h3>
      <UserForm onSubmit={onSubmit} formType="Sign In" />
    </div>
  );
};

export default UserSignIn;
