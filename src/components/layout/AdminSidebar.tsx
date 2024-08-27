import { Layout, Menu, Image } from "antd";
import { admindashboardPaths } from "../../routes/admin.dashboard.routes";
import { userdashboardPaths } from "../../routes/user.dashboard.routes";
import { dbSideItemGenerator } from "../../utils/dbSideItemGenerator";

import { useAppSelector } from "../../redux/hooks";
import { TUser, useCurrentToken } from "../../redux/features/auth/authSlice";
import { verifyToken } from "../../utils/verifyToken";
import authApi from "../../redux/features/auth/authApi";


const userRole = {
  ADMIN: "admin",
  USER: "user",
};

const { Sider } = Layout;

const AdminSidebar = () => {
  //   const user = useAppSelector(selectCurrentUser);
  const token = useAppSelector(useCurrentToken);
  let user: TUser | undefined;

  if (token) {
    user = verifyToken(token);
  }

  let sidebarItems;
  // console.log('admin path', user?.role)
  const {data:userData} = authApi.useUserGetQuery(user?.userId);

  switch (user?.role) {
    case userRole.ADMIN:
      sidebarItems = dbSideItemGenerator(admindashboardPaths, user.role);
      break;
    case userRole.USER:
      sidebarItems = dbSideItemGenerator(userdashboardPaths, user.role);
      break;

    default:
      break;
  }

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      style={{
        height: "100vh",
        position: "sticky",
        top: "0",
        left: "0",
        background: "rgb(0, 69, 179)",
        borderRadius: "10px",
      }}
    >
      <div
        style={{
          color: "white",
          padding: "30px 0",
          textAlign: "center",
        }}
      >
        <div style={{}}>
          {userData?.data && (
            <Image
              src={userData?.data?.profileImg}
              preview={false}
              style={{
                width: "100%", // Adjust width to be responsive
                height: "100px",
                border: "2px solid white",
                padding: "5px",
                borderRadius: "100%", // Maintain aspect ratio
              }}
            />
          )}
        </div>

        <h2 style={{ lineHeight: "20px" }}>{userData?.data?.name}</h2>
        <p style={{ lineHeight: "1px" }}>{userData?.data?.email}</p>
      </div>
      <Menu
        mode="inline"
        style={{ background: "rgb(0, 69, 179)" }}
        defaultSelectedKeys={["4"]}
        items={sidebarItems}
        theme="dark"
      />
    </Sider>
  );
};

export default AdminSidebar;
