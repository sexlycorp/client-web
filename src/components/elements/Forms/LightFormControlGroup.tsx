import { FunctionComponent, InputHTMLAttributes } from "react";
import LightTextInput, { ILightTextInput } from "../Inputs/LightTextInput";

export interface ILightFormControlGroup {
    input: ILightTextInput;
    label: {
        className?: string;
        title?: string;
    }
    hideLabel?: boolean;
}


const LightFormControlGroup: FunctionComponent<ILightFormControlGroup> = ({
    input, label, hideLabel
}) => {
    return (
        <div>
            {
                !hideLabel && (
                    <div className={`text-xs font-medium text-gray-500 mb-0.5`}>
                        {label.title}
                    </div>
                )
            }
            <div className={`sr-only`}>
                {label.title ?? `A form text field`}
            </div>
            <div>
                <LightTextInput
                    {...input}
                />
            </div>
        </div>
    );
}

export default LightFormControlGroup;