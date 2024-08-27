import { TQueryParams, TResponseRedux } from "../../../types";
import { TDBUser } from "../../../types/booking.type";
import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TQueryParams) =>
            params.append(item.name, item.value as string)
          );
        }

        return {
          url: "/auth/all-users",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["allUsers"],
      transformResponse: (response: TResponseRedux<TDBUser[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
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
      invalidatesTags: ["allUsers"],
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
