import { Input } from "antd";
import { cloneDeep } from "lodash";
import { BaseOptions } from "../../actor-setting/type";
import {
  BaseActor,
  baseColumns,
  InputLikeColumns,
  WidgetType,
} from "../share/Widget";
import splitProps from "../share/splitProps";
import { FormWidgetKit } from "../share/type";
import { getFormProps } from "../../../../../code-generator/splitPropsUtil";

export type InputActor = BaseActor & {
  type: WidgetType.Input;
  props: BaseOptions;
};

export const inputWidgetKit: FormWidgetKit = {
  columns: [...baseColumns, ...InputLikeColumns],
  generate(_props: any) {
    const props = cloneDeep(_props);
    const {formItemProps,remainProps} = getFormProps(props);
    return `<Form.Item ${splitProps(formItemProps)}>
          <Input ${splitProps(remainProps)}/>
        </Form.Item>`;
  },
  createInstance: (props: any) => {
    return <Input {...props}></Input>;
  },
};
