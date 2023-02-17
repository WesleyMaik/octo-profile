//Modules
import { useRef } from "react";

//Components
import OctoLogo from "../../assets/octocat.png";
import { Input } from "../Input";
import { GitHub } from "react-feather";
import { Footer } from "../Footer";
import { motion } from "framer-motion";
import { Affiliations } from "../Layout/Affiliations";
import { Button, Divider, Heading, Stack } from "@chakra-ui/react";

interface ISignInProps {
    onSubmit?: (username: string) => void
};

export const SignIn = ({ onSubmit }: ISignInProps) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = () => {
        const value = inputRef.current?.value || "";
        if (onSubmit && value) onSubmit(value);
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
                <motion.img
                    src={OctoLogo}
                    width={150}
                    height={150}
                    alt="Octocat Logo"
                    animate={{
                        rotate: [-20, 20, -20]
                    }}
                    transition={{
                        duration: 2,
                        ease: "easeInOut",
                        repeat: Infinity,
                    }}
                />
                <Heading>Octo Profile</Heading>
                <Input
                    ref={inputRef}
                    placeholder="Enter your GitHub username"
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
            <Divider
                maxWidth="50%"
                paddingY={4}
            />
            <Affiliations />
            <Footer />
        </Stack>
    );
};