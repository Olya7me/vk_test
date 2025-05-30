import { createContext, useContext } from "react";
import type { ReactNode } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import type { InfiniteData } from "@tanstack/react-query";
import type { Intern } from "@/types/internTypes";
import { fetchInterns } from "@/api/interns";
import { ErrorScreen } from "@/components/ErrorScreen/ErrorScreen";

type FetchError = {
    status: number;
    message: string;
};

type InternsContextType = {
    interns: Intern[];
    isLoading: boolean;
    fetchNextPage: () => void;
    hasNextPage: boolean | undefined;
    isFetchingNextPage: boolean;
};

const InternsContext = createContext<InternsContextType | undefined>(undefined);

export const InternsProvider = ({ children }: { children: ReactNode }) => {
    const {
        data,
        fetchNextPage,
        isLoading,
        isFetchingNextPage,
        error,
        hasNextPage,
    } = useInfiniteQuery<
        Intern[],
        FetchError,
        InfiniteData<Intern[]>,
        ["interns"],
        number
    >({
        queryKey: ["interns"],
        queryFn: ({ pageParam = 0 }) => fetchInterns(pageParam),
        initialPageParam: 0,
        getNextPageParam: (lastPage, pages) =>
            lastPage.length === 0 ? undefined : pages.length,
        refetchOnWindowFocus: false,
    });

    if (error) {
        return <ErrorScreen status={error.status} message={error.message} />;
    }

    const interns = data?.pages.flat() ?? [];

    return (
        <InternsContext.Provider
            value={{
                interns,
                fetchNextPage,
                hasNextPage,
                isFetchingNextPage,
                isLoading,
            }}
        >
            {children}
        </InternsContext.Provider>
    );
};

export const useInternsContext = () => {
    const context = useContext(InternsContext);
    if (!context) {
        throw new Error(
            "useInternsContext должен использоваться внутри InternsProvider"
        );
    }
    return context;
};
