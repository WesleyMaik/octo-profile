//Modules
import { useQuery } from "react-query";
import { handleBack } from "../../utils/handleBack";
import { IRateLimitProps, RateLimitModel } from "../../model/RateLimitModel";
import { UserModel, IUserProps } from "../../model/UserModel";
import { LanguagesColorsModel, LanguagesColors } from "../../model/LanguagesColorsModel";
import { IRepositoriesProps, RepositoriesModel } from "../../model/RepositoriesModel";

//Components
import { Box } from "../Box";
import { Tags } from "../Tags";
import { Footer } from "../Footer";
import { Loading } from "../Layout/Loading";
import { BuiltWith } from "../Footer/BuiltWith";
import { Repositories } from "../Repositories";
import { TopLanguages } from "../TopLanguages";
import { NotFoundUser } from "../Layout/NotFound";
import { Affiliations } from "../Layout/Affiliations";
import { Coffee, MapPin } from "react-feather";
import { RateLimitExceeded } from "../Layout/RateLimitExceeded";
import { Heading, HStack, Image, Link, Stack, Text } from "@chakra-ui/react"

interface IProfileProps {
    username: string
};

export const Profile = ({ username }: IProfileProps) => {
    if (!username) {
        handleBack();
        return null;
    };

    const RateLimit = new RateLimitModel;
    const User = new UserModel;
    const Repository = new RepositoriesModel;
    const LanguagesColors = new LanguagesColorsModel;

    const {
        data: rateLimit
    } = useQuery<IRateLimitProps>({
        queryKey: "",
        queryFn: RateLimit.request
    })

    const {
        data: user,
        isFetching,
        error
    } = useQuery<IUserProps>({
        queryKey: "user",
        queryFn: () => User.request(username),
        enabled: Boolean(rateLimit)
    });

    const {
        data: languagesColors
    } = useQuery<LanguagesColors>({
        queryKey: "languages",
        queryFn: LanguagesColors.request,
        enabled: Boolean(user)
    });

    const {
        data: repositories,
        isFetching: repositoriesIsFetching
    } = useQuery<IRepositoriesProps[]>({
        queryKey: "repositories",
        queryFn: () => Repository.request(username),
        enabled: Boolean(user)
    });

    if (rateLimit?.remaining == 0) {
        return <RateLimitExceeded />
    };

    if (isFetching) {
        return <Loading />
    };

    if (!user || error) {
        return <NotFoundUser />;
    };

    const {
        avatar_url,
        name,
        login,
        bio,
        company,
        location,
        public_repos,
        followers,
        following,
        html_url
    } = user;

    const repositoriesLanguages = repositories?.map(
        ({ language }) => ({ language })
    );

    return (
        <Stack
            minHeight="100vh"
            alignItems="center"
            paddingBottom={12}
        >
            <Stack
                width="full"
                maxWidth="768px"
                alignItems="center"
                padding={4}
            >
                <Image
                    width={200}
                    height={200}
                    src={avatar_url}
                    alt="User Avatar"
                    loading="lazy"
                    rounded="full"
                />
                <Heading>{name}</Heading>
                <Link
                    href={html_url}
                    target="_blank"
                    color="blue.400"
                >
                    <Text>{`@${login}`}</Text>
                </Link>
                <Text
                    textAlign="center"
                    color="gray"
                >{bio}</Text>
                <HStack
                    wrap="wrap"
                    paddingY={4}
                    justifyContent="center"
                    spacing={0}
                    gap={2}
                >
                    <Tags
                        data={[
                            { icon: Coffee, name: company },
                            { icon: MapPin, name: location }
                        ]}
                    />
                </HStack>
                <HStack
                    width="full"
                >
                    <Box>
                        <Heading>{public_repos}</Heading>
                        <Text>Repositories</Text>
                    </Box>
                    <Box>
                        <Heading>{followers}</Heading>
                        <Text>Followers</Text>
                    </Box>
                    <Box>
                        <Heading>{following}</Heading>
                        <Text>Following</Text>
                    </Box>
                </HStack>
                <Stack
                    width="full"
                >
                    <Box>
                        <Heading
                            size="sm"
                        >Top Languages</Heading>
                        <Text
                            color="gray"
                            fontSize="sm"
                        >Based on your last 100 repositories</Text>
                        <TopLanguages
                            data={repositoriesLanguages}
                            languagesColors={languagesColors}
                            limit={5}
                            isFetching={repositoriesIsFetching}
                        />
                    </Box>
                </Stack>
                <Stack
                    width="full"
                >
                    <Box
                        _hover={{
                            backgroundColor: undefined
                        }}
                    >
                        <Heading
                            size="sm"
                            paddingY={2}
                        >Top Repositories</Heading>
                        <Repositories
                            user={login}
                            data={repositories}
                            languagesColors={languagesColors}
                            limit={10}
                            isFetching={repositoriesIsFetching}
                        />
                    </Box>
                </Stack>
            </Stack>
            <BuiltWith />
            <Affiliations />
            <Footer />
        </Stack>
    )
};