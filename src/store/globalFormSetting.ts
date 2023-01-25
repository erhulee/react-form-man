import { proxy } from "valtio"

export type GlobalFormSetting = {
    collectionName?: string,
    labelCol?: number,
    labelAlign: "left" | "right",
    [index: string]: any
}

const state: GlobalFormSetting = {
    collectionName: "",
    labelAlign: "left"
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