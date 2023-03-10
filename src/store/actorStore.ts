import { proxy } from 'valtio'
import { nanoid} from "nanoid"
import { cloneDeep } from 'lodash-es';
import { Actor, WidgetType } from '../pages/main/components/wiget-list/share/Widget';
import { findActor, isStringEmpty } from './utils';
export function find(findId: string):Actor | null{
    function _find(node: Actor):Actor | null{
        if(node.id == findId) return node;
        const children = node.props.children || [];
        for(let i = 0; i < children.length; i++){
            const result = _find(children[i]);
            if(result !== null) return result;
        }
        return null;
    }
    return _find(actorStore.actorsTree)
}


export type ActorStore = {
    actorsTree: Actor;
    actors: Actor[];
    activeActor: Actor | null;
}
const _state:ActorStore = {
    actorsTree: {
        type: WidgetType.Root,
        id: nanoid(10),
        props: {
        //   label: "标签",
        children:[]
        },
    },
    actors: [],
    activeActor: null,
}

const actorStore = proxy(_state)
export default actorStore

export const ActorActions = {
    addActor: (schema: Actor, index?:number)=>{
        const instance = cloneDeep(schema);
        instance.id = nanoid(10);
        instance.props.parent = actorStore.actorsTree;
        if(typeof index == "undefined"){
            actorStore.actorsTree.props.children?.push(instance)
        }else{
            actorStore.actorsTree?.props.children?.splice(index + 1, 0, instance)
        }
    },
    addActorBeChild: (schema: Actor, fatherId?: String)=>{
        const instance = cloneDeep(schema);
        instance.id = nanoid(10);
        const parent = actorStore.actors.find((actor)=> actor.id == fatherId)
        if(parent == null) return;
        if(parent.props.children){
            parent.props.children.push(instance)
        }else{
            parent.props.children = [instance];
        }
    },
    insertActor:(sourceId:string, targetId:string)=>{
        if(isStringEmpty(sourceId) || isStringEmpty(targetId)) return;

        // DFS 寻找
        function find(node: Actor, id:string):Actor | null{
            if(node.id == id) return node;
            const children = node.props.children || [];
            for(let i = 0; i < children.length; i++){
                const result = find(children[i], id);
                if(result !== null) return result;
            }
            return null;
        }

        const sourceActor = find(actorStore.actorsTree, sourceId);
        const targetActor = find(actorStore.actorsTree, targetId);
        if(sourceActor == null || targetActor == null) return;
        const sourceActorParent = sourceActor?.props.parent;
        const targetActorParent = targetActor?.props.parent;


        const sourceIndex = sourceActorParent?.props.children?.findIndex(child => child.id == sourceId);
        if(sourceIndex == -1 ) return
        console.log("删除原node：", sourceActor, "插入的位置后一个node:", targetActor);
        console.log("删除前:", sourceActorParent?.props.children?.map(ch=> ch.id + ch.type))
        sourceActorParent?.props.children?.splice(sourceIndex!, 1);
        console.log("删除后:", sourceActorParent?.props.children?.map(ch=> ch.id + ch.type))
        const targetIndex = targetActorParent?.props.children?.findIndex(child => child.id == targetId);


        console.log("插入前：", targetActorParent?.props.children?.map(ch => ch.id + ch.type));
        console.log("插入的位置:", targetIndex)
        if( targetIndex == -1 ) return;
        if( targetIndex == 0){
            targetActorParent?.props.children?.unshift(sourceActor)
        }else{
            targetActorParent?.props.children?.splice(targetIndex! , 0, sourceActor);
        }
        console.log("插入后:", targetActorParent?.props.children?.map(ch => ch.id + ch.type))
    },
    insertActorToPosition:(sourceId: string, targetId: string, targetPos: number)=>{
        const sourceActor = find(sourceId);
        const sourceActorParent = sourceActor?.props.parent;
        const sourceActorIndex = sourceActorParent?.props.children?.findIndex(child=> child.id == sourceId);
        sourceActorParent?.props.children?.splice(sourceActorIndex!, 1);

        const containerActor = find(targetId);
        if(Array.isArray(containerActor?.props.children)){
            containerActor?.props.children.splice(targetPos + 1, 0, sourceActor!)
        }

    },
    MoveActorBeChild:(sourceActorId: string, targetActorId:string)=>{
        // 1. DFS 寻找 instance;
        const sourceActor = findActor(actorStore.actors, sourceActorId);
        if(sourceActor == null) return;
    },
    activeActor: (id: string | null)=>{
        if(id == null || id?.trim() == "") {
        // 设置 rootNode 为激活
            return;
        }

        // 检查是否和现阶段的激活actor一致
        if(actorStore.activeActor?.id == id) return;
        // DFS 寻找
        function find(node: Actor):Actor | null{
            if(node.id == id) return node;
            const children = node.props.children || [];
            for(let i = 0; i < children.length; i++){
                const result = find(children[i]);
                if(result !== null) return result;
            }
            return null;
        }

        const target = find(actorStore.actorsTree);
        // if(target !== null) {
        //     actorStore.activeActor = cloneDeep(target);
        // }
    },

    

    deleteActiveActor: ()=>{
        ActorActions.deleteActor(actorStore.activeActor?.id);
        actorStore.activeActor = null
    },

    deleteActor:(id?: string)=>{
        if(id == void 0 || id.trim() == "") return;
        const deleteTarget = findActor(actorStore.actorsTree, id);
        const parent = deleteTarget?.props.parent;
        if(parent && parent.props.children){
            const index = parent.props.children.findIndex(child=> child.id == deleteTarget?.id);
            if(index == -1) return;
            parent.props.children.splice(index, 1);
        }
    }
}
