import {
    Skeleton,
    SkeletonCircle,
    SkeletonText,
    Spacer,
    Stack
} from "@chakra-ui/react";

export const UserSkeleton = () => {
    return (
        <Stack
            justifyContent="center"
            alignItems="center"
        >
            <Stack
                width="full"
                maxWidth="768px"
                justifyContent="center"
                alignItems="center"
            >
                <SkeletonCircle
                    width={200}
                    height={200}
                />
                <SkeletonText
                    width="full"
                />
                <Spacer
                    style={{
                        margin: "1em 0"
                    }}
                />
                {[...Array(5)].map((_, key) => (
                    <Skeleton
                        key={key}
                        width="full"
                        height={100}
                    />
                ))}
            </Stack>
        </Stack>
    );
};