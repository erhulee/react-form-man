import { useState } from "react"

export function useUpdate(){
    const [_, set_] = useState();
    return ()=>{
        set_({})
    }
}