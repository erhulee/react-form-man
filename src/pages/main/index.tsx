import useWindowResize from "@hooks/useResize";
import { Layout, Tabs } from "antd";
import { useState } from "react";
import useDeleteKeyBoard from "../../hooks/useDeleteKeyBoard";
import { ComponentIcon, TreeIcon } from "../../Icons";
import { ActorActions } from "../../store/actorStore";
import ActorCanvas from "./components/actor-canvas";
import Header from "./components/actor-header";
import ActorSetting from "./components/actor-setting";
import ActorTree from "./components/actor-tree";
import WidgetList from "./components/widget-list";

const Sider = Layout.Sider;
const Content = Layout.Content;

const scrollStyle: React.CSSProperties = {
  paddingBottom: "16px",
  // 不占据空间，auto 会因为tab的触碰到边缘，不断滚动
  overflow: "overlay",
};

export default function MainPage() {
  useDeleteKeyBoard(ActorActions.deleteActiveActor);
  const [leftSiderWidth, setLeftSiderWidth] = useState(350);

  useWindowResize(({ width }) => {
    if (width < 1920) {
      setLeftSiderWidth(200);
    } else {
      setLeftSiderWidth(350);
    }
  });
  return (
    <Layout style={{ width: "100%", height: "100vh" }}>
      <Layout.Header style={{ backgroundColor: "#3C81F6" }}>
        <Header></Header>
      </Layout.Header>
      <Layout>
        <Sider
          theme="light"
          width={leftSiderWidth}
          style={scrollStyle}
          className="border-r-2 border-solid border-y-0 border-l-0 border-gray-200"
        >
          <Tabs
            items={[
              {
                label: (
                  <span className=" flex items-center">
                    <ComponentIcon className=" mr-2"></ComponentIcon>

                    {leftSiderWidth == 350 && "组件"}
                  </span>
                ),
                key: "元件",
                children: <WidgetList />,
              },
              {
                label: (
                  <span className=" flex items-center">
                    <TreeIcon className=" mr-2"></TreeIcon>
                    {leftSiderWidth == 350 && "组件树"}
                  </span>
                ),
                key: "组件树",
                children: <ActorTree></ActorTree>,
              },
            ]}
          ></Tabs>
        </Sider>
        <Content
          onClick={() => ActorActions.activeActor(null)}
          style={scrollStyle}
        >
          <ActorCanvas></ActorCanvas>
        </Content>
        <Sider
          theme="light"
          width={"350px"}
          style={scrollStyle}
          className="border-l-2 border-solid border-y-0 border-r-0 border-gray-200"
        >
          <ActorSetting></ActorSetting>
        </Sider>
      </Layout>
    </Layout>
  );
}
