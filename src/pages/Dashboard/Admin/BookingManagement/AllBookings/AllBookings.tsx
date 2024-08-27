
import {  Space, Table, TableColumnsType, TableProps } from "antd";
import bookingApi from "../../../../../redux/features/booking/bookingApi";
import { TBooking } from "../../../../../types/booking.type";
import CustomModal from "../../../../../components/ui/CustomModal";

export type TTableData = Pick<
  TBooking,
  | "date"
  | "startTime"
  | "endTime"
  | "payableAmount"
  | "_id"
  | "isBooked"
  | "paymentStatus"
  | "user"
> & {
  status: string;
  userId: string;
};

const AllBookings = () => {
  const {
    data: bookingfacilities,
    isLoading,
    isFetching,
  } = bookingApi.useGetAllBookingFacilitiesQuery(null);
  console.log("facilities booking data", bookingfacilities?.data);
 

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const tableData = bookingfacilities?.data?.map(
    ({
      _id,
      date,
      startTime,
      endTime,
      payableAmount,
      isBooked,
      paymentStatus,
      user,
    }) => ({
      key: _id,
      _id,
      userName: user.name,
      userEmail: user.email,
      date,
      startTime,
      endTime,
      payableAmount,
      isBooked,
      paymentStatus,
      timeRange: `${startTime} - ${endTime}`,
    })
  );

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Name",
      dataIndex: "userName",
    },
    {
      title: "Email",
      dataIndex: "userEmail",
    },
    {
      title: "Date",
      dataIndex: "date",
    },
    {
      title: "Times",
      dataIndex: `timeRange`,
    },
    {
      title: "Booking Status",
      dataIndex: "isBooked",
    },
    {
      title: "Payment Status",
      dataIndex: "paymentStatus",
    },
    {
      title: "Action",
      dataIndex: "x",
      render: (_, record) => {
        // console.log(record);
        return (
          <Space>
            <CustomModal bookingId={record._id} />
          </Space>
        );
      },
      width: "1%",
    },
  ];

  const onChange: TableProps<TTableData>["onChange"] = (
    _pagination,
    _sorter,
   
  ) => {};

  return (
    <>
      <Table
        columns={columns}
        loading={isFetching}
        dataSource={tableData}
        onChange={onChange}
        showSorterTooltip={{ target: "sorter-icon" }}
        pagination={false}
      />
      {/* <Pagination
          pageSize={totalData?.limit}
          onChange={(value) => setPage(value)}
          total={totalData?.total}
        /> */}
    </>
  );
};

export default AllBookings;