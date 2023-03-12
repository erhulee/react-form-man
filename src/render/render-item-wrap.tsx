// 单独处理一些渲染出组件后，还要做的一些事情
// 例如: 拖拽，边框装饰

import React from "react";
import DragWrap from "../drap-component-wrap/drag-wrap";
import DropWrap from "../drap-component-wrap/drop-wrap";
import { ItemType } from "../drap-component-wrap/type";
import { TrashIcon } from "../Icons";
import { Actor, getWidgetCategory, isFormWidget, WidgetCategory } from "../pages/main/components/wiget-list/share/Widget";
import { ActorActions } from "../store/actorStore";

type Props = {
    // isActive: boolean,
    // title: string,
    // dragItemType: ItemType
    // dragTransferData: any
    actorData: Actor,
    currentActiveId: string
}

type DecoratorProps = {
    widgetCategory: WidgetCategory
    isActive: boolean;
    title: string;
};

type MoveDecoratorProps = {
  widgetCategory: WidgetCategory
  id: string
}

function WrapDecorator(props: React.PropsWithChildren<DecoratorProps>) {
    const { isActive, children, title, widgetCategory } = props;
    const deleteActive = () => {
      ActorActions.deleteActiveActor();
    };
    return (
      <div
        tabIndex={1}
        className={
          `${isActive ? "border border-blue-500 border-solid" : ""} 
           ${widgetCategory == WidgetCategory.Container? "p-4 bg-blue-200 ": ""}
           ${widgetCategory == WidgetCategory.Form? "bg-blue-100 p-4 ":""}
           ${widgetCategory == WidgetCategory.Root? "w-full h-full px-10 py-5":""}
          relative rounded `}
      >
        {isActive && (
          <span className=" absolute top-0 left-0 bg-blue-500 px-1 py-1 text-white z-30 rounded-br">
            {title}
          </span>
        )}
        {isActive && (
          <div
            className=" bg-blue-500 absolute top-0 right-0 p-1 cursor-pointer z-30 rounded-bl "
            onClick={() => deleteActive()}
          >
            <TrashIcon></TrashIcon>
          </div>
        )}
        {children}
      </div>
    );
}

function MoveDecorator(props: React.PropsWithChildren<MoveDecoratorProps>){
  const {widgetCategory, id, children} = props;
  switch(widgetCategory){
    case WidgetCategory.Root:
      return (
        <DropWrap onDrop={(transferData)=>{console.log("tt:", transferData)}} accept={[ItemType.actor, ItemType.origin]} isRoot>
            {children}
        </DropWrap>
      )
    case WidgetCategory.Container:
      return (
        <DropWrap onDrop={()=>{}} accept={[ItemType.actor, ItemType.origin]}>
            <DragWrap itemType={ItemType.actor} item={()=>({componentId: id })}>
                {children}
            </DragWrap>
        </DropWrap>
      )
    case WidgetCategory.Form:
    case WidgetCategory.Decorator:
      return  <DragWrap itemType={ItemType.actor} item={{ componentId: id, itemType: ItemType.actor }} >
        {children}
    </DragWrap>
      // (<DropWrap onDrop={(transferData)=>{
      //   const sourceId = transferData.componentId;
      //   const targetId = id;
      //   ActorActions.insertActor(sourceId, targetId)
      // }} accept={[ItemType.actor, ItemType.origin]}>
      
      // </DropWrap>)
  }
}

function ActiveDecorator(props: React.PropsWithChildren<{id: string}>){
  const { children, id} = props;
  const handleClick = ()=>{
    ActorActions.activeActor(id);
    ActorActions.updateTree();
  }
  return <div onClick={handleClick}>
    {children}
  </div>
}
  
function RenderItemWrap(props: React.PropsWithChildren<Props>){
    const {children, actorData, currentActiveId} = props;
    const { id, type, props: actorProps }= actorData
    
    const handleActiveClick = (e:React.MouseEvent<HTMLDivElement, MouseEvent>)=> {
        ActorActions.activeActor(id || "");
        e.stopPropagation();
    }

    const itemType = getWidgetCategory(type);

    console.log(currentActiveId, "__",  id)
    const isActive = currentActiveId == id;
    const title = type ?? "未定义";
    return (<div onClick={handleActiveClick}>
                  <MoveDecorator id={id || ""} widgetCategory={itemType}>
                    <ActiveDecorator id={id || ""}>
                      <WrapDecorator isActive={isActive} title={title} widgetCategory={itemType}>
                          {children}
                      </WrapDecorator>
                    </ActiveDecorator>
                  </MoveDecorator>
            </div>)

}

export default RenderItemWrap;