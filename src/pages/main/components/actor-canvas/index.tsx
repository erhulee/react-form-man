import actorStore from "../../../../store/actorStore";
import { useUpdate } from "../../../../hooks/useUpdate";
import useSubscribe from "../../../../hooks/useSubscribe";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import ActorItem from "./actor-item";
import { cloneDeep } from "lodash-es";
import { Actor } from "../../../../store/schema";
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
  const actors = actorStore.actors;
  const update = useUpdate();
  useSubscribe(actorStore, update);

  return (
    <DragDropContext
      onDragStart={onDragStart}
      onDragUpdate={onDragUpdate}
      onDragEnd={(result) => {
        const { source, destination, draggableId } = result;
        console.log(actorStore.actors);
        console.log(
          "onDragEnd:",
          source.index,
          destination?.index,
          draggableId
        );
        if (!destination) {
          return;
        }
        const items = reorder(
          actorStore.actors,
          source.index,
          destination.index
        );

        actorStore.actors = items;
      }}
    >
      <Droppable droppableId="droppable-1">
        {(provided, snapshot) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {actors.map((actor, index) => (
              <ActorItem
                draging={snapshot.isDraggingOver}
                actor={actor}
                id={actor.id!}
                index={index}
              ></ActorItem>
            ))}
            {provided.placeholder}

            {/* {provided.placeholder} */}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default ActorCanvas;
