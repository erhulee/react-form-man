import { Switch } from "antd";
import { cloneDeep } from "lodash";
import { BaseOptions } from "../../actor-setting/type";
import { BaseActor, baseColumns, WidgetType } from "../share/Widget";
import clearFormItemProps from "../share/clearFormItemProps";
import splitProps from "../share/splitProps";
import { FormWidgetKit } from "../share/type";
import { overLoadColumns } from "../share/overLoadColumns";
import { getFormProps } from "../../../../../code-generator/splitPropsUtil";

export type SwitchActor = BaseActor & {
  type: WidgetType.Switch;
  props: BaseOptions;
};

export const switchWidgetKit: FormWidgetKit = {
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
    const {formItemProps,remainProps} = getFormProps(props);
    // const needValuePropName = formItemProps.initialValue != null;
    // if (needValuePropName) {
    //   formItemProps.valuePropName = "checked";
    // }
    return `<Form.Item ${splitProps(formItemProps)} >
          <Switch ${splitProps(remainProps)}/>
        </Form.Item>`;
  },
  createInstance: (props: any) => {
    return <Switch {...props}></Switch>;
  },
};
