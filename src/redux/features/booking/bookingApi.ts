import { TQueryParams, TResponseRedux } from "../../../types";
import { TBooking } from "../../../types/booking.type";
import { TFacilities } from "../../../types/facilities.type";
import { baseApi } from "../../api/baseApi";

const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllFacilities: builder.query({
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
      transformResponse: (response: TResponseRedux<TBooking[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),

    addBooking: builder.mutation({
      query: (data) => ({
        url: "/bookings",
        method: "POST",
        body: data,
      }),
    }),

    deleteBooking: builder.query({
      query: (id) => ({
        url: `/bookings/${id}`,
        method: "DELETE",
      }),
    }),
    userBookings: builder.query({
      query: (id) => ({
        url: `/bookings/user/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export default bookingApi;
