import { GitHub } from "react-feather";
import { HStack, IconButton, Link } from "@chakra-ui/react";

export const Header = () => {
    return (
        <HStack
            width="full"
            justifyContent="flex-end"
        >
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