import { proxy } from "valtio"

type GlobalFormSetting = {
    collectionName: string
    [index: string]: any
}

const state: GlobalFormSetting = {
    collectionName: ""
}

const globalFormSetting = proxy(state);

export default globalFormSetting;


export const GlobalFormSettingAction = {
    updateFileds(values: GlobalFormSetting){
        const keys = Object.keys(values);
        keys.forEach(key =>{
            globalFormSetting[key] = values[key]
        })
    },
    updateFiled(){

    }
}