import splitProps, { getFormProps } from "../../../../../code-generator/splitPropsUtil";
import { ContainerWidgetKit } from "../share/type";
import { BaseActor } from "../share/Widget";


export type RootActor = BaseActor;
export const RootWidgetKit: ContainerWidgetKit ={
    columns:    [],
    generate:  (props)=>{
        const {remainProps, requireProps} = getFormProps(props);
        const propsString = splitProps(remainProps);
        
        return {
            beforeCode: `
            import { Form } from "antd";
      
            const useForm = Form.useForm;
            function CustomForm() {
              const [form] = useForm();
              return (
                <Form form = {form} ${propsString} >
            `,
            afterCode: `</Form>);
            
            export default CustomForm;
            `
        }
    },
    createInstance: (props: any)=>{
        return <div className="">
            {props.children}
        </div>
    }

}