import { useEffect } from "react";

function useDeleteKeyBoard(callback: ()=>void){
    useEffect(()=>{
        const cb = (e:KeyboardEvent)=>{
            const code = e.code;
            if(code == "Backspace"){ callback()}
        }
       document.addEventListener("keydown", cb)
    
         return ()=>{
            document.removeEventListener("keydown", cb)
         }
    }, [])
}

export default useDeleteKeyBoard;