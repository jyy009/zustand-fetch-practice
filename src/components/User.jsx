import { useUserStore } from "../stores/useUserStore";
import { useEffect } from "react";

export const User = () => {
  //think if you can destructure or use specific selectors
  //specific selector:
  // const userData = useUserStore(state => state.userData)
  const { userData, loading, error, fetchUserData } = useUserStore();

  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

  if (loading) {
    return <div>loading...</div>;
  }
  if (error) {
    return <div>Eroor: {error}</div>;
  }

  return userData ? (
    <div>
      <h2>User</h2>
      <p>
        Name: {userData.name.first} {userData.name.last}
      </p>
      <img src={userData.picture.medium} alt="user" />
    </div>
  ) : null;
};
