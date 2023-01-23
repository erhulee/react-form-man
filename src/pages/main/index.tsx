import { Layout } from "antd";
import ActorCanvas from "./components/actor-canvas";
import Header from "./components/header";
import WigetList from "./components/wiget-list";

const Sider = Layout.Sider;
const Content = Layout.Content;

export default function MainPage() {
  return (
    <Layout style={{ width: "100%" }}>
      <Layout.Header>
        <Header></Header>
      </Layout.Header>
      <Layout>
        <Sider theme="light">
          <WigetList></WigetList>
        </Sider>
        <Content>
          <ActorCanvas></ActorCanvas>
        </Content>
        <Sider>right sidebar</Sider>
      </Layout>
    </Layout>
  );
}
