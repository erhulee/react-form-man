import { Checkbox, Input } from "antd";
import { cloneDeep } from "lodash";
import { BaseOptions } from "../../actor-setting/type";
import {
  BaseActor,
  baseColumns,
  OptionLikeColumns,
  WidgetType,
} from "../share/Widget";
import clearFormItemProps from "../share/clearFormItemProps";
import splitProps from "../share/splitProps";
import { FormWidgetKit } from "../share/type";

export type CheckboxActor = BaseActor & {
  type: WidgetType.Checkbox;
  props: BaseOptions & {
    options: Array<{ label: string; value: string }>;
  };
};

export const checkboxWidgetKit: FormWidgetKit = {
  columns: [...baseColumns, ...OptionLikeColumns],
  generate(_props: any) {
    const props = cloneDeep(_props);
    const formItemProps = clearFormItemProps(props);
    return `<Form.Item ${splitProps(formItemProps)}>
          <Checkbox.Group ${splitProps(props)}/>
        </Form.Item>`;
  },
  createInstance: (props: any) => {
    return <Checkbox.Group {...props}></Checkbox.Group>;
  },
};
