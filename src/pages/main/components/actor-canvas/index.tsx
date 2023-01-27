import actorStore, { ActorActions } from "../../../../store/actorStore";
import { useUpdate } from "../../../../hooks/useUpdate";
import useSubscribe from "../../../../hooks/useSubscribe";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import ActorItem from "./actor-item";
import { cloneDeep } from "lodash-es";
import { useSnapshot } from "valtio";
import { Actor } from "../wiget-list/share/Widget";
import { useRef } from "react";
import globalFormSetting from "../../../../store/globalFormSetting";
import { Form } from "antd";
import getFormProps from "../wiget-list/share/getFormProps";
import "./index.scss";
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
  const globalSetting = useSnapshot(globalFormSetting);

  const active = snap.activeActor;

  // useDeleteKeyBoard(() => {
  //   if (blurRef.current == false) {
  //     ActorActions.deleteActiveActor;
  //   }
  // });

  const blurRef = useRef(true);
  return (
    <div
      className="actor-canvas"
      onBlur={(e) => {
        blurRef.current = false;
      }}
      onFocus={(e) => {
        blurRef.current = true;
      }}
      tabIndex={1}
    >
      <div className=" mt-4 mx-2">
        <Form {...getFormProps(globalSetting)}>
          <DragDropContext
            onDragStart={onDragStart}
            onDragUpdate={onDragUpdate}
            onDragEnd={(result) => {
              const { source, destination, draggableId } = result;
              if (!destination) {
                return;
              }
              const items = reorder(
                snap.actors,
                source.index,
                destination.index
              );
              actorStore.actors = items;
            }}
          >
            <Droppable droppableId="droppable-1">
              {(provided, snapshot) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  {snap.actors.map((actor: Actor, index: number) => (
                    <ActorItem
                      isActive={active && active.id === actor.id}
                      title={actor.type}
                      key={actor.id}
                      actor={actor}
                      id={actor.id!}
                      index={index}
                    ></ActorItem>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </DragDropContext>
        </Form>
      </div>
    </div>
  );
}

export default ActorCanvas;
