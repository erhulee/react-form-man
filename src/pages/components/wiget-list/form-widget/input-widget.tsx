import { Input } from "antd";
import { cloneDeep } from "lodash";
import { BaseOptions } from "../../../main/components/actor-setting/type";
import {
  BaseActor,
  baseColumns,
  baseCompColumns,
  baseFormItemColumns,
  InputLikeColumns,
  WidgetType,
} from "../share/Widget";
import splitProps from "../share/splitProps";
import { FormWidgetKit } from "../share/type";
import { getFormProps } from "../../../../code-generator/splitPropsUtil";
// TODO: icon-select
// addonAfter	带标签的 input，设置后置标签	ReactNode	-
// addonBefore	带标签的 input，设置前置标签	ReactNode	-
// prefix	带有前缀图标的 input	ReactNode	-
// suffix	带有后缀图标的 input	ReactNode	-

// [√] allowClear	可以点击清除图标删除内容	boolean | { clearIcon: ReactNode }	-
// [√] bordered	是否有边框	boolean	true	4.5.0
// defaultValue	输入框默认内容	string	-
// disabled	是否禁用状态，默认为 false	boolean	false
// id	输入框的 id	string	-
// [√] maxLength	最大长度	number	-
// [√]showCount	是否展示字数	boolean | { formatter: (info: { value: string, count: number, maxLength?: number }) => ReactNode }	false	4.18.0 info.value: 4.23.0
// status	设置校验状态	'error' | 'warning'	-	4.19.0
// [√]size	控件大小。注：标准表单内的输入框大小限制为 middle	large | middle | small	-
// type	声明 input 类型，同原生 input 标签的 type 属性，见：MDN(请直接使用 Input.TextArea 代替 type="textarea")	string	text
// [x]value	输入框内容	string	-
// [x]onChange	输入框内容变化时的回调	function(e)	-
// [x]onPressEnter	按下回车的回调	function(e)	-

export type InputActor = BaseActor & {
  type: WidgetType.Input;
  props: BaseOptions;
};

export const inputWidgetKit: FormWidgetKit = {
  columns: [...baseFormItemColumns, ...baseCompColumns, ...InputLikeColumns],
  generate(_props: any) {
    const props = cloneDeep(_props);
    const { formItemProps, remainProps } = getFormProps(props);

    return `<Form.Item ${splitProps(formItemProps)}>
          <Input ${splitProps(remainProps)}/>
        </Form.Item>`;
  },
  createInstance: (props: any) => {
    const compProps = props.props;
    const { remainProps } = getFormProps(compProps);
    return <Input {...remainProps}></Input>;
  },
};
