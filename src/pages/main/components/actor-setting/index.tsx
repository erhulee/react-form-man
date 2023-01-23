import { BetaSchemaForm } from "@ant-design/pro-form";
import { ProConfigProvider } from "@ant-design/pro-provider";
import { Card, Form } from "antd";
import { useSnapshot } from "valtio";
import useSubscribe from "../../../../hooks/useSubscribe";
import { useUpdate } from "../../../../hooks/useUpdate";
import actorStore from "../../../../store/actorStore";
import { columnsMap } from "../wiget-list/BaseWidget";
import GlobalSettingForm from "./global-setting-form";
import { valueType } from "../../value-types/index";
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
      target.props = props;
    }
  };

  const syncWithStore = () => {
    // form.resetFields();
    console.log("同步的数据: ", actorStore.activeActor?.props);
    form.setFieldsValue(actorStore.activeActor?.props);
  };

  console.log("render");
  syncWithStore();
  if (activeActor == null) return <GlobalSettingForm></GlobalSettingForm>;

  return (
    <ProConfigProvider valueTypeMap={valueType}>
      <Card title="组件设置">
        <BetaSchemaForm<DataItem>
          form={form}
          columns={columnsMap[activeActor.type]}
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
