import { TQueryParams, TResponseRedux } from "../../../types";
import { TFacilities } from "../../../types/facilities.type";
import { baseApi } from "../../api/baseApi";

const facilitiesApi = baseApi.injectEndpoints({
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
          url: "/facility",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["facilities"],
      transformResponse: (response: TResponseRedux<TFacilities[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),

    addFacility: builder.mutation({
      query: (data) => ({
        url: "/facility",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["facilities"],
    }),

    singleFacilityGet: builder.query({
      query: (id) => ({
        url: `/facility/${id}`,
        method: "GET",
      }),
    }),

    updateSingleFacility: builder.mutation({
      query: ({ id, data }) => ({
        url: `/facility/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["facilities"],
    }),
    deleteSingleFacility: builder.mutation({
      query: (id) => ({
        url: `/facility/${id}`,
        method: "DELETE",
       
      }),
      invalidatesTags: ["facilities"],
    }),
  }),
});

export default facilitiesApi;
