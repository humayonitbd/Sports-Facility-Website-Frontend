
import {  Space, Table, TableColumnsType, TableProps } from "antd";
import bookingApi from "../../../../../redux/features/booking/bookingApi";
import CustomModal from "../../../../../components/ui/CustomModal";
import SmallLoading from "../../../../../components/ui/SmallLoading";

export type TTableData = {
  _id: string;
  date: string;
  startTime: string;
  endTime: string;
  payableAmount: number;
  isBooked: string;
  paymentStatus: string;
  userName: string;
  userEmail: string;
  timeRange: string;
  status: string;
  facility: string; // Using the facility name as a string
  createdAt: string;
  updatedAt: string;
};


const AllBookings = () => {
  const {
    data: bookingfacilities,
    isLoading,
    isFetching,
  } = bookingApi.useGetAllBookingFacilitiesQuery(null);
  // console.log("facilities booking data", bookingfacilities?.data);
 

 if (isLoading) {
   return <SmallLoading />;
 }

const tableData: TTableData[] =
  bookingfacilities?.data?.map(
    ({
      _id,
      date,
      startTime,
      endTime,
      payableAmount,
      isBooked,
      paymentStatus,
      user,
      status,
      facility,
      createdAt,
      updatedAt,
    }) => ({
      _id,
      userName: user?.name ?? "", 
      userEmail: user?.email ?? "",
      date,
      startTime,
      endTime,
      payableAmount,
      isBooked,
      paymentStatus,
      timeRange: `${startTime} - ${endTime}`,
      status,
      facility: facility?.name ?? "", 
      createdAt,
      updatedAt,
    })
  ) ?? [];






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
            <CustomModal bookingId={record?._id} />
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
        style={{ background: "#f2f7ff" }}
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