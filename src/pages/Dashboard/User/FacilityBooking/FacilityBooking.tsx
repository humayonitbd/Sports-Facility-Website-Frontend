
import { Button,  Space, Table, TableColumnsType, TableProps } from "antd";
;
import bookingApi from "../../../../redux/features/booking/bookingApi";
import { TBooking } from "../../../../types/booking.type";
import { DeleteOutlined } from "@ant-design/icons";
import CustomModal from "../../../../components/ui/CustomModal";
import Swal from "sweetalert2";
import SmallLoading from "../../../../components/ui/SmallLoading";


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


const FacilityBooking = () => {
    const {data:bookingfacilities, isLoading,isFetching} = bookingApi.useGetAllUserBookingsQuery(null);
    // console.log("facilities booking data", bookingfacilities?.data);
    const [deleteBooking] = bookingApi.useDeleteBookingMutation();
    
   if (isLoading) {
     return <SmallLoading />;
   }

    const handleCancelBooking = async (bookingId: string) => {
      try {
        const result = await Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        });

        if (result.isConfirmed) {
          const res = await deleteBooking(bookingId).unwrap();
          console.log("deleted res", res);

          if (res.success) {
            await Swal.fire({
              title: `${res.message}`,
              text: "Your booking has been deleted.",
              icon: "success",
            });
          }
        }
      } catch (error: any) {
        Swal.fire({
          title: "Error",
          text: error?.message || "There was an error cancelling your booking.",
          icon: "error",
        });
      }

    };




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
                <Button
                  onClick={() => handleCancelBooking(record._id)}
                  danger
                  icon={<DeleteOutlined />}
                >
                  Cancel
                </Button>
              </Space>
            );
          },
          width: "1%",
        },
      ];

      const onChange: TableProps<TTableData>["onChange"] = (
        _pagination,
        filters,
        _sorter,
        extra
      ) => {
        
      };

    

    return (
      <>
        {bookingfacilities?.data?.length ? (
          <>
            <Table
              columns={columns}
              loading={isFetching}
              dataSource={tableData}
              onChange={onChange}
              showSorterTooltip={{ target: "sorter-icon" }}
              pagination={false}
            />
          </>
        ) : (
          <>
            <div style={{ textAlign: "center", color: "#003180", fontSize:"20px" }}>
              <h1 style={{paddingTop:"200px"}}>Booking is not Available.Please booking now!!</h1>
            </div>
          </>
        )}

        {/* <Pagination
          pageSize={totalData?.limit}
          onChange={(value) => setPage(value)}
          total={totalData?.total}
        /> */}
      </>
    );
};

export default FacilityBooking;