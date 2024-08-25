import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    userGet: builder.query({
      query: (id) => ({
        url: `/auth/user/${id}`,
        method: "GET",
      }),
      // providesTags: ["userLogin"],
    }),
    register: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/signup",
        method: "POST",
        body: userInfo,
      }),
    }),
    login: builder.mutation({
      query: (loginData) => ({
        url: "/auth/login",
        method: "POST",
        body: loginData,
      }),
      // invalidatesTags: ["userLogin"],
    }),
  }),
});

export default authApi;
