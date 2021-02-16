import UserForm from "../UserForm";
import { useActions } from "../../hooks/useActions";

const AdminSignUp = () => {
  const { signUp } = useActions();

  const onSubmit = (user: any) => {
    signUp({ ...user, userType: "admin" });
  };

  return (
    <div className="container">
      <h3>Sign Up - Admin</h3>
      <UserForm onSubmit={onSubmit} formType="Sign Up" />
    </div>
  );
};

export default AdminSignUp;
