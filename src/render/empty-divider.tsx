import { useDrop } from "react-dnd";
import DropWrap from "../drap-component-wrap/drop-wrap";
import { ItemType } from "../drap-component-wrap/type";
import actorStore, { ActorActions } from "../store/actorStore";
type Props = {
    index: number
    currentContainerId: string
}
function EmptyDivider(props: Props){
    const {index, currentContainerId} = props;
    return <DropWrap 
        accept={[ItemType.actor, ItemType.origin]} 
        onDrop={(transferData)=>{
            debugger;
            const {componentId, itemType, schemaInfo} = transferData;
            if(itemType == ItemType.origin){
                ActorActions.addActor(schemaInfo, index);
            }else{
                ActorActions.insertActorToPosition(componentId, currentContainerId, index)
            }
        }} 
        hoverClassName="bg-slate-500 h-8 transition-all">
        <div className="w-full h-full " style={{minHeight: "16px"}}></div>
    </DropWrap>
}

export default EmptyDivider;