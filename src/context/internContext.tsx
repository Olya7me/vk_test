import { createContext, useContext } from "react";
import type { ReactNode } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import type { InfiniteData } from "@tanstack/react-query";
import type { Intern } from "@/types/internTypes";
import { fetchInterns } from "@/api/interns";

type InternsContextType = {
    interns: Intern[] | undefined;
    isLoading: boolean;
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
    } = useInfiniteQuery<
        Intern[],
        unknown,
        InfiniteData<Intern[]>,
        ["interns"],
        number
    >({
        queryKey: ["interns"],
        queryFn: ({ pageParam = 0 }) => fetchInterns(pageParam),
        initialPageParam: 0,
        getNextPageParam: (lastPage, pages) => {
            return lastPage.length === 0 ? undefined : pages.length;
        },
        refetchOnWindowFocus: false,
    });

    return (
        <InternsContext.Provider
            value={{
                interns: data?.pages.flat() ?? [],
                fetchNextPage,
                hasNextPage,
                isFetchingNextPage,
                isLoading,
                error,
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
