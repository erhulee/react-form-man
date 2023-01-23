import { Layout } from "antd";
import ActorCanvas from "./components/actor-canvas";
import ActorSetting from "./components/actor-setting";
import Header from "./components/header";
import WigetList from "./components/wiget-list";

const Sider = Layout.Sider;
const Content = Layout.Content;

export default function MainPage() {
  return (
    <Layout style={{ width: "100%", height: "100vh" }}>
      <Layout.Header style={{ backgroundColor: "#3C81F6" }}>
        <Header></Header>
      </Layout.Header>
      <Layout>
        <Sider theme="light" width={"350px"}>
          <WigetList></WigetList>
        </Sider>
        <Content>
          <ActorCanvas></ActorCanvas>
        </Content>
        <Sider theme="light" width={"350px"}>
          <ActorSetting></ActorSetting>
        </Sider>
      </Layout>
    </Layout>
  );
}
