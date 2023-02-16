//Modules
import { api } from "../../services/api";
import { useQuery } from "react-query";
import getContrastByColor from "../../utils/getContrastByColor";

//Components
import { Box } from "../Box";
import { Book, Star } from "react-feather";
import { Grid, Heading, HStack, Link, Spacer, Text } from "@chakra-ui/react";

export interface IReposProps {
    data?: ReposDataProps[],
    user: string
};

export type ReposDataProps = {
    id: string | number,
    name: string,
    description: String,
    language: string,
    stargazers_count: number,
    html_url: string
};

type Languages = {
    [key: string]: {
        color: string
    };
};

export const Repositories = ({ data, user }: IReposProps) => {
    const repos = data;
    const languagesURL = "https://raw.githubusercontent.com/ozh/github-colors/master/colors.json";
    const {
        data: languages
    } = useQuery<Languages>({
        queryKey: "languages",
        queryFn: async () => (await api.get(languagesURL)).data
    });

    const getColorByLanguage = (key: string | null) => {
        if (!languages || !key) {
            return;
        };

        return languages[key].color;
    };

    const allRepositoriesURL = `https://github.com/${user}?tab=repositories`;

    return (
        <>
            <Grid
                gap={2}
                templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)']}
            >
                {repos?.map((repo, key) => {
                    const {
                        id,
                        name,
                        description,
                        language,
                        stargazers_count,
                        html_url
                    } = repo;

                    const languageColor = getColorByLanguage(language);
                    const textColor = getContrastByColor(languageColor);

                    return (
                        <Box
                            key={key}
                            as={Link}
                            id={String(id)}
                            href={html_url}
                            target="_blank"
                            alignItems="flex-start"
                            textDecoration="none !important"
                            _active={{
                                transform: "scale(0.9)"
                            }}
                        >
                            <Heading
                                display="flex"
                                alignItems="center"
                                gap={2}
                                size="md"
                            >
                                <Book
                                    size={16}
                                />{name}
                            </Heading>
                            <Text
                                color="gray"
                                fontSize="sm"
                            >{description}</Text>
                            <HStack
                                width="full"
                            >
                                <Text
                                    fontSize="sm"
                                    padding={1}
                                    color={textColor}
                                    backgroundColor={languageColor}
                                    rounded={4}
                                >{language}</Text>
                                <Spacer />
                                <HStack
                                    spacing={1}
                                    alignItems="center"
                                >
                                    <Star
                                        size={12}
                                    />
                                    <Text
                                        fontSize="sm"
                                    >{stargazers_count}</Text>
                                </HStack>
                            </HStack>
                        </Box>
                    );
                })}
            </Grid>
            <Box
                as={Link}
                href={allRepositoriesURL}
                target="_blank"
            >
                <Heading
                    size="md"
                >See all</Heading>
            </Box>
        </>
    );
};