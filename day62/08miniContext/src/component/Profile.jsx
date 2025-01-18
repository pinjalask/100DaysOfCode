import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user)
    return (
      <div className="text-white text-3xl font-semibold mt-6 text-center">
        Please Login
      </div>
    );

  return (
    <>
      <div className="flex flex-wrap justify-center items-center flex-col mt-6 ">
        <div className="text-white text-3xl font-semibold mb-3">
          Welcome {user.username}
        </div>
      </div>
    </>
  );
}

export default Profile;
