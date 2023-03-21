import { Input, Rate } from "antd";
import { cloneDeep } from "lodash";
import { BaseOptions } from "../../../main/components/actor-setting/type";
import {
  BaseActor,
  baseCompColumns,
  baseFormItemColumns,
  createBooleanColumn,
  WidgetType,
} from "../share/Widget";
import clearFormItemProps from "../share/clearFormItemProps";
import splitProps from "../share/splitProps";
import { FormWidgetKit } from "../share/type";
import { getFormItemProps } from "../../../../code-generator/splitPropsUtil";

export type RateActor = BaseActor & {
  type: WidgetType.Rate;
  props: {
    count?: number;
    allowHalf?: boolean;
    allowClear?: boolean;
  };
};

// allowClear	是否允许再次点击后清除	boolean	true
// allowHalf	是否允许半选	boolean	false
// autoFocus	自动获取焦点	boolean	false
// count	star 总数	number	5
// tooltips	自定义每项的提示信息	string[]	-

// 依赖 icon-selector
// character	自定义字符	ReactNode | (RateProps) => ReactNode	<StarFilled />	function(): 4.4.0

// 不支持
// className	自定义样式类名	string	-
// onBlur	失去焦点时的回调	function()	-
// onChange	选择时的回调	function(value: number)	-
// onFocus	获取焦点时的回调	function()	-
// onHoverChange	鼠标经过时数值变化的回调	function(value: number)	-
// onKeyDown	按键回调	function(event)	-
// value	当前数，受控值	number	-
// defaultValue	默认值	number	0
// style	自定义样式对象	CSSProperties	-
// disabled	只读，无法进行交互	boolean	false
export const rateWidgetKit: FormWidgetKit = {
  columns: [
    ...baseFormItemColumns,
    {
      valueType: "title",
      fieldProps: {
        title: "组件配置项",
      },
    },
    {
      title: "总数",
      dataIndex: "count",
      valueType: "digit",
    },

    {
      title: "是否可以半星",
      dataIndex: "allowHalf",
      valueType: "switch",
    },
    {
      title: "是否可以清除",
      dataIndex: "allowClear",
      valueType: "switch",
    },
    {
      title: "每项的提示信息",
      dataIndex: "tooltips",
      valueType: "select",
      fieldProps: {
        mode: "tags",
      },
    },
  ],
  generate(_props: any) {
    const props = cloneDeep(_props);
    const { formItemProps, remainProps } = getFormItemProps(props);
    return `<Form.Item ${splitProps(formItemProps)}>
            <Rate ${splitProps(remainProps)}/>
        </Form.Item>`;
  },
  createInstance: (props: any) => {
    const compProps = props.props;
    const { remainProps } = getFormItemProps(compProps);
    return <Rate {...remainProps}></Rate>;
  },
};
