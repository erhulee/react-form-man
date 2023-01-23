import { InputIcon, NumberIcon, TextareaIcon } from "../../../Icons";
import { ActorActions } from "../../../store/actorStore";
import { Actor } from "../../../store/schema";
type WigetItemProps = {
  icon: JSX.Element;
  name: string;
  schemaInfo: Actor;
  className?: string;
};
function WigetItem(props: WigetItemProps) {
  const { icon, name, schemaInfo, className } = props;
  return (
    <div
      onClick={() => ActorActions.addActor(schemaInfo)}
      className={`${className} flex justify-center items-center border-transparent border-solid  py-1 rounded border hover:border-cyan-900 cursor-pointer `}
    >
      <span className=" mr-2 ml-8 ">{icon}</span>
      <div className=" flex-1">{name}</div>
    </div>
  );
}

const wigetList: Array<WigetItemProps> = [
  {
    icon: InputIcon(),
    name: "单行输入",
    schemaInfo: {
      type: "input",
      props: {},
    },
  },
  {
    icon: TextareaIcon(),
    name: "多行输入",
    schemaInfo: {
      type: "textarea",
      props: {},
    },
  },
  {
    icon: NumberIcon(),
    name: "数字输入",
    schemaInfo: {
      type: "number",
      props: {},
    },
  },
];
function WigetList() {
  return (
    <div className=" px-2">
      <div className=" m-2">
        <p className=" font-semibold m-2 text-lg">基础组件</p>
        {wigetList.map((item) => (
          <WigetItem {...item} className="mb-2"></WigetItem>
        ))}
      </div>
    </div>
  );
}

export default WigetList;
