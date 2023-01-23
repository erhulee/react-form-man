import { useEffect } from "react";
import {  subscribe } from "valtio";
export default function useSubscribe(store:any, callback: (ops: any[]) => void){
    useEffect(()=>{
        return subscribe(store, callback)
    }, [])
}