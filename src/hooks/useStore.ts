import { useEffect, useState } from "react";

export interface IUseStoreProps<T> {
    key: string,
    data?: T,
    storage?: "localStorage" | "sessionStorage"
};

export function useStore<T = unknown>({ key, data, storage = "localStorage" }: IUseStoreProps<T>) {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [result, setResult] = useState<T>();

    const refetch = () => {
        setIsLoading(true);

        if (data) {
            if (typeof data == "object") {
                //@ts-ignore
                data = JSON.stringify(data);
            };
            //@ts-ignore
            window[storage].setItem(key, data);
        };

        let response = undefined;

        try {
            response = (JSON.parse(window[storage].getItem(key)!) as T) || undefined;
        } catch (_) {
            response = (window[storage].getItem(key) as T) || undefined;
        };

        setResult(response);

        return setIsLoading(false);
    };

    useEffect(refetch, []);

    return ({
        isLoading,
        result,
        refetch
    });
};