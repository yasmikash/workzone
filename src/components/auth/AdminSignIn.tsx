import UserForm from "../UserForm";
import { useActions } from "../../hooks/useActions";

const AdminSignIn = () => {
  const { signIn } = useActions();

  const onSubmit = (user: any) => {
    signIn({ ...user, userType: "admin" });
  };

  return (
    <div className="container">
      <h3>Sign In - Admin</h3>
      <UserForm onSubmit={onSubmit} formType="Sign In" />
    </div>
  );
};

export default AdminSignIn;
