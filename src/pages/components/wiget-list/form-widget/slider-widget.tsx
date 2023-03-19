import { Slider } from "antd";
import { cloneDeep } from "lodash";
import { BaseOptions } from "../../../main/components/actor-setting/type";
import { BaseActor, baseColumns, WidgetType } from "../share/Widget";
import clearFormItemProps from "../share/clearFormItemProps";
import splitProps from "../share/splitProps";
import { FormWidgetKit } from "../share/type";
import { getFormProps } from "../../../../code-generator/splitPropsUtil";

export type SliderActor = BaseActor & {
  type: WidgetType.Slider;
  props: BaseOptions & {};
};
export const sliderWidgetKit: FormWidgetKit = {
  columns: [
    ...baseColumns,
    {
      title: "最大值",
      dataIndex: "max",
      valueType: "digit",
    },
    {
      title: "最小值",
      dataIndex: "min",
      valueType: "digit",
    },
    {
      title: "步长",
      dataIndex: "step",
      valueType: "digit",
    },
  ],
  generate(_props: any) {
    const props = cloneDeep(_props);
    const { formItemProps, remainProps } = getFormProps(props);
    return `<Form.Item ${splitProps(formItemProps)}>
            <Slider ${splitProps(remainProps)}/>
        </Form.Item>`;
  },
  createInstance: (props: any) => {
    return <Slider {...props}></Slider>;
  },
};
