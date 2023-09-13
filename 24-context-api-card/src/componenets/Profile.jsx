import userContext from "../context/userContext";
import { useContext } from "react";

const Profile = () => {
  const { user } = useContext(userContext);

  if (!user) {
    return <div>Please Login</div>;
  }

  return <div>Welcome {user.username}</div>;
};

export default Profile;
