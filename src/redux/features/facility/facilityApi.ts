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
    }),

    singleFacilityGet: builder.query({
      query: (id) => ({
        url: `/facility/${id}`,
        method: "GET",
       
      }),
    }),
    
  }),
});

export default facilitiesApi;
