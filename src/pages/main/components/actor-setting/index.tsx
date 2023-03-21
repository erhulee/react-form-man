import { BetaSchemaForm } from "@ant-design/pro-form";
import { ProConfigProvider } from "@ant-design/pro-provider";
import { Card, Form } from "antd";
import actorStore from "@store/actorStore";
import { valueType } from "../../../components/value-types/index";
import { cloneDeep, omit } from "lodash-es";
import { widgetKitMap } from "../../constant";
import { findActor } from "@store/utils";
import { WidgetType } from "../../../components/wiget-list/share/Widget";
import { useSnapshot } from "valtio";
import { subscribeKey } from "valtio/utils";

type DataItem = {
  name: string;
  state: string;
};

function ActorSetting() {
  useSnapshot(actorStore);
  const [form] = Form.useForm();
  const activeActorId = actorStore.activeActorId;
  const activeActor = findActor(actorStore.actorsTree as any, activeActorId);

  // 执行实际先于 rerender
  subscribeKey(actorStore, "activeActorId", (id) => {
    form.resetFields();
    const activeActor = findActor(actorStore.actorsTree as any, id);
    console.log("aaa:");
    if (activeActor?.props) {
      const props = omit(cloneDeep(activeActor.props), ["children", "parent"]);
      form.setFieldsValue(props);
    }
  });

  const handleValueChange = (v: any) => {
    const props = cloneDeep(form.getFieldsValue());
    if (activeActor == null || activeActor.type == WidgetType.Root) {
      const rootActor = actorStore.actorsTree;
      const oldProps = rootActor.props || {};
      Object.assign(oldProps, props);
      rootActor.props = oldProps;
    } else {
      const oldProps = activeActor.props || {};
      Object.assign(oldProps, props);
      activeActor.props = oldProps;
    }
  };

  const columns = widgetKitMap[activeActor?.type || WidgetType.Root].columns;

  return (
    <ProConfigProvider valueTypeMap={valueType}>
      <Card>
        <BetaSchemaForm<DataItem>
          form={form}
          columns={columns}
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
