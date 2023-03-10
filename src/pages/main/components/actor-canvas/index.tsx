import actorStore, { ActorActions } from "../../../../store/actorStore";
import { useUpdate } from "../../../../hooks/useUpdate";
import useSubscribe from "../../../../hooks/useSubscribe";
import { useSnapshot } from "valtio";
import { useRef } from "react";
import globalFormSetting from "../../../../store/globalFormSetting";
import "./index.scss";
import {useDrop } from "react-dnd";
import {  DragTransferData, ItemType } from "../../../../drap-component-wrap/type";
import Render from "../../../../render";

enum DropItem  {
  ORIGIN=  "origin",
  ACTOR = "actor"
}

// const reorder = (list: Actor[], startIndex: number, endIndex: number) => {
//   const result = cloneDeep(list);
//   const [removed] = result.splice(startIndex, 1);
//   result.splice(endIndex, 0, removed);
//   return result;
// };

function ActorCanvas() {
  const update = useUpdate();
  useSubscribe(actorStore, update);
  const snap: any = useSnapshot(actorStore);
  const active = snap.activeActor;
  const globalSetting = useSnapshot(globalFormSetting);

  console.log("snap:", snap);
  // useDeleteKeyBoard(() => {
  //   if (blurRef.current == false) {
  //     ActorActions.deleteActiveActor;
  //   }
  // });

  const [{ isOver }, drop] = useDrop<DragTransferData<{schemaInfo: any } | {componentId: string}>, any, any>(()=>({
    accept: [ItemType.actor, ItemType.origin],
    drop: ( transferData, monitor) => {
      const isTopLayer =monitor.isOver();
      if(!isTopLayer) return;
      const {itemType, schemaInfo} = transferData
      if(itemType == ItemType.origin){
        ActorActions.addActor(schemaInfo);
      }
    },
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    })
  }))
  const blurRef = useRef(true);
  return (
    <Render></Render>
  // <div
  //     className="actor-canvas"
  //     ref={drop}
  //     onBlur={(e) => {
  //       blurRef.current = false;
  //     }}
  //     onFocus={(e) => {
  //       blurRef.current = true;
  //     }}
  //     tabIndex={1}
  //   >
  //     <div className=" mt-4 mx-2">
  //         <Form {...getFormProps(globalSetting)}>
  //           {snap.actors.map((actor: Actor, index: number) => (
  //             <ActorItem
  //               isActive={active && active.id === actor.id}
  //               title={actor.type}
  //               key={actor.id}
  //               actor={actor}
  //               id={actor.id!}
  //               index={index}
  //             ></ActorItem>
  //           ))}
  //         </Form>
  //     </div>
  //   </div>
  );
}

export default ActorCanvas;
