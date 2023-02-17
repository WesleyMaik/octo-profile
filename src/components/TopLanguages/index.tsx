//Modules
import { useEffect, useState } from "react";
import { LanguagesColors } from "../../model/LanguagesColorsModel";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

//Component
import { Pie } from "react-chartjs-2"
import { Stack, Text } from "@chakra-ui/react";
import { Loading } from "../Layout/Loading";

export interface ITopLanguages {
    data: DataTopLanguagesProps[] | undefined,
    languagesColors: LanguagesColors | undefined,
    limit?: number,
    isFetching?: boolean
};

type DataTopLanguagesProps = {
    language: string | null
};

type TopLanguages = {
    name: string,
    count: number
};

ChartJS.register(ArcElement, Tooltip, Legend);

export const TopLanguages = ({ data, languagesColors, limit = Infinity, isFetching }: ITopLanguages) => {
    const [topLanguages, setTopLanguages] = useState<TopLanguages[]>([]);

    const handleGetCountOfLanguages = (languages: DataTopLanguagesProps[]) => {
        let topLanguagesList: TopLanguages[] = [];
        languages.forEach(({ language }) => {
            if (!language) {
                language = "Other"
            };

            const languageIndex = topLanguagesList.findIndex(({ name }) => (name === language));

            if (languageIndex != -1) {

                topLanguagesList[languageIndex].count++;
            } else {
                topLanguagesList.push({ name: language, count: 1 });
            }
        });
        const topLanguagesSortByDescCount = topLanguagesList.sort(
            ({ count: aCount }, { count: bCount }) => (bCount - aCount)
        );

        setTopLanguages(topLanguagesSortByDescCount);
    };

    useEffect(() => {
        if (data && topLanguages.length == 0) {
            handleGetCountOfLanguages(data);
        };
    }, [data]);

    const getColorByLanguage = (key: string | null) => {
        if (!languagesColors || !key) {
            return "#FFFFFF";
        };

        return languagesColors[key]?.color || "#FFFFFF";
    };

    const topLanguagesWithLimit = topLanguages.slice(0, limit);

    const pieData = {
        labels: topLanguagesWithLimit.map(({ name }) => (name)),
        data: topLanguagesWithLimit.map(({ count }) => (count)),
        color: topLanguagesWithLimit.map(({ name }) => getColorByLanguage(name))
    };

    if (isFetching) {
        return <Loading />
    };

    if (topLanguages.length == 0) {
        return (
            <Stack>
                <Text
                    color="gray"
                    fontSize="sm"
                >No language for now.</Text>
            </Stack>
        )
    };

    return (
        <Stack>
            <Pie
                options={{
                    plugins: {
                        legend: {
                            position: "right"
                        }
                    }
                }}
                data={{
                    labels: pieData.labels,
                    datasets: [{
                        data: pieData.data,
                        label: "# of count",
                        backgroundColor: pieData.color,
                        borderWidth: 0
                    }]
                }}
            />
        </Stack>
    );
};