import {
  CardIcon,
  CheckboxIcon,
  ColContainerIcon,
  HorizontalLineIcon,
  InputIcon,
  NumberIcon,
  RadioIcon,
  RowContainerIcon,
  SwitchIcon,
  TextareaIcon,
} from "../../Icons";
import { WigetItemProps } from "./components/wiget-list";
import { WidgetType } from "./components/wiget-list/share/Widget";

export const wigetList: Array<WigetItemProps> = [
  {
    icon: <InputIcon />,
    name: "单行输入",
    schemaInfo: {
      type: WidgetType.Input,
      props: {},
    },
  },
  {
    icon: <TextareaIcon />,
    name: "多行输入",
    schemaInfo: {
      type: WidgetType.Textarea,
      props: {},
    },
  },
  {
    icon: <NumberIcon />,
    name: "数字输入",
    schemaInfo: {
      type: WidgetType.Number,
      props: {},
    },
  },
  {
    icon: <SwitchIcon></SwitchIcon>,
    name: "开关",
    schemaInfo: {
      type: WidgetType.Switch,
      props: {},
    },
  },
  {
    icon: <RadioIcon></RadioIcon>,
    name: "单选",
    schemaInfo: {
      type: WidgetType.Radio,
      props: {
        options: [
          {
            label: "Apple",
            value: "Apple",
          },
        ],
      },
    },
  },
  {
    icon: <CheckboxIcon></CheckboxIcon>,
    name: "多选",
    schemaInfo: {
      type: WidgetType.Checkbox,
      props: {
        options: [
          {
            label: "Apple",
            value: "Apple",
          },
        ],
      },
    },
  },
];

// export const containerList: Array<WigetItemProps> = [
//   {
//     icon: <RowContainerIcon />,
//     name: "纵向排列",
//     schemaInfo: {
//       type: "input",
//       props: {
//         id: "",
//       },
//     },
//   },
//   {
//     icon: <ColContainerIcon />,
//     name: "横向排列",
//     schemaInfo: {
//       type: "textarea",
//       props: {},
//     },
//   },
//   {
//     icon: <CardIcon></CardIcon>,
//     name: "卡片容器",
//     schemaInfo: {
//       type: "textarea",
//       props: {},
//     },
//   },
// ];

export const decoratorList: Array<WigetItemProps> = [
  {
    icon: <HorizontalLineIcon></HorizontalLineIcon>,
    name: "纵向分割线",
    schemaInfo: {
      type: WidgetType.Divider,
      props: {
        type: "horizontal" as const,
      },
    },
  },
];
