import React, { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import { useInfiniteQuery, type InfiniteData } from "@tanstack/react-query";
import type { Intern } from "@/types/internTypes";
import { fetchInterns } from "@/api/interns";

export type InternsContextType = {
    interns: Intern[];
    isLoading: boolean;
    isError: boolean;
    error: unknown;
    fetchNextPage: () => void;
    hasNextPage: boolean | undefined;
    isFetchingNextPage: boolean;
    allKeys: (keyof Intern | "№")[];
    updateKeys: (newIntern: Intern) => void;
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
        getNextPageParam: (_lastPage, pages) =>
            _lastPage.length === 0 ? undefined : pages.length,
        refetchOnWindowFocus: false,
    });

    const interns: Intern[] = data?.pages.flat() ?? [];

    const [allKeys, setAllKeys] = useState<(keyof Intern | "№")[]>(["№"]);

    const arraysEqual = <T,>(a: T[], b: T[]) =>
        a.length === b.length && a.every((v, i) => v === b[i]);

    useEffect(() => {
        if (interns.length === 0) return;

        const keysSet = new Set<keyof Intern>();
        interns.forEach((intern) => {
            (Object.keys(intern) as (keyof Intern)[]).forEach((key) => {
                if (key !== "id") {
                    keysSet.add(key);
                }
            });
        });

        setAllKeys((prevKeys) => {
            const merged = new Set<keyof Intern | "№">(prevKeys);
            keysSet.forEach((k) => merged.add(k));
            merged.add("№");

            const newKeysArr = Array.from(merged);

            return arraysEqual(prevKeys, newKeysArr) ? prevKeys : newKeysArr;
        });
    }, [interns]);

    const updateKeys = (newIntern: Intern) => {
        setAllKeys((prevKeys) => {
            const merged = new Set<keyof Intern | "№">(prevKeys);
            let changed = false;
            (Object.keys(newIntern) as (keyof Intern)[]).forEach((key) => {
                if (key !== "id" && !merged.has(key)) {
                    merged.add(key);
                    changed = true;
                }
            });
            merged.add("№");

            if (!changed) return prevKeys;

            const newKeysArr = Array.from(merged);

            return arraysEqual(prevKeys, newKeysArr) ? prevKeys : newKeysArr;
        });
    };

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
                allKeys,
                updateKeys,
            }}
        >
            {children}
        </InternsContext.Provider>
    );
};

export const useInternsContext = (): InternsContextType => {
    const ctx = useContext(InternsContext);
    if (!ctx) {
        throw new Error(
            "useInternsContext должен использоваться внутри InternsProvider"
        );
    }
    return ctx;
};
