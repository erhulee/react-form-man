import { Checkbox, Input } from "antd";
import { cloneDeep } from "lodash";
import { BaseOptions } from "../../../main/components/actor-setting/type";
import {
  BaseActor,
  baseColumns,
  OptionLikeColumns,
  WidgetType,
} from "../share/Widget";
import splitProps from "../share/splitProps";
import { FormWidgetKit } from "../share/type";
import { getFormProps } from "../../../../code-generator/splitPropsUtil";
import { omit } from "lodash-es";

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
    const { formItemProps, remainProps } = getFormProps(props);
    return `<Form.Item ${splitProps(formItemProps)}>
          <Checkbox.Group ${splitProps(remainProps)}/>
        </Form.Item>`;
  },
  createInstance: (props: any) => {
    return <Checkbox.Group {...omit(props.props, "children")}></Checkbox.Group>;
  },
};
