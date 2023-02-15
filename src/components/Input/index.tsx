import { forwardRef, ReactNode } from "react";

import {
    Input as DefaultInput,
    InputProps,
    InputGroup,
    InputLeftAddon,
    InputRightAddon,
    FormLabel,
    FormControl,
    FormErrorMessage,
    FormHelperText,
} from "@chakra-ui/react";

export interface IInputProps extends InputProps {
    error?: string,
    helper?: string,
    label?: string,
    leftAddon?: ReactNode,
    rightAddon?: ReactNode
};
export interface IInputRef extends HTMLInputElement { };

export const Input = forwardRef<IInputRef, IInputProps>(({
    error, helper, label, leftAddon, rightAddon, ...props
}, ref) => {
    return (
        <FormControl
            isInvalid={Boolean(error)}
        >
            {Boolean(label) && (
                <FormLabel>{label}</FormLabel>
            )}
            <InputGroup>
                {Boolean(leftAddon) && (
                    <InputLeftAddon>{leftAddon}</InputLeftAddon>
                )}
                <DefaultInput
                    {...props}
                    ref={ref}
                />
                {Boolean(rightAddon) && (
                    <InputRightAddon>{rightAddon}</InputRightAddon>
                )}
            </InputGroup>
            {Boolean(helper || error) && (<>
                <FormHelperText>{helper}</FormHelperText>
                <FormErrorMessage>{error}</FormErrorMessage>
            </>)}
        </FormControl>
    );
});

Input.displayName = "Input";