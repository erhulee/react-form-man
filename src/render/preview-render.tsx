import { useSnapshot } from "valtio";
import actorStore from "@store/actorStore";
import {
  Actor,
  getWidgetCategory,
  isFormWidget,
} from "src/pages/main/components/wiget-list/share/Widget";
import { cloneDeep } from "lodash-es";
import clearFormItemProps from "../pages/main/components/wiget-list/share/clearFormItemProps";
import { FormItemWrap } from "./render-item-wrap";
import { Form } from "antd";
import { queryWidgetKit } from "./editor-render";
function render(node: Actor) {
  const children = node?.props?.children || [];
  const type = node.type;
  const childrenResult = children.map((child) => render(child));
  const widgetKit = queryWidgetKit(type);

  const nativeProps = cloneDeep(node.props);
  const InstanceComp = widgetKit.createInstance;
  const formProps = clearFormItemProps(node.props);

  return (
    <FormItemWrap
      widgetCategory={getWidgetCategory(node.type)}
      formProps={formProps}
      widgetType={node.type}
    >
      <InstanceComp props={nativeProps} id={node.id!}>
        {isFormWidget(type) ? null : childrenResult}
      </InstanceComp>
    </FormItemWrap>
  );
}

function PreviewRender() {
  const treeNode = useSnapshot(actorStore).actorsTree as unknown as Actor;
  const result = render(treeNode);
  return <Form>{result}</Form>;
}

export default PreviewRender;
