import { TQueryParams, TResponseRedux } from "../../../types";
import { TBooking } from "../../../types/booking.type";
import { baseApi } from "../../api/baseApi";

const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBookingFacilities: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TQueryParams) =>
            params.append(item.name, item.value as string)
          );
        }

        return {
          url: "/bookings",
          method: "GET",
          params: params,
        };
      },
      providesTags:["bookings"],
      transformResponse: (response: TResponseRedux<TBooking[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),

    getUserSingleBookings: builder.query({
      query: (id) => ({
        url: `/bookings/${id}`,
        method: "GET",
      }),
    }),
    addBooking: builder.mutation({
      query: (data) => ({
        url: "/bookings",
        method: "POST",
        body: data,
      }),
      invalidatesTags:['bookings']
    }),

    deleteBooking: builder.mutation({
      query: (id) => ({
        url: `/bookings/${id}`,
        method: "DELETE",
      }),
      invalidatesTags:['bookings']
    }),
    getAllUserBookings: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TQueryParams) =>
            params.append(item.name, item.value as string)
          );
        }

        return {
          url: "/bookings/user",
          method: "GET",
          params: params,
        };
      },
      providesTags:['bookings'],
      transformResponse: (response: TResponseRedux<TBooking[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
  }),
});

export default bookingApi;
