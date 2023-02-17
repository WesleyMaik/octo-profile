//Components
import { Spinner, Stack } from "@chakra-ui/react";

export interface ILoadingProps { }

export const Loading = ({ ...props }: ILoadingProps) => {
    return (
        <Stack
            width="full"
            height="100vh"
            justifyContent="center"
            alignItems="center"
        >
            <Spinner />
        </Stack>
    )
}; 