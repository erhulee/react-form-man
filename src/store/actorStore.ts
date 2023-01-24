import { proxy } from 'valtio'
import { nanoid} from "nanoid"
import { cloneDeep } from 'lodash-es';
import { Actor } from '../pages/main/components/wiget-list/BaseWidget';
type ActorStore = {
    actors: Array<Actor>;
    activeActor: Actor | null;
}
const _state:ActorStore = {
    actors: [],
    activeActor: null,
}

const state = proxy(_state)
export default state

export const ActorActions = {
    addActor: (schema: Actor)=>{
        const instance = cloneDeep(schema);
        instance.id = nanoid(10);
        
        state.actors.push(instance)
    },

    activeActor: (id: string)=>{
        const target = cloneDeep(state.actors).find(actor => actor.id == id);
        if(target == null) return;
        state.activeActor = target;
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
