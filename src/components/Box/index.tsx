import { Stack } from "@chakra-ui/react";
import { ComponentProps } from "react";

export interface IBoxProps extends ComponentProps<typeof Stack> { }

export const Box = ({ children, ...props }: IBoxProps) => {
    return (
        <Stack
            width="full"
            backgroundColor="blackAlpha.200"
            justifyContent="center"
            alignItems="center"
            padding={4}
            rounded={4}
            _hover={{
                backgroundColor: "blackAlpha.300"
            }}
            {...props}
        >
            {children}
        </Stack>
    )
};