import { FunctionComponent } from "react";
import SimpleTextField, { ISimpleTextField } from "./SimpleTextField";

export interface ILightTextInput extends ISimpleTextField { }


const LightTextInput: FunctionComponent<ILightTextInput> = (props) => {
    return (
        <SimpleTextField
            {...props}
            className={`w-full rounded-md h-9 px-4 text-xs text-gray-400`}
        />
    );
}

export default LightTextInput;