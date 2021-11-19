import { ChangeEvent, FunctionComponent, HTMLAttributes, InputHTMLAttributes } from "react";

export interface ISimpleTextField {
    className?: string;
    inputProps?: HTMLAttributes<HTMLInputElement>;
    required?: boolean;
    type?: InputHTMLAttributes<HTMLInputElement>['type'];
    disabled?: boolean;
    value?: string;
    onTextChange?: (text: string) => void;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}


const SimpleTextField: FunctionComponent<ISimpleTextField> = ({
    className, inputProps, required, type, disabled, value,
    onChange, onTextChange
}) => {

    // utils
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onTextChange && onTextChange(e.target.value);
        onChange && onChange(e);
    }

    return (
        <input
            {...inputProps}
            className={` ${className}`}
            required={required}
            type={type ?? 'text'}
            onChange={handleChange}
            disabled={disabled}
            value={value}
        />
    );
}

export default SimpleTextField;