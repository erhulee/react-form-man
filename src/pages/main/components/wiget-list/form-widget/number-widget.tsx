import { cloneDeep } from "lodash";
import { InputNumber } from "antd";
import { BaseOptions } from "../../actor-setting/type";
import {
  BaseActor,
  baseColumns,
  InputLikeColumns,
  WidgetType,
} from "../share/Widget";
import clearFormItemProps from "../share/clearFormItemProps";
import splitProps from "../share/splitProps";
import { FormWigetKit } from "../share/type";

export type NumberActor = BaseActor & {
  type: WidgetType.Number;
  props: BaseOptions;
};

export const NumberWigetKit: FormWigetKit = {
  columns: [...baseColumns, ...InputLikeColumns],
  generate(_props: any) {
    const props = cloneDeep(_props);
    const formItemProps = clearFormItemProps(props);
    return `<Form.Item ${splitProps(formItemProps)}>
          <InputNumber ${splitProps(props)}/>
        </Form.Item>`;
  },
  createInstance: (props: any) => {
    return <InputNumber {...props}></InputNumber>;
  },
};
