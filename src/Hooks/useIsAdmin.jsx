// import React from "react";
// import useAuth from "./useAuth";
// import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "./useAxiosSecure";

// const useIsAdmin = () => {
//   const { userInfo, loading } = useAuth();
//   const axiosSecure = useAxiosSecure();
//   const { data: isAdmin, isPending } = useQuery({
//     queryKey: [userInfo?.email, "isAdmin"],
//     enabled: !loading, //need to ask about "enabled"
//     queryFn: async () => {
//       const res = await axiosSecure.get(`/user/admin/${userInfo.email}`);
//       return res.data?.admin;
//     },
//   });
//   return [isAdmin, isPending];
// };

// export default useIsAdmin;
