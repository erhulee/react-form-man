import { Actor } from "../pages/main/components/wiget-list/share/Widget";

export function findActor(root: Actor, targetId:String): Actor | null{

    if(root.id == targetId) return root;
    const children = root.props.children || [];
    for(let i=0; i< children.length; i++){
        const result = findActor(children[i], targetId);
        if(Boolean(result)) return result;
    };
    
    return null;
}


export function isStringEmpty(str: string | null | undefined){
    return str && !Boolean(str.trim())
}


