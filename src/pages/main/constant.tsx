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
  VerticalLineIcon,
} from "../../Icons";
import { WigetItemProps } from "./components/wiget-list";
import { WidgetType } from "./components/wiget-list/share/Widget";

export const wigetList: Array<WigetItemProps> = [
  {
    icon: <InputIcon />,
    name: "单行输入",
    schemaInfo: {
      type: "input",
      props: {
        id: "",
      },
    },
  },
  {
    icon: <TextareaIcon />,
    name: "多行输入",
    schemaInfo: {
      type: "textarea",
      props: {},
    },
  },
  {
    icon: <NumberIcon />,
    name: "数字输入",
    schemaInfo: {
      type: "number",
      props: {},
    },
  },
  {
    icon: <SwitchIcon></SwitchIcon>,
    name: "开关",
    schemaInfo: {
      type: "switch",
      props: {},
    },
  },
  {
    icon: <RadioIcon></RadioIcon>,
    name: "单选",
    schemaInfo: {
      type: "radio",
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
      type: "checkbox",
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

export const containerList: Array<WigetItemProps> = [
  {
    icon: <RowContainerIcon />,
    name: "纵向排列",
    schemaInfo: {
      type: "input",
      props: {
        id: "",
      },
    },
  },
  {
    icon: <ColContainerIcon />,
    name: "横向排列",
    schemaInfo: {
      type: "textarea",
      props: {},
    },
  },
  {
    icon: <CardIcon></CardIcon>,
    name: "卡片容器",
    schemaInfo: {
      type: "textarea",
      props: {},
    },
  },
];

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
