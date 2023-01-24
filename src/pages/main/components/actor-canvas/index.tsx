import actorStore, { ActorActions } from "../../../../store/actorStore";
import { useUpdate } from "../../../../hooks/useUpdate";
import useSubscribe from "../../../../hooks/useSubscribe";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import ActorItem from "./actor-item";
import { cloneDeep } from "lodash-es";
import { useSnapshot } from "valtio";
import ToolKits from "./tool-kit";
import { Actor } from "../wiget-list/BaseWidget";
import WrapDecorator from "./wrap-decorator";
import useDeleteKeyBoard from "../../../../hooks/useDeleteKeyBoard";
import { useRef } from "react";
const onDragStart = () => {
  /*...*/
};
const onDragUpdate = () => {
  /*...*/
};

const reorder = (list: Actor[], startIndex: number, endIndex: number) => {
  const result = cloneDeep(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

function ActorCanvas() {
  const update = useUpdate();
  useSubscribe(actorStore, update);
  const snap: any = useSnapshot(actorStore);
  const active = snap.activeActor;
  // useDeleteKeyBoard(() => {
  //   if (blurRef.current == false) {
  //     ActorActions.deleteActiveActor;
  //   }
  // });

  const blurRef = useRef(true);
  return (
    <div
      onFocusCapture={(e) => console.log("focuse Capture:", e)}
      onBlur={(e) => {
        console.log("blur", e);
        blurRef.current = false;
      }}
      onFocus={(e) => {
        console.log("focus:", e);
        blurRef.current = true;
      }}
      tabIndex={1}
    >
      {/* <ToolKits></ToolKits> */}
      <div className=" mt-4 mx-2">
        <DragDropContext
          onDragStart={onDragStart}
          onDragUpdate={onDragUpdate}
          onDragEnd={(result) => {
            const { source, destination, draggableId } = result;
            if (!destination) {
              return;
            }
            const items = reorder(snap.actors, source.index, destination.index);
            actorStore.actors = items;
          }}
        >
          <Droppable droppableId="droppable-1">
            {(provided, snapshot) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {snap.actors.map((actor: Actor, index: number) => (
                  <WrapDecorator
                    isActive={active && active.id === actor.id}
                    title={actor.type}
                  >
                    <ActorItem
                      key={actor.id}
                      actor={actor}
                      id={actor.id!}
                      index={index}
                    ></ActorItem>
                  </WrapDecorator>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
}

export default ActorCanvas;
