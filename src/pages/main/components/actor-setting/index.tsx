import { BetaSchemaForm } from "@ant-design/pro-form";
import { ProConfigProvider } from "@ant-design/pro-provider";
import { Card, Form } from "antd";
import { useSnapshot } from "valtio";
import useSubscribe from "../../../../hooks/useSubscribe";
import { useUpdate } from "../../../../hooks/useUpdate";
import actorStore from "../../../../store/actorStore";
import GlobalSettingForm from "./global-setting-form";
import { valueType } from "../../value-types/index";

import { cloneDeep } from "lodash";
import { widgetKitMap } from "../../constant";
type DataItem = {
  name: string;
  state: string;
};

function ActorSetting() {
  const update = useUpdate();
  const snap = useSnapshot(actorStore);
  const [form] = Form.useForm();
  const activeActor = snap.activeActor;

  useSubscribe(actorStore, (op) => {
    if (op[0][1] == "activeActor") {
      update();
      form.resetFields();
      syncWithStore();
    }
  });

  const handleValueChange = (v: any) => {
    const props = cloneDeep(form.getFieldsValue());
    actorStore.activeActor && (actorStore.activeActor.props = props);
    const targetIndex = actorStore.actors.findIndex(
      (actor) => actor.id == activeActor?.id
    );

    if (targetIndex == -1) return;
    const target = cloneDeep(actorStore.actors[targetIndex]);
    target.props = props;
    actorStore.actors[targetIndex] = target;
  };

  const syncWithStore = () => {
    form.setFieldsValue(actorStore.activeActor?.props);
  };

  if (activeActor == null) return <GlobalSettingForm></GlobalSettingForm>;

  return (
    <ProConfigProvider valueTypeMap={valueType}>
      <Card>
        <BetaSchemaForm<DataItem>
          form={form}
          columns={widgetKitMap[activeActor.type].columns}
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
