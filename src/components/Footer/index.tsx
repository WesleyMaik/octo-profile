import { HStack, Link, Text } from "@chakra-ui/react";
import { ComponentProps } from "react";

interface IFooterProps extends ComponentProps<typeof HStack> { };

export const Footer = ({ ...props }: IFooterProps) => {
    return (
        <HStack
            height={12}
            justifyContent="center"
            width="full"
            color="white"
            backgroundColor="black"
            padding={4}
            position="fixed"
            bottom={0}
            {...props}
        >
            <Text>Made with &#10084; by <Link href="https://github.com/WesleyMaik" target="_blank">@WesleyMaik</Link></Text>
        </HStack>
    )
};