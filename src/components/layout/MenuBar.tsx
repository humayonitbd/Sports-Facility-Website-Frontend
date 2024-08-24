import { Image,Grid } from "antd";
import { Layout, Button, Dropdown, Space, Menu } from "antd";
import type { MenuProps } from 'antd';
import { navbarItemGenerator } from "../../utils/navbarItemGenerator";
import CustomButton from "../ui/CustomButton";
import { NavLink } from "react-router-dom";
import { navbarPaths } from "../../routes/main.routes";
import { FaUser } from "react-icons/fa6";
import logo from "../../assets/logo/logo.png";





const { Header} = Layout;
const { useBreakpoint } = Grid;

const userRole = {
    ADMIN: 'admin',
    USER: 'user',
}
const MenuBar = () => {
  const screens = useBreakpoint();
  const contentPadding = screens.md ? "50px 100px" : "0 0";
    const user = {
        role:'user',
        email:''
    }
     let navbarItems;
    //  console.log("navbarItems", navbarItems);

     switch (user?.role) {
       case userRole.ADMIN:
         navbarItems = navbarItemGenerator(navbarPaths);
         break;
       case userRole.USER:
         navbarItems = navbarItemGenerator(navbarPaths);
         break;
       
       default:
         break;
     }


     const items = [
       {
         key: "1",
         label: (
           <NavLink
             target="_blank"
             rel="noopener noreferrer"
             to={`/${user.role}/dashboard`}
           >
             <CustomButton>Dashboard</CustomButton>
           </NavLink>
         ),
       },
       {
         key: "2",
         label: user?.email ? (
           <CustomButton>Logout</CustomButton>
         ) : (
           <NavLink
             to={`/login`}
             style={{
               textDecoration: "none",
               padding: "0 5px",
               fontSize: "16px",
               color: "#001529",
             }}
           >
             <CustomButton>Login</CustomButton>
           </NavLink>
         ),
       },
     ];

  return (
    <Header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "white",
        position: "sticky",
        top: 0,
        zIndex: 4,
        width: "100%",
        margin: "0 0 5px 0",
        padding: contentPadding,
        // borderBottom: "3px solid #0566FF",
        boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div style={{ marginRight: "10px", width: "100%", maxWidth: "200px" }}>
        <NavLink to="/">
          <Image
            src={logo}
            preview={false}
            style={{
              width: "100%", // Adjust width to be responsive
              height: "70px", // Maintain aspect ratio
            }}
          />
        </NavLink>
      </div>

      <Menu
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        items={navbarItems}
        style={{
          flex: 1,
          background: "white",
          borderBottom: "none",
          marginRight: "10px",
          lineHeight: "28px",
          fontSize: "16px",
          padding: "0",
        }}
      />

      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <NavLink
            to={`/${user.role}/dashboard`}
            style={{
              textDecoration: "none",
              padding: "0 5px",
              fontSize: "16px",
              color: "#001529",
            }}
          >
            <CustomButton>Dashboard</CustomButton>
          </NavLink>
          {user?.email ? (
            <CustomButton>logout</CustomButton>
          ) : (
            <NavLink
              to={`/login`}
              style={{
                textDecoration: "none",
                padding: "0 5px",
                fontSize: "16px",
                color: "#001529",
              }}
            >
              <CustomButton>Login</CustomButton>
            </NavLink>
          )}
          <div
            style={{
              paddingTop: "20px",
              display: screens.md ? "block" : "none",
            }}
          >
            <FaUser
              style={{
                fontSize: "35px",
                border: "2px solid rgb(0, 69, 179)",
                borderRadius: "100%",
                padding: "5px",
                backgroundColor: "rgb(0, 69, 179)",
                color: "#fff",
              }}
            />
          </div>
        </div>
      </div>
      <div
        style={{
          marginLeft: "5px",
          paddingTop: "20px",
          display: screens.md ? "none" : "block",
        }}
      >
        <Dropdown menu={{ items }} placement="bottom">
          <FaUser
            style={{
              fontSize: "35px",
              border: "2px solid rgb(0, 69, 179)",
              borderRadius: "100%",
              padding: "5px",
              backgroundColor: "rgb(0, 69, 179)",
              color: "#fff",
            }}
          />
        </Dropdown>
      </div>
    </Header>
  );
};

export default MenuBar;
