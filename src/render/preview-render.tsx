import { useSnapshot } from "valtio";
import actorStore from "@store/actorStore";
import {
  Actor,
  getWidgetCategory,
  isFormWidget,
} from "src/pages/components/wiget-list/share/Widget";
import { cloneDeep, cond } from "lodash-es";
import clearFormItemProps from "../pages/components/wiget-list/share/clearFormItemProps";
import { FormItemWrap } from "./render-item-wrap";
import { Form } from "antd";
import { queryWidgetKit } from "./editor-render";
import { getFormProps } from "src/code-generator/splitPropsUtil";
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
  const { remainProps: formProps } = getFormProps(treeNode.props);

  return (
    <div className=" m-4 bg-white p-4 border-solid border-slate-800 border rounded-md">
      <Form {...formProps}>{result}</Form>
    </div>
  );
}

export default PreviewRender;
