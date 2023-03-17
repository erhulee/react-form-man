import { Input } from "antd";
import { cloneDeep } from "lodash";
import { BaseOptions } from "../../actor-setting/type";
import {
  BaseActor,
  baseColumns,
  InputLikeColumns,
  WidgetType,
} from "../share/Widget";
import clearFormItemProps from "../share/clearFormItemProps";
import splitProps from "../share/splitProps";
import { FormWidgetKit } from "../share/type";
import { getFormProps } from "../../../../../code-generator/splitPropsUtil";

export type TextareaActor = BaseActor & {
  type: WidgetType.Textarea;
  props: BaseOptions;
};

export const TextareaWidgetKit: FormWidgetKit = {
  columns: [...baseColumns, ...InputLikeColumns],
  generate(_props: any) {
    const props = cloneDeep(_props);
    const {formItemProps,remainProps} = getFormProps(props);
    return `<Form.Item ${splitProps(formItemProps)}>
          <Input.TextArea ${splitProps(remainProps)}/>
        </Form.Item>`;
  },
  createInstance: (props: any) => {
    return <Input.TextArea {...props}></Input.TextArea>;
  },
};
