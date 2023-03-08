import DragWrap from "../../../../drap-component-wrap/drag-wrap";
import { ItemType } from "../../../../drap-component-wrap/type";
import { ActorActions } from "../../../../store/actorStore";
import { containerList, decoratorList, formList,  } from "../../constant";
import { Actor } from "./share/Widget";

export type WidgetItemProps = {
  icon: JSX.Element;
  name: string;
  schemaInfo: Actor;
  className?: string;
};
function WidgetItem(props: WidgetItemProps) {
  const { icon, name, schemaInfo, className } = props;
  return (
    <DragWrap itemType={ItemType.origin} item={()=>({schemaInfo})}   >
    <div
      onClick={() => ActorActions.addActor(schemaInfo)}
      className={`${className} bg-slate-100 flex flex-col justify-center items-center border-transparent border-solid  py-1 rounded border hover:border-cyan-900 cursor-pointer `}
    >
      <span className=" text-xl ">{icon}</span>
      <div className=" flex-1 text-gray-600">{name}</div>
    </div>
    </DragWrap>
  );
}

function WidgetList() {
  return (
    <div className=" px-2">
      <div className=" m-2">
        <p className=" font-semibold m-2 text-lg">基础组件</p>
        <div className=" grid grid-cols-2 gap-2">
          {formList.map((item) => (
            <WidgetItem {...item} className="mb-2" />
          ))}
        </div>
      </div>
      
      <div className=" m-2">
        <p className=" font-semibold m-2 text-lg">容器组件</p>
        <div className=" grid grid-cols-2 gap-2">
          {containerList.map((item) => (
             <WidgetItem {...item} className="mb-2" />
          ))}
        </div>
      </div>
     

      <div className=" m-2">
        <p className=" font-semibold m-2 text-lg">装饰组件</p>
        <div className=" grid grid-cols-2 gap-2">
          {decoratorList.map((item) => (
                <WidgetItem {...item} className="mb-2" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default WidgetList;
