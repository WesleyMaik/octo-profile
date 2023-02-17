//Modules
import getContrastByColor from "../../utils/getContrastByColor";
import { LanguagesColors } from "../../model/LanguagesColorsModel";
import { IRepositoriesProps } from "../../model/RepositoriesModel";

//Components
import { Box } from "../Box";
import { Loading } from "../Layout/Loading";
import { Book, Star } from "react-feather";
import { Grid, Heading, HStack, Link, Spacer, Stack, Text } from "@chakra-ui/react";

export interface IReposProps {
    data?: IRepositoriesProps[],
    user: string,
    languagesColors: LanguagesColors | undefined,
    limit?: number,
    isFetching?: boolean
};

export const Repositories = ({
    data, user, languagesColors, limit = Infinity, isFetching
}: IReposProps) => {
    const repos = data?.slice(0, limit);

    const getColorByLanguage = (key: string | null) => {
        if (!languagesColors || !key) {
            return;
        };

        return languagesColors[key].color;
    };

    const allRepositoriesURL = `https://github.com/${user}?tab=repositories`;

    if (isFetching) {
        return <Loading />
    };

    if (!repos || repos.length == 0) {
        return (
            <Stack
                justifyContent="center"
                alignItems="center"
            >
                <Text
                    color="gray"
                    fontSize="sm"
                >No repository for now.</Text>
            </Stack>
        )
    };

    return (
        <>
            <Grid
                gap={2}
                templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)']}
            >
                {repos.map((repo, key) => {
                    if (!repo) {
                        return;
                    };

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