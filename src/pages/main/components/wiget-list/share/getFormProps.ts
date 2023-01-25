import { cloneDeep } from "lodash-es";
import { GlobalFormSetting } from "../../../../../store/globalFormSetting";

function getFormProps(_globalSetting: GlobalFormSetting): any {
    const globalSetting = cloneDeep(_globalSetting);
    // labelCol 专门整的 ～;
    const labelColNumber = globalSetting.labelCol;
    const labelCol = {
      span: labelColNumber,
    };
  
    delete globalSetting.collectionName;
    (globalSetting as any).labelCol = labelCol;
  
    return globalSetting;
  }


  export default getFormProps