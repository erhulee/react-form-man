import { proxy } from 'valtio'
import { Actor } from './schema'
import {nanoid} from "nanoid"
type ActorStore = {
    actors: Array<Actor>;
}
const _state:ActorStore = {
    actors: []
}


const state = proxy(_state)
export default state

export const ActorActions = {
    addActor: (schema: Actor)=>{
        schema.id = nanoid();
        state.actors.push(schema)
    }
}
