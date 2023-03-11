// 可以容纳万物
import DropWrap from "../../../../../drap-component-wrap/drop-wrap";
import { ItemType } from "../../../../../drap-component-wrap/type";
import actorStore, { ActorActions } from "../../../../../store/actorStore";
import ActorItem from "../../actor-canvas/actor-item";
import { ContainerWidgetKit } from "../share/type";
import { BaseActor } from "../share/Widget";
import { useSnapshot } from "valtio";
export type CellActor = BaseActor;

export const CellContainerWidgetKit: ContainerWidgetKit = {
    columns:[],
    generate(_props:any){
        return `<div></div>`
    },
    createInstance: (props:any)=>{
        const children = props.children || [];
        const snap: any = useSnapshot(actorStore);
        const active = snap.activeActor;
        return <DropWrap 
          accept={[ItemType.actor, ItemType.origin]} 
          onDrop={(transferData)=>{
          const {itemType, schemaInfo, componentId} = transferData;
          // 增加新的actor
          if(itemType == ItemType.origin){
            const id = props.id;
            ActorActions.addActorBeChild(schemaInfo, id)
          // 老的 actor 挪动
          }else{
            
          }
        }}>
          <div className="bg-slate-300 border-dashed border-2" style={{minHeight: "100px"}} >
            {children.map((actor:any, index:number)=>{
              return <ActorItem 
                isActive={active && active.id === actor.id}
                title={actor.type}
                key={actor.id}
                actor={actor}
                id={actor.id!}
                index={index}
              />
            })}
            
          </div>
        </DropWrap>
    }
} 