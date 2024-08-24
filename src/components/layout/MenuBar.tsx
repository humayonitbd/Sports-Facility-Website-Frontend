import { Image } from "antd";
import {  Layout, Menu } from "antd";
import { navbarItemGenerator } from "../../utils/navbarItemGenerator";
import CustomButton from "../ui/CustomButton";
import { NavLink } from "react-router-dom";
import { navbarPaths } from "../../routes/main.routes";
import { FaUser } from "react-icons/fa6";
import logo from "../../assets/login images/logo.png";





const { Header} = Layout;

const userRole = {
    ADMIN: 'admin',
    USER: 'user',
}
const MenuBar = () => {
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
        padding: "50px 100px",
        // borderBottom: "3px solid #0566FF",
        boxShadow: "0px 3px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div style={{ marginRight: "10px" }}>
        <NavLink to="/">
          <Image
            width={300}
            height={100}
            src={logo}
            preview={false}
          />
        </NavLink>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
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
            width: "270px",
          }}
        />

        <NavLink
          to={`/${user.role}/dashboard`}
          style={{
            textDecoration: "none",
            padding: "0 5px",
            fontSize: "16px",
            color: "#001529", // Change to match the theme color
          }}
        >
          <li
            style={{
              listStyle: "none",
              padding: "2px 6px",
              borderRadius: "8px",
              backgroundColor: "none",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
          >
            Dashboard
          </li>
        </NavLink>
        {user?.email ? (
          <NavLink
            to={`/login`}
            style={{
              textDecoration: "none",
              padding: "0 5px",
              fontSize: "16px",
              color: "#001529",
            }}
          >
            <li
              style={{
                listStyle: "none",
                padding: "2px 6px",
                borderRadius: "8px",
                backgroundColor: "none",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
              }}
            >
              Login
            </li>
          </NavLink>
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
            <li
              style={{
                listStyle: "none",
                padding: "2px 6px",
                borderRadius: "8px",
                backgroundColor: "none",
                cursor: "pointer",
                transition: "background-color 0.3s ease",
              }}
            >
              Login
            </li>
          </NavLink>
        )}
      </div>

      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            paddingTop: "30px",
          }}
        >
          <div>
            <FaUser
              style={{
                fontSize: "35px",
                border: "2px solid rgb(0, 69, 179)",
                borderRadius: "100%",
                padding: "5px",
                backgroundColor: "rgb(0, 69, 179)", // Background color of the icon
                color: "#fff", // Icon color set to white
              }}
            />
          </div>
        </div>
      </div>
    </Header>
  );
};

export default MenuBar;
