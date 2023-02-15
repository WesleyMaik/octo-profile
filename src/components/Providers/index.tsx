import { PropsWithChildren } from "react";

import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../../style/theme";

export interface IProvidersProps extends PropsWithChildren { }

export const Providers = ({ children }: IProvidersProps) => {
    return (
        <ChakraProvider
            theme={theme}
        >
            {children}
        </ChakraProvider>
    );
};