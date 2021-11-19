import { FunctionComponent } from "react";
import SimpleButton, { ISimpleButton } from "./SimpleButton";

interface ILightButton {
    button: ISimpleButton
}

const LightButton: FunctionComponent<ILightButton> = ({
    button
}) => {
    return (
        <SimpleButton
            className={`bg-purple-200 font-semibold text-xs hover:bg-purple-300 transition duration-500 text-white px-5 py-2 rounded-md`}
            {...button}
        />
    );
}

export default LightButton;