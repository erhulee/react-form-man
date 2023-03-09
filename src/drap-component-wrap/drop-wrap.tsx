import React from "react";
import { useDrop } from "react-dnd";
import { ActorActions } from "../store/actorStore";
import { DragTransferData, ItemType } from "./type";
type DragParams = DragTransferData<{schemaInfo: any } | {componentId: string}>

type Props = {
    accept:  ItemType| Array<ItemType>,
    onDrop: (transferData: DragParams)=>void;
    isRoot?: boolean
}

function DropWrap(props: React.PropsWithChildren<Props>){
    const {accept, children} = props;
    const [{ isOver }, drop] = useDrop<DragParams, any, any>(()=>{
        return {
            accept,
            drop:(transferData, monitor)=>{
                const isTopLayer =monitor.isOver();
                if(!isTopLayer) return;
                props.onDrop(transferData)
            },
            collect: (monitor)=>
            ({
                isOver: !!monitor.isOver(),
            })
        }
    })

    return <div ref={drop} className={`${isOver && !props.isRoot ?"opacity-20":"" }  `}>
        {children}
    </div>
}

export default DropWrap;