import { FormWigetKit } from "../share/type";
import { checkboxWigetKit } from "./checkbox-widget";
import { inputWigetKit } from "./input-widget";
import { NumberWigetKit } from "./number-widget";
import { radioWigetKit } from "./radio-widget";
import { switchWigetKit } from "./switch-widget";
import { TextareaWigetKit } from "./textarea-widget";
export { inputWigetKit } from "./input-widget";

export type { InputActor } from "./input-widget";
export type { CheckboxActor } from "./checkbox-widget";
export type { NumberActor } from "./number-widget";
export type { TextareaActor } from "./textarea-widget";
export type { SwitchActor } from "./switch-widget";
export type { RadioActor } from "./radio-widget";

export const wigetKitMap: {
    [index: string]: FormWigetKit
} = {
    "input":    inputWigetKit,
    "textarea": TextareaWigetKit,
    "number":   NumberWigetKit,
    "switch":   switchWigetKit,
    "radio":    radioWigetKit,
    "checkbox": checkboxWigetKit
}