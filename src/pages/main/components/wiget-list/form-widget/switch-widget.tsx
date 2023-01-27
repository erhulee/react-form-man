import { Switch } from "antd";
import { cloneDeep } from "lodash";
import { BaseOptions } from "../../actor-setting/type";
import { BaseActor, baseColumns, WidgetType } from "../share/Widget";
import clearFormItemProps from "../share/clearFormItemProps";
import splitProps from "../share/splitProps";
import { FormWigetKit } from "../share/type";
import { overLoadColumns } from "../share/overLoadColumns";

export type SwitchActor = BaseActor & {
  type: WidgetType.Switch;
  props: BaseOptions;
};

export const switchWigetKit: FormWigetKit = {
  columns: overLoadColumns([
    ...baseColumns,
    {
      title: "初始值",
      dataIndex: "initialValue",
      valueType: "switch",
    },
  ]),
  generate(_props: any) {
    const props = cloneDeep(_props);
    const formItemProps = clearFormItemProps(props);
    const needValuePropName = formItemProps.initialValue != null;
    if (needValuePropName) {
      formItemProps.valuePropName = "checked";
    }
    return `<Form.Item ${splitProps(formItemProps)} >
          <Switch ${splitProps(props)}/>
        </Form.Item>`;
  },
  createInstance: (props: any) => {
    return <Switch {...props}></Switch>;
  },
};
