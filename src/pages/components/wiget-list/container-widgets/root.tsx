import splitProps, {
  getFormProps,
} from "../../../../code-generator/splitPropsUtil";
import { ContainerWidgetKit } from "../share/type";
import { BaseActor } from "../share/Widget";

export type RootActor = BaseActor;
export const RootWidgetKit: ContainerWidgetKit = {
  columns: [
    {
      title: "表单名称",
      dataIndex: "name",
      valueType: "input",
      formItemProps: {
        tooltip: "作为导出的组件名称",
      },
    },
    {
      title: "标签宽度",
      dataIndex: ["labelCol", "span"],
      valueType: "number",
      formItemProps: {
        tooltip: "labelCol.span",
      },

      // fieldProps: {
      //   value: `// 设置 span offset 值
      //      // 如 {span: 3, offset: 12}`,
      // },
    },
    {
      title: "对齐方式",
      dataIndex: "labelAlign",
      valueType: "radio",
      formItemProps: {
        tooltip: "labelAlign",
      },
      fieldProps: {
        options: [
          {
            label: "左对齐",
            value: "left",
          },
          {
            label: "右对齐",
            value: "right",
          },
        ],
      },
    },
    {
      title: "尺寸",
      dataIndex: "size",
      valueType: "radio",
      formItemProps: {
        tooltip: "size",
      },
      fieldProps: {
        options: [
          { label: "小", value: "small" },
          { label: "中", value: "middle" },
          { label: "大", value: "large" },
        ],
      },
    },
    {
      title: "显示冒号",
      dataIndex: "colon",
      valueType: "switch",
      formItemProps: {
        tooltip: "colon",
      },
    },
  ],
  generate: (props) => {
    const functionName = props.name || "CustomForm";

    const { remainProps } = getFormProps(props);
    const propsString = splitProps(remainProps);

    return {
      beforeCode: `
            import { Form } from "antd";
      
            const useForm = Form.useForm;
            function ${functionName}() {
              const [form] = useForm();
              return (
                <Form form = {form} ${propsString} >
            `,
      afterCode: `</Form>)};
            
            export default ${functionName};
            `,
    };
  },
  createInstance: (props: any) => {
    return <div className="">{props.children}</div>;
  },
};
