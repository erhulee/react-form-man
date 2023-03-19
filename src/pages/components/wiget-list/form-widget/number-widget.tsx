import { cloneDeep } from "lodash";
import { InputNumber } from "antd";
import { BaseOptions } from "../../../main/components/actor-setting/type";
import {
  BaseActor,
  baseFormItemColumns,
  createBooleanColumn,
  createNumberColumn,
  createStringColumn,
  createTitleColumn,
  WidgetType,
} from "../share/Widget";
import splitProps from "../share/splitProps";
import { FormWidgetKit } from "../share/type";
import { getFormProps } from "../../../../code-generator/splitPropsUtil";

// TODO: ICON 相关
// addonAfter	带标签的 input，设置后置标签	ReactNode	-	4.17.0
// addonBefore	带标签的 input，设置前置标签	ReactNode	-	4.17.0
// prefix	带有前缀图标的 input	ReactNode	-	4.17.0

// [√]bordered	是否有边框	boolean	true	4.12.0
// [√]autoFocus	自动获取焦点	boolean	false	-
// [√]controls	是否显示增减按钮，也可设置自定义箭头图标	boolean | { upIcon?: React.ReactNode; downIcon?: React.ReactNode; }	-	4.19.0
// [√]decimalSeparator	小数点	string	-	-
// [√]max	最大值	number	Number.MAX_SAFE_INTEGER	-
// [√]min	最小值	number	Number.MIN_SAFE_INTEGER	-
// [√]precision	数值精度，配置 formatter 时会以 formatter 为准	number	-	-
// [√]readOnly	只读	boolean	false	-
// [√]size	输入框大小	large | middle | small	-	-
// [√]step	每次改变步数，可以为小数	number | string	1	-

// [x]status	设置校验状态	'error' | 'warning'	-	4.19.0
// formatter	指定输入框展示值的格式	function(value: number | string, info: { userTyping: boolean, input: string }): string	-	info: 4.17.0
// stringMode	字符值模式，开启后支持高精度小数。同时 onChange 将返回 string 类型	boolean	false	4.13.0
// parser	指定从 formatter 里转换回数字的方式，和 formatter 搭配使用	function(string): number	-	-
// keyboard	是否启用键盘快捷行为	boolean	true	4.12.0
// [x]defaultValue	初始值	number	-	-
// disabled	禁用	boolean	false	-
// [x]value	当前值	number	-	-
// [x]onChange	变化回调	function(value: number | string | null)	-	-
// [x]onPressEnter	按下回车的回调	function(e)	-	-
// [x]onStep	点击上下箭头的回调	(value: number, info: { offset: number, type: 'up' | 'down' }) => void

export type NumberActor = BaseActor & {
  type: WidgetType.Number;
  props: BaseOptions;
};

export const NumberWidgetKit: FormWidgetKit = {
  columns: [
    ...baseFormItemColumns,
    createTitleColumn("组件配置"),
    {
      title: "边框",
      dataIndex: "bordered",
      valueType: "switch",
      formItemProps: {
        tooltip: "bordered",
      },
    },
    createBooleanColumn("autoFocus", "获取焦点"),
    createBooleanColumn("controls", "增减按钮"),
    createStringColumn("decimalSeparator", "小数点"),
    createNumberColumn("max", "最大值"),
    createNumberColumn("min", "最小值"),
    createNumberColumn("precision", "数值精度"),
    createBooleanColumn("readOnly", "只读"),
    createStringColumn("step", "步长"),
  ],
  generate(_props: any) {
    const props = cloneDeep(_props);
    const { formItemProps, remainProps } = getFormProps(props);
    return `<Form.Item ${splitProps(formItemProps)}>
          <InputNumber ${splitProps(remainProps)}/>
        </Form.Item>`;
  },
  createInstance: (props: any) => {
    const compProps = props.props;
    const { remainProps } = getFormProps(compProps);
    return <InputNumber {...remainProps}></InputNumber>;
  },
};
