import { Outlet, NavLink } from "react-router-dom";
import { Layout, Space, Button } from "antd";
import { BellOutlined } from "@ant-design/icons";
import AdminSidebar from "./AdminSidebar";
import { useForm, SubmitHandler } from "react-hook-form";

const { Content, Header, Sider } = Layout;

const AdminLayout = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit: SubmitHandler<any> = (data) => {
    console.log(data);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <AdminSidebar />

      <Layout>
        <Header
          style={{
            padding: "0 24px",
            // background: "#fff",
            background: "rgb(0, 69, 179)",
            borderRadius: "5px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            boxShadow: "0 2px 8px #f0f1f2",
            position: "sticky",
            top: 0,
            zIndex: 1000,
          }}
        >
          {/* Left Section: Back to Home Button */}
          <NavLink to="/">
            <Button
              type="primary"
              style={{
                backgroundColor: "#fff",
                color: "rgb(0, 69, 179)",
              }}
            >
              Back to home
            </Button>
          </NavLink>

          {/* Center Section: Search Form */}
          <div style={{ flexGrow: 1, textAlign: "center" }}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              style={{
                display: "flex", 
                justifyContent: "center", 
                width: "100%",
                maxWidth: "400px",
                margin: "0 auto",
              }}
            >
              <input
                style={{
                  padding: "10px 15px",
                  width: "70%",
                  border: "2px solid #fff",
                  borderRadius: "8px 0 0 8px",
                  outline: "none",
                  fontSize: "16px",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                }}
                type="text"
                {...register("search")}
                placeholder="Search..."
              />
              <button
                style={{
                  padding: "10px 5px",
                  width: "20%",
                  background: "rgb(0, 69, 179)",
                  color: "#fff",
                  border: "2px solid",
                  borderRadius: "0 8px 8px 0",
                  cursor: "pointer",
                  fontSize: "16px",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                  transition: "all 0.3s ease",
                }}
                type="submit"
              >
                Search
              </button>
            </form>
          </div>

          {/* Right Section: Notification Icon */}
          <div>
            <Space>
              <BellOutlined style={{ fontSize: "20px", color: "#fff", border:'2px solid #fff', borderRadius:'100%', padding:'5px' }} />
            </Space>
          </div>
        </Header>

        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <div
            style={{
              padding: 24,
              background: "#fff",
              minHeight: 360,
              borderRadius: "8px",
              boxShadow: "0 2px 8px #f0f1f2",
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
