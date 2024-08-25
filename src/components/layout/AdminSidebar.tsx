import { Layout, Menu } from "antd";
import { admindashboardPaths } from "../../routes/admin.dashboard.routes";

import { NavLink } from "react-router-dom";

import { userdashboardPaths } from "../../routes/user.dashboard.routes";
import { dbSideItemGenerator } from "../../utils/dbSideItemGenerator";
import { FaUser} from "react-icons/fa";
import { useAppSelector } from "../../redux/hooks";
import { TUser, useCurrentToken } from "../../redux/features/auth/authSlice";
import { verifyToken } from "../../utils/verifyToken";

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
          padding:"30px 0",
          textAlign:'center'
          }}
      >
        <NavLink to="/dashboard">
          <div style={{ }}>
            <FaUser
              style={{
                fontSize: "80px",
                border: "2px solid white",
                padding: "10px",
                borderRadius: "100%",
                color: "white",
              }}
            />
          </div>
        </NavLink>
        <h2>Humayon Forid</h2>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        style={{ background: "rgb(0, 69, 179)" }}
        defaultSelectedKeys={["4"]}
        items={sidebarItems}
      />
    </Sider>
  );
};

export default AdminSidebar;
