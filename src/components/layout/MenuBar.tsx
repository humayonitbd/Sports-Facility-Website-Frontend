import { Image,Grid } from "antd";
import { Layout, Button, Dropdown, Menu } from "antd";
import { navbarItemGenerator } from "../../utils/navbarItemGenerator";
import CustomButton from "../ui/CustomButton";
import { NavLink } from "react-router-dom";
import { navbarPaths } from "../../routes/main.routes";
import { useDispatch } from "react-redux";
import logo from "../../assets/logo/logo.png";
import { useAppSelector } from "../../redux/hooks";
import { TUser, logOut, useCurrentToken } from "../../redux/features/auth/authSlice";
import { verifyToken } from "../../utils/verifyToken";
import authApi from "../../redux/features/auth/authApi";
import Swal from "sweetalert2";
// import { TSidebarItem } from "../../types/route.type";





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
 
  const { data: dbUser } = authApi.useUserGetQuery(user?.userId);

  const userAdmin = {
    role:'userAdmin'
  }

 
     let navbarItems;

     switch (userAdmin?.role) {
       case userRole.USER_ADMIN:
         navbarItems = navbarItemGenerator(navbarPaths);
         break;
       default:
         break;
     }
// console.log("navbarItems", navbarItems);
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
     const imageStyle = {
       width: "45px",
       height: "45px",
       borderRadius: "100%",
       cursor: "pointer",
       border: "2px solid transparent",
       boxShadow: "0 0 10px rgba(0, 89, 230, 0.6)",
       animation: "pulseBorder 2s infinite",
     };

  return (
    <Header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "#F2F7FF",
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
              width: "100%",
              height: "70px",
              cursor: "pointer",
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
          background: "#F2F7FF",
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
          {user?.email && (
            <NavLink
              to={`/${user?.role}/dashboard`}
              style={{
                textDecoration: "none",
                padding: "0 5px",
                fontSize: "16px",
                color: "#001529",
              }}
            >
              <CustomButton>Dashboard</CustomButton>
            </NavLink>
          )}
          {!user?.email && (
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
          <div>
            {user && user.email && (
              <Dropdown menu={{ items }} placement="bottom">
                <Image
                  src={dbUser?.data?.profileImg}
                  preview={false}
                  style={imageStyle}
                />
              </Dropdown>
            )}
            <style>
              {`
          @keyframes pulseBorder {
            0% {
              box-shadow: 0 0 10px rgba(0, 89, 230, 0.6);
            }
            50% {
              box-shadow: 0 0 20px rgba(0, 89, 230, 0.8);
            }
            100% {
              box-shadow: 0 0 10px rgba(0, 89, 230, 0.6);
            }
          }
        `}
            </style>
          </div>
        </div>
      </div>
    </Header>
  );
};

export default MenuBar;
