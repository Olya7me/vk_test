import { useInView } from "react-intersection-observer";
import { useEffect, type FC } from "react";
import { useInternsContext } from "@/context/internContext";

import type { Intern } from "@/types/internTypes";
import { DataTableHeader } from "./DataTableHeader";
import { DataTableRow } from "./DataTableRow";
import { DataTableLoaderRow } from "./DataTableLoaderRow";
import { ErrorComponent } from "../ErrorComponent/ErrorComponent";
import { Table, TableBody } from "@/components/ui/table";
import { EmptyComponent } from "@/components/EmptyComponent/EmptyComponent";
import { TableSkeleton } from "@/components/Table/TableSceleton";

const readableHeadersMap: Record<keyof Intern | "№", string> = {
    "№": "№",
    id: "ID",
    firstName: "Имя",
    lastName: "Фамилия",
    age: "Возраст",
    email: "Email",
    phone: "Телефон",
    university: "Университет",
    faculty: "Факультет",
    yearOfStudy: "Курс",
    skills: "Навыки",
    github: "Github",
    preferredTechStack: "Предпочитаемый стек",
    availability: "Занятость",
    expectedSalary: "Ожидаемая зарплата",
    status: "Статус",
};

export const DataTable: FC = () => {
    const {
        interns,
        fetchNextPage,
        isFetchingNextPage,
        isLoading,
        isError,
        error,
        hasNextPage,
        allKeys,
    } = useInternsContext();

    const { ref, entry } = useInView();

    useEffect(() => {
        if (entry?.isIntersecting && hasNextPage && !isFetchingNextPage) {
            fetchNextPage();
        }
    }, [entry, hasNextPage, isFetchingNextPage, fetchNextPage]);

    if (isLoading) return <TableSkeleton />;
    if (isError && error instanceof Error)
        return <ErrorComponent message={error.message} />;
    if (!interns?.length) return <EmptyComponent />;

    return (
        <Table className="text-md mb-20">
            <DataTableHeader
                headers={allKeys.map(
                    (key) => readableHeadersMap[key] ?? String(key)
                )}
            />

            <TableBody>
                {interns.map((intern, index) => (
                    <DataTableRow
                        key={intern.id}
                        intern={intern}
                        index={index}
                        keys={allKeys}
                    />
                ))}

                <DataTableLoaderRow
                    isFetching={isFetchingNextPage}
                    hasNextPage={!!hasNextPage}
                    ref={ref}
                />
            </TableBody>
        </Table>
    );
};
