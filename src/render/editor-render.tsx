// 从 store 里拿到组件树，开始渲染
import { cloneDeep } from "lodash-es";
import { useSnapshot } from "valtio";
import clearFormItemProps from "../pages/components/wiget-list/share/clearFormItemProps";
import {
  Actor,
  isFormWidget,
  WidgetType,
} from "../pages/components/wiget-list/share/Widget";
import { widgetKitMap } from "../pages/main/constant";
import actorStore from "@store/actorStore";
import EmptyDivider from "./empty-divider";
import RenderItemWrap from "./render-item-wrap";

// 留一个入口支持用户上传组件
export function queryWidgetKit(type: WidgetType) {
  const widgetKit = widgetKitMap[type];
  return widgetKit;
}

function Render(node: Actor, activeActorId: string) {
  const children = node?.props?.children || [];
  const type = node.type;
  const childrenRenderResult: Array<JSX.Element> = [
    <EmptyDivider
      index={0}
      currentContainerId={node.id!}
      key={0}
    ></EmptyDivider>,
  ];

  children
    .map((child) => Render(child, activeActorId))
    .forEach((renderResult, index) => {
      childrenRenderResult.push(renderResult);
      const ResponseInsertNode = (
        <EmptyDivider
          index={index + 1}
          currentContainerId={node.id!}
          key={index + 1}
        ></EmptyDivider>
      );
      childrenRenderResult.push(ResponseInsertNode);
    });
  const widgetKit = queryWidgetKit(type);
  const nativeProps = cloneDeep(node.props);
  const InstanceComp = widgetKit.createInstance;
  const formProps = clearFormItemProps(node.props);
  const instance = (
    <RenderItemWrap
      actorData={node}
      currentActiveId={activeActorId}
      key={node.id}
      formProps={formProps}
    >
      <InstanceComp props={nativeProps} id={node.id!}>
        {isFormWidget(type) ? null : childrenRenderResult}
      </InstanceComp>
    </RenderItemWrap>
  );
  return instance;
}
function RenderRoot() {
  useSnapshot(actorStore);
  const activeActorId: string = actorStore.activeActorId;
  const actorsTreeNode = actorStore.actorsTree;
  // const globalSetting = useSnapshot(globalFormSetting);
  const rootNode = Render(actorsTreeNode, activeActorId || "");
  return <div className="  w-full h-full px-4">{rootNode}</div>;
}

export default RenderRoot;
