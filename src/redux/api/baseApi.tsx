import {
  BaseQueryApi,
  BaseQueryFn,
  DefinitionType,
  FetchArgs,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import Swal from "sweetalert2";
import { logOut, setUser } from "../features/auth/authSlice";


interface ErrorResponse {
  status: number;
  data: {
    message: string;
  };
}

// Define the result type
interface Result {
  error?: ErrorResponse;
}


const baseQuery = fetchBaseQuery({
  // baseUrl: "https://online-nursery-backend.vercel.app/api",
  baseUrl: "http://localhost:5000/api",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithRefreshToken: BaseQueryFn<
  FetchArgs,
  BaseQueryApi,
  DefinitionType
> = async (args, api, extraOptions): Promise<any> => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 404) {
    Swal.fire({
      icon: "error",
      title: `${(result as Result)?.error?.data?.message}`,
      showConfirmButton: false,
      timer: 1000,
    });
  }
  // console.log('base api result',result)
  if (result?.error?.status === 401) {
    try {
      const res = await fetch(
        "http://localhost:5000/api/auth/refresh-token",
        {
          method: "POST",
          credentials: "include",
        }
      );
        console.log('res refresh api', res)
      const data = await res.json();
      if (data?.data?.accessToken) {
        const user = (api.getState() as RootState).auth.user;
      
        api.dispatch(setUser({ user, token: data.data.accessToken }));
        // Retry the original query with the new token
        result = await baseQuery(args, api, extraOptions);
      } else {
        api.dispatch(logOut());
      }
    } catch (error) {
      console.error("Failed to refresh token:", error);
    }
  }

  return result;
};



export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithRefreshToken,
  tagTypes: ['userLogin'],
  endpoints: () => ({}),
});
