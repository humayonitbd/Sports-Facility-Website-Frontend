import { Image,Grid } from "antd";
import { Layout, Button, Dropdown, Space, Menu } from "antd";
import type { MenuProps } from 'antd';
import { navbarItemGenerator } from "../../utils/navbarItemGenerator";
import CustomButton from "../ui/CustomButton";
import { NavLink } from "react-router-dom";
import { navbarPaths } from "../../routes/main.routes";
import { FaUser } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import logo from "../../assets/logo/logo.png";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { TUser, logOut, useCurrentToken } from "../../redux/features/auth/authSlice";
import { verifyToken } from "../../utils/verifyToken";
import authApi from "../../redux/features/auth/authApi";
import Swal from "sweetalert2";





const { Header} = Layout;
const { useBreakpoint } = Grid;

const userRole = {
  USER_ADMIN: "userAdmin",
 
};
const MenuBar = () => {
  const screens = useBreakpoint();
  const contentPadding = screens.md ? "40px 100px" : "0 0";
  const token = useAppSelector(useCurrentToken);
   const dispatch = useDispatch();
  
   let user: TUser | undefined;

  if (token) {
    user = verifyToken(token);
  }
  //  console.log('menubar user', user)
  const { data: dbUser } = authApi.useUserGetQuery(user?.userId);
  // console.log("dbUser", dbUser?.data);
  const userAdmin = {
    role:'userAdmin'
  }

  // console.log("user", user);
     let navbarItems;
    //  console.log("navbarItems", navbarItems);

     switch (userAdmin?.role) {
       case userRole.USER_ADMIN:
         navbarItems = navbarItemGenerator(navbarPaths);
         break;
       case userRole.USER_ADMIN:
         navbarItems = navbarItemGenerator(navbarPaths);
         break;

       default:
         break;
     }

     const logOutHandler=async()=>{
      const res = await dispatch(logOut());
      if (res.type === "auth/logOut") {
        // Check the correct action type
        Swal.fire({
          icon: "success",
          title: `Logout Successful!`,
          showConfirmButton: false,
          timer: 1100,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: `Logout Failed!`,
          showConfirmButton: false,
          timer: 1100,
        });
      }
      // console.log('logout handler', res)
     }

     const items = [
       {
         key: "1",
         label: (
           <Button
             style={{ background: "#0566FF", color:'#fff' }}
             onClick={logOutHandler}
           >
             Logout
           </Button>
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
          {user?.email && <NavLink
            to={`/${user?.role}/dashboard`}
            style={{
              textDecoration: "none",
              padding: "0 5px",
              fontSize: "16px",
              color: "#001529",
            }}
          >
            <CustomButton>Dashboard</CustomButton>
          </NavLink>}
          {
             !user?.email && <NavLink
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
          }
          
          {user && user.email && <div
          >
            <Dropdown menu={{ items }} placement="bottom">
              
              <Image
                src={dbUser?.data?.profileImg}
                preview={false}
                style={{
                  width: "45px", 
                  height: "45px", 
                  borderRadius:'100%'
                }}
              />
            </Dropdown>
          </div>}

        </div>
      </div>
     
    </Header>
  );
};

export default MenuBar;
