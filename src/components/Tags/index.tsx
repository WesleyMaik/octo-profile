import { HStack, Icon, Text } from "@chakra-ui/react";
import { ComponentProps } from "react";

type TagsDataProps = {
    icon: ComponentProps<typeof Icon>['as'],
    name: string
}

export interface ITagsProps extends ComponentProps<typeof HStack> {
    data: TagsDataProps[]
};

export const Tags = ({ data, ...props }: ITagsProps) => {
    return (<>{
        data.map(({ icon, name }) => {
            if (!name) {
                return null;
            };

            return (
                <HStack
                    backgroundColor="blackAlpha.200"
                    padding={4}
                    rounded={8}
                    {...props}
                >
                    <Icon
                        as={icon}
                    />
                    <Text
                        textAlign="center"
                    >{name}</Text>
                </HStack>
            )
        })
    }</>)
};