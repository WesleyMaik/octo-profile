import { GitHub, Sun, Moon } from "react-feather";
import { HStack, IconButton, Link, useColorMode } from "@chakra-ui/react";
import { useEffect } from "react";

export const Header = () => {
    const { colorMode, toggleColorMode, setColorMode } = useColorMode(),
        isLight = colorMode == "light" ? Moon : Sun;

    useEffect(() => {
        setColorMode("dark");
    }, []);

    return (
        <HStack
            width="full"
            justifyContent="flex-end"
            spacing={0}
        >
            <IconButton
                as={isLight}
                cursor="pointer"
                aria-label="Toggle Mode Icon"
                rounded="full"
                padding={2}
                margin={2}
                onClick={toggleColorMode}
            />
            <Link
                href="https://github.com/WesleyMaik/octo-profile"
                target="_blank"
            >
                <IconButton
                    as={GitHub}
                    aria-label="Github"
                    rounded="full"
                    padding={2}
                    margin={2}
                />
            </Link>
        </HStack>
    );
};