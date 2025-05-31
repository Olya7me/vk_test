import { createContext, useContext } from "react";
import type { ReactNode } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import type { InfiniteData } from "@tanstack/react-query";
import type { Intern } from "@/types/internTypes";
import { fetchInterns } from "@/api/interns";

export type InternsContextType = {
    interns: Intern[] | undefined;
    isLoading: boolean;
    isError: boolean;
    error: unknown;
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
        isError,
    } = useInfiniteQuery<
        Intern[],
        Error,
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

    const interns = data?.pages.flat();

    return (
        <InternsContext.Provider
            value={{
                interns,
                isLoading,
                isError,
                error,
                fetchNextPage,
                hasNextPage,
                isFetchingNextPage,
            }}
        >
            {children}
        </InternsContext.Provider>
    );
};

export const useInternsContext = () => {
    const ctx = useContext(InternsContext);
    if (!ctx)
        throw new Error(
            "useInternsContext должен использоваться внутри InternsProvider"
        );
    return ctx;
};
