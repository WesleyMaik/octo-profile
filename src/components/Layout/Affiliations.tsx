//Components
import { Stack, Text } from "@chakra-ui/react";

export const Affiliations = () => {
    return (
        <Stack
            justifyContent="center"
            alignItems="center"
        >
            <Text
                color="gray"
                textAlign="center"
                fontSize="sm"
            >&#8221;GitHub&#8221; and &#8221;Octocat&#8221; are trademarks of GitHub, Inc. Octo Profile is not affiliated in any way to GitHub, Inc.</Text>
        </Stack>
    );
};