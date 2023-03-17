import { Input, Radio, Switch } from "antd";
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
import { getFormProps } from "../../../../../code-generator/splitPropsUtil";

export type RadioActor = BaseActor & {
  type: WidgetType.Radio;
  props: BaseOptions & {
    options: Array<{ label: string; value: string }>;
  };
};
export const radioWidgetKit: FormWidgetKit = {
  columns: [...baseColumns, ...OptionLikeColumns],
  generate(_props: any) {
    const props = cloneDeep(_props);
    const {formItemProps,remainProps} = getFormProps(props);
    return `<Form.Item ${splitProps(formItemProps)}>
          <Radio.Group ${splitProps(remainProps)}/>
        </Form.Item>`;
  },
  createInstance: (props: any) => {
    return <Radio.Group {...props}></Radio.Group>;
  },
};
