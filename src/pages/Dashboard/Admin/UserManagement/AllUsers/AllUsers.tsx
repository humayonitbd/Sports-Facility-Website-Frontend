import { Button, Space, Table, TableColumnsType, TableProps } from "antd";
import bookingApi from "../../../../../redux/features/booking/bookingApi";
import { TDBUser } from "../../../../../types/booking.type";
import authApi from "../../../../../redux/features/auth/authApi";


export type TTableData = Pick<
  TDBUser,
  | "name"
  | "email"
  | "phone"
  | "role"
  | "_id"
  | "status"
  | "address"
  | "profileImg"
> 

const AllUsers = () => {
  const {
    data: AllUsers,
    isLoading,
    isFetching,
  } = authApi.useGetAllUsersQuery(null);
//   console.log("facilities booking data", AllUsers?.data);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const tableData = AllUsers?.data?.map(
    ({ _id, profileImg, address, status, role, phone, email, name }) => ({
      key: _id,
      _id,
      profileImg,
      address,
      status,
      role,
      phone,
      email,
      name,
    })
  );

  const columns: TableColumnsType<TTableData> = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Address",
      dataIndex: "address",
    },
    {
      title: "Status",
      dataIndex: `status`,
    },
    {
      title: "Phone",
      dataIndex: "phone",
    },
    {
      title: "Role",
      dataIndex: "role",
    },
    {
      title: "Action",
      dataIndex: "x",
      render: (_, record) => {
        // console.log(record);
        return (
          <Space>
            <Button>Blocked</Button>
          </Space>
        );
      },
      width: "1%",
    },
  ];

  const onChange: TableProps<TTableData>["onChange"] = (
    _pagination,
    _sorter
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

export default AllUsers;
