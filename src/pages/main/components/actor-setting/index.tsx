import { BetaSchemaForm } from "@ant-design/pro-form";
import { ProConfigProvider } from "@ant-design/pro-provider";
import { Card, Form } from "antd";
import { useSnapshot } from "valtio";
import useSubscribe from "../../../../hooks/useSubscribe";
import { useUpdate } from "../../../../hooks/useUpdate";
import actorStore from "../../../../store/actorStore";
import GlobalSettingForm from "./global-setting-form";
import { valueType } from "../../value-types/index";
import { wigetKitMap } from "../wiget-list/form-widget";
type DataItem = {
  name: string;
  state: string;
};

function ActorSetting() {
  const update = useUpdate();
  useSubscribe(actorStore, update);
  const snap = useSnapshot(actorStore);
  const activeActor = snap.activeActor;
  const [form] = Form.useForm();
  const handleValueChange = (v: any) => {
    const props = form.getFieldsValue();

    actorStore.activeActor && (actorStore.activeActor.props = props);
    const target = actorStore.actors.find(
      (actor) => actor.id == activeActor?.id
    );

    if (target) {
      Object.assign(target.props, props);
    }
    console.log("after change:", target);
  };

  const syncWithStore = () => {
    form.setFieldsValue(actorStore.activeActor?.props);
  };

  syncWithStore();
  if (activeActor == null) return <GlobalSettingForm></GlobalSettingForm>;

  return (
    <ProConfigProvider valueTypeMap={valueType}>
      <Card title="组件设置">
        <BetaSchemaForm<DataItem>
          form={form}
          columns={wigetKitMap[activeActor.type].columns}
          layout="horizontal"
          submitter={false}
          grid={true}
          rowProps={{
            gutter: [16, 16],
          }}
          onValuesChange={handleValueChange}
        />
      </Card>
    </ProConfigProvider>
  );
}

export default ActorSetting;
