import { Actor } from "../pages/main/components/wiget-list/share/Widget";

export function findActor(root: Actor | Array<Actor>, targetId:String): Actor | null{
    if(Array.isArray(root)){
        for(let i=0; i< root.length; i++){
            const result = findActor(root[i], targetId);
            if(Boolean(result)) return result;
        };
    }else{
        if(root.id == targetId) return root;
        const children = root.props.children || [];
        for(let i=0; i< children.length; i++){
            const result = findActor(children[i], targetId);
            if(Boolean(result)) return result;
        };
    }
    return null;
}

