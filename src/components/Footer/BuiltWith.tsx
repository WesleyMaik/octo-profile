import { HStack, Link, Text } from "@chakra-ui/react";

type Data = {
    name: string,
    url?: string
};

export const BuiltWith = () => {
    const data: Data[] = [
        { name: "ViteJS", url: "https://vitejs.dev/" },
        { name: "ChakraUI", url: "https://chakra-ui.com/" },
        { name: "React-Query", url: "https://react-query-v3.tanstack.com/" },
        { name: "Chart.js", url: "https://www.chartjs.org/" }
    ];

    return (
        <HStack
            divider={(<>&#8226;</>)}
            gap={2}
        >
            <Text>Built with</Text>
            {data?.map(({ name, url }, key) => {
                return (
                    <Link
                        key={key}
                        href={url}
                        target="_blank"
                        color="blue.300"
                    >
                        <Text>{name}</Text>
                    </Link>
                )
            })}
            <Text>and more.</Text>
        </HStack>
    );
};