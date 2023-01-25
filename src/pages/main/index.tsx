import { Layout, Tabs } from "antd";
import { ComponentIcon, TemplateIcon } from "../../Icons";
import { ActorActions } from "../../store/actorStore";
import ActorCanvas from "./components/actor-canvas";
import Header from "./components/actor-header";
import ActorSetting from "./components/actor-setting";
import FormShop from "./components/form-shop";
import WigetList from "./components/wiget-list";

const Sider = Layout.Sider;
const Content = Layout.Content;

const contentStyle: React.CSSProperties = {
  paddingBottom: '16px',
  overflow: 'auto'
};

export default function MainPage() {
  return (
    <Layout style={{ width: "100%", height: "100vh" }}>
      <Layout.Header style={{ backgroundColor: "#3C81F6" }}>
        <Header></Header>
      </Layout.Header>
      <Layout>
        <Sider theme="light" width={"350px"}>
          <Tabs
            items={[
              {
                label: (
                  <span className=" flex items-center">
                    <ComponentIcon className=" mr-2"></ComponentIcon> 组件
                  </span>
                ),
                key: "组件",

                children: <WigetList></WigetList>,
              },
              {
                label: (
                  <span className=" flex items-center">
                    <TemplateIcon className=" mr-2"></TemplateIcon>模版
                  </span>
                ),
                key: "模版",
                children: <FormShop></FormShop>,
              },
            ]}
          ></Tabs>
        </Sider>
        <Content onClick={() => ActorActions.activeActor(null)} style={contentStyle}>
          <ActorCanvas></ActorCanvas>
        </Content>
        <Sider theme="light" width={"350px"}>
          <ActorSetting></ActorSetting>
        </Sider>
      </Layout>
    </Layout>
  );
}
