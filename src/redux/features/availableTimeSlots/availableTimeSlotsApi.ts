import { TQueryParams, TResponseRedux } from "../../../types";
import { TAvailableTime, TFacilities } from "../../../types/facilities.type";
import { baseApi } from "../../api/baseApi";

const availableTimeSlotsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllAvailableTimeSlots: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TQueryParams) =>
            params.append(item.name, item.value as string)
          );
        }

        return {
          url: "/check-availability",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (response: TResponseRedux<TAvailableTime[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
  }),
});

export default availableTimeSlotsApi;
