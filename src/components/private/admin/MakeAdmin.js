// import axios from "axios";
import React from "react";
import useReactQuery from "../../../Hooks/useReactQuery";
// import Loading from "../../Shared/Loading";
import UserList from "./UserList";
const MakeAdmin = () => {
  const url = "http://localhost:5000/users";
  const header = {
    headers: {
      authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  };
  //   const {
  //     data: users,
  //     isLoading,
  //     refetch,
  //   } = useQuery("users", () =>
  //     axios
  //       .get(url, {
  //         headers: {
  //           authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  //         },
  //       })
  //       .then((data) => {
  //         return data.data;
  //       })
  //   );
  //   if (isLoading) {
  //     return <Loading />;
  //   }
  const { data: users, refetch } = useReactQuery(url, header);
  return (
    <div className="fadeIn">
      <h2 className="text-left ml-3 text-lg text-primary font-bold">
        All Users: {users?.length}
      </h2>
      <div className="overflow-x-auto mx-5">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>Sl No.</th>
              <th>Email</th>
              <th>Make Admin</th>
              <th>Remove User</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <UserList
                key={user._id}
                index={index}
                refetch={refetch}
                user={user}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MakeAdmin;