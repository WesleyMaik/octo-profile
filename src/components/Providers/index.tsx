import { PropsWithChildren } from "react";

import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../../style/theme";
import { QueryClientProvider } from "react-query";
import { queryClient } from "../../services/query";

export interface IProvidersProps extends PropsWithChildren { }

export const Providers = ({ children }: IProvidersProps) => {
    return (
        <ChakraProvider
            theme={theme}
        >
            <QueryClientProvider
                client={queryClient}
            >
                {children}
            </QueryClientProvider>
        </ChakraProvider>
    );
};