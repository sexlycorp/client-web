import { ButtonHTMLAttributes, FunctionComponent, ReactElement } from "react";

export interface ISimpleButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    text?: string | ReactElement;
}


const SimpleButton: FunctionComponent<ISimpleButton> = ({
    text, autoFocus, className, disabled, onClick, onFocus, style, tabIndex, type
}) => {
    return (
        <button
            autoFocus={autoFocus}
            className={` ${className}`}
            disabled={disabled}
            onClick={onClick}
            onFocus={onFocus}
            style={style}
            tabIndex={tabIndex}
            type={type}
        >
            {text ?? ''}
        </button>
    );
}

export default SimpleButton;