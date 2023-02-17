//Modules
import { handleBack } from "../../utils/handleBack";

//Components
import { Frown } from "react-feather";
import { Button, Heading, Stack, Text } from "@chakra-ui/react";

export const RateLimitExceeded = () => {
    return (
        <Stack
            width="full"
            height="100vh"
            justifyContent="center"
            alignItems="center"
        >
            <Frown size={96} />
            <Heading
                textAlign="center"
            >You have exceeded the request limit</Heading>
            <Text
                fontSize="sm"
                color="gray"
            >Try again later</Text>
            <Button
                colorScheme="green"
                onClick={handleBack}
            >Go back</Button>
        </Stack>
    );
};