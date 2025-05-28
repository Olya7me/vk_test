import React, { createContext, useContext } from "react";
import type { ReactNode } from "react";
import { useQuery } from "@tanstack/react-query";
import type { Intern } from "@/types/internTypes";

type InternsContextType = {
    interns: Intern[] | undefined;
    isLoading: boolean;
    error: unknown;
};

const InternsContext = createContext<InternsContextType | undefined>(undefined);

export const InternsProvider = ({ children }: { children: ReactNode }) => {
    const { data, isLoading, error } = useQuery<Intern[]>({
        queryKey: ["interns"],
        queryFn: async () => {
            const res = await fetch("http://localhost:4000/interns");
            if (!res.ok) throw new Error("Ошибка при загрузке данных");
            return res.json();
        },
    });

    return (
        <InternsContext.Provider value={{ interns: data, isLoading, error }}>
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
