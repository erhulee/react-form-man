import { debounce, throttle } from "lodash-es";
import { useEffect } from "react";

function useWindowResize(callback:(rect:{width: number, height: number})=>void){
    useEffect(()=>{
        const _callback = debounce((rect:{width: number, height: number})=>{
            callback(rect)
        }, 200)
        const resizeCallback = ()=>{
            const rect = {
                width: window.innerWidth,
                height: window.innerHeight
            }
            _callback(rect);
        }
        resizeCallback()
        window.addEventListener("resize", resizeCallback);

        return ()=>{
            window.removeEventListener("resize", resizeCallback)
        }
    })
}

export default useWindowResize