import { BetaSchemaForm } from "@ant-design/pro-form";
import { ProConfigProvider } from "@ant-design/pro-provider";
import { Card, Form } from "antd";
import actorStore, { ActorActions } from "../../../../store/actorStore";
import { valueType } from "../../value-types/index";

import { cloneDeep } from "lodash";
import { widgetKitMap } from "../../constant";
import { findActor } from "../../../../store/utils";
import { WidgetType } from "../wiget-list/share/Widget";
import { useSnapshot } from "valtio";
import GlobalSettingForm from "./global-setting-form";
type DataItem = {
  name: string;
  state: string;
};

function ActorSetting() {
  const [form] = Form.useForm();
  const snap = useSnapshot(actorStore);
  
  // const activeActor = snap.activeActor;
  const activeActorId = actorStore.activeActorId;
  const treeRootNode = actorStore.actorsTree;
  
  // use
  const activeActor = findActor(actorStore.actorsTree as any, activeActorId);
  // useSubscribe(actorStore, (op) => {
  //   if (op[0][1] == "activeActor") {
  //     update();
  //     form.resetFields();
  //     syncWithStore();
  //   }
  // });

  const handleValueChange = (v: any) => {
    const props = cloneDeep(form.getFieldsValue());
    activeActor?.props && (Object.assign(activeActor.props, props));
    ActorActions.updateTree();
  };


  if (activeActorId == treeRootNode.id || activeActor == null) return <GlobalSettingForm></GlobalSettingForm>;

  return (
    <ProConfigProvider valueTypeMap={valueType}>
      <Card>
        <BetaSchemaForm<DataItem>
          form={form}
          columns={widgetKitMap[activeActor?.type || WidgetType.Root].columns}
          layout="horizontal"
          submitter={false}
          labelAlign="left"
          labelCol={{
            span: 8,
          }}
          labelWidth={10}
          onValuesChange={handleValueChange}
        />
      </Card>
    </ProConfigProvider>
  );
}

export default ActorSetting;
