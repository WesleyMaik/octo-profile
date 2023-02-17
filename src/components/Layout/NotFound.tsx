//Modules
import { handleBack } from "../../utils/handleBack";

//Components
import { Button, Heading, Stack, Text } from "@chakra-ui/react";
import { Frown } from "react-feather";

export interface INotFoundUserProps { };

export const NotFoundUser = ({ ...props }: INotFoundUserProps) => {
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
            >User not found</Heading>
            <Text
                color="gray"
            >Make sure your username is correct or try another one.</Text>
            <Button
                colorScheme="green"
                onClick={handleBack}
            >Back</Button>
        </Stack>
    );
};