import { useState } from "react";

function useModal(defaultVisible:boolean = false){
    const [visible, setVisible] = useState(defaultVisible);
    return {
        visible,
        open: ()=>setVisible(true),
        close: ()=>setVisible(false),
        toggle: ()=>setVisible(!visible)
    }
}

export default useModal;