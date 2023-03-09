import { proxy } from 'valtio'
import { nanoid} from "nanoid"
import { cloneDeep } from 'lodash-es';
import { Actor, WidgetType } from '../pages/main/components/wiget-list/share/Widget';
import { findActor } from './utils';
export type ActorStore = {
    actorsTree: Actor;
    actors: Actor[];
    activeActor: Actor | null;
}
const _state:ActorStore = {
    actorsTree: {
        type: WidgetType.Root,
        props: {
        //   label: "标签",
        children:[]
        },
    },
    actors: [],
    activeActor: null,
}

const state = proxy(_state)
export default state

export const ActorActions = {
    // initRoot: ()=>{
    //     const rootSchema = {
    //         type: WidgetType.Root,
    //         props: {
    //         //   label: "标签",
    //         },
    //     }
    //     state.actors = rootSchema;
        
    // },
    addActor: (schema: Actor)=>{
        console.log(state);
        const instance = cloneDeep(schema);
        instance.id = nanoid(10);

        state.actorsTree.props.children?.push(instance)
        // state.actors.push(instance)
    },
    addActorBeChild: (schema: Actor, fatherId?: String)=>{
        const instance = cloneDeep(schema);
        instance.id = nanoid(10);
        const parent = state.actors.find((actor)=> actor.id == fatherId)
        if(parent == null) return;
        if(parent.props.children){
            parent.props.children.push(instance)
        }else{
            parent.props.children = [instance];
        }
    },
    MoveActorBeChild:(sourceActorId: string, targetActorId:string)=>{
        // 1. DFS 寻找 instance;
        const sourceActor = findActor(state.actors, sourceActorId);
        if(sourceActor == null) return;
    },
    activeActor: (id: string | null)=>{
        if(id == null || id?.trim() == "") {
        // 设置 rootNode 为激活
            return;
        }
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

        const target = find(state.actorsTree);
        if(target !== null) {
            state.activeActor = target;
        }
    },

    deleteActiveActor: ()=>{
        ActorActions.deleteActor(state.activeActor?.id);
        state.activeActor = null
    },

    deleteActor:(id?: string)=>{
        if(id == null) return;
        const idx = state.actors.findIndex((actor)=> actor.id == id);
        if(idx == -1) return;
        state.actors.splice(idx, 1)
    }
}
