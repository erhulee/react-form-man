import { Layout, Tabs } from "antd";
import { ComponentIcon, TemplateIcon, TreeIcon } from "../../Icons";
import { ActorActions } from "../../store/actorStore";
import ActorCanvas from "./components/actor-canvas";
import Header from "./components/actor-header";
import ActorSetting from "./components/actor-setting";
import ActorTree from "./components/actor-tree";
import FormShop from "./components/form-shop";
import WidgetList from "./components/wiget-list";

const Sider = Layout.Sider;
const Content = Layout.Content;

const scrollStyle: React.CSSProperties = {
  paddingBottom: '16px',
  // 不占据空间，auto 会因为tab的触碰到边缘，不断滚动
  overflow: 'overlay'
};

export default function MainPage() {
  return (
    <Layout style={{ width: "100%", height: "100vh" }}>
      <Layout.Header style={{ backgroundColor: "#3C81F6" }}>
        <Header></Header>
      </Layout.Header>
      <Layout>
        <Sider theme="light" width={"350px"} style={scrollStyle}>
          <Tabs
            items={[
              {
                label: (
                  <span className=" flex items-center">
                    <ComponentIcon className=" mr-2"></ComponentIcon> 组件
                  </span>
                ),
                key: "组件",

                children: <WidgetList />
              },
              {
                label: (
                  <span className=" flex items-center">
                    <TreeIcon className=" mr-2"></TreeIcon>组件树
                  </span>
                ),
                key: "组件树",
                children: <ActorTree></ActorTree>,
              },
            ]}
          ></Tabs>
        </Sider>
        <Content onClick={() => ActorActions.activeActor(null)} style={scrollStyle}>
          <ActorCanvas></ActorCanvas>
        </Content>
        <Sider theme="light" width={"350px"} style={scrollStyle}>
          <ActorSetting></ActorSetting>
        </Sider>
      </Layout>
    </Layout>
  );
}
