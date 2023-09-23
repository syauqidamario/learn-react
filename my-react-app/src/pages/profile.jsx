import { useLogin } from "../hooks/useLogin";

/* eslint-disable react/react-in-jsx-scope */
const ProfilePage = () => {

      // eslint-disable-next-line no-unused-vars
      const username = useLogin();
      return (
            <div>
                  <h1>Profile</h1>
                  Username: {username}
            </div>
      );
};

export default ProfilePage;