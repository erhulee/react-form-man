import { cloneDeep } from "lodash";
import { InputNumber } from "antd";
import { BaseOptions } from "../../../main/components/actor-setting/type";
import {
  BaseActor,
  baseColumns,
  InputLikeColumns,
  WidgetType,
} from "../share/Widget";
import clearFormItemProps from "../share/clearFormItemProps";
import splitProps from "../share/splitProps";
import { FormWidgetKit } from "../share/type";
import { getFormProps } from "../../../../code-generator/splitPropsUtil";

export type NumberActor = BaseActor & {
  type: WidgetType.Number;
  props: BaseOptions;
};

export const NumberWidgetKit: FormWidgetKit = {
  columns: [...baseColumns, ...InputLikeColumns],
  generate(_props: any) {
    const props = cloneDeep(_props);
    const { formItemProps, remainProps } = getFormProps(props);
    return `<Form.Item ${splitProps(formItemProps)}>
          <InputNumber ${splitProps(remainProps)}/>
        </Form.Item>`;
  },
  createInstance: (props: any) => {
    return <InputNumber {...props}></InputNumber>;
  },
};
