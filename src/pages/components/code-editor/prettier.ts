import prettier from "prettier";
import plugin from "prettier/parser-babel";
//TODO: 后续考虑放到 WebWorker 中
export function format(code:string){

    return prettier.format(code, {
        parser: "babel",
        plugins: [plugin],
    })
}