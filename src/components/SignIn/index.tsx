import { Button, Divider, Heading, Stack } from "@chakra-ui/react";
import { useRef } from "react";
import { GitHub } from "react-feather";
import { Footer } from "../Footer";
import { Input } from "../Input";

interface ISignInProps {
    onSubmit?: (username: string) => void
};

export const SignIn = ({ onSubmit }: ISignInProps) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = () => {
        const value = inputRef.current?.value || "";
        if (onSubmit) onSubmit(value);
    };

    return (
        <Stack
            minHeight="100vh"
            justifyContent="center"
            alignItems="center"
            paddingBottom={12}
        >
            <Stack
                width="full"
                maxWidth="384px"
                alignItems="center"
                padding={4}
            >
                <Heading>Octo Profile</Heading>
                <Divider
                    marginY={2}
                />
                <Input
                    ref={inputRef}
                    placeholder="Insira seu nome de usuário"
                    leftAddon={<GitHub size={24} />}
                    onKeyDown={({ key }) => {
                        if (key == "Enter") {
                            handleSubmit();
                        };
                    }}
                />
                <Button
                    width="full"
                    colorScheme="green"
                    onClick={handleSubmit}
                >Entrar</Button>
            </Stack>
            <Footer />
        </Stack>
    );
};