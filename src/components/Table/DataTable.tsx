import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import type { FC } from "react";
import { useInternsContext } from "@/context/internContext";

import { DataTableHeader } from "./DataTableHeader";
import { DataTableRow } from "./DataTableRow";
import { DataTableLoaderRow } from "./DataTableLoaderRow";
import { ErrorComponent } from "../ErrorComponent/ErrorComponent";
import { Table, TableBody } from "@/components/ui/table";
import { EmptyComponent } from "@/components/EmptyComponent/EmptyComponent";
import { TableSkeleton } from "@/components/Table/TableSceleton";

const headers = [
    "№",
    "Имя",
    "Фамилия",
    "Возраст",
    "Email",
    "Телефон",
    "Университет",
    "Факультет",
    "Курс",
    "Навыки",
    "Github",
    "Предпочитаемый стек",
    "Занятость",
    "Ожидаемая зарплата",
    "Статус",
];

export const DataTable: FC = () => {
    const {
        interns,
        fetchNextPage,
        isFetchingNextPage,
        isLoading,
        isError,
        error,
        hasNextPage,
    } = useInternsContext();

    const { ref, inView, entry } = useInView();

    useEffect(() => {
        if (entry && inView && hasNextPage && !isFetchingNextPage) {
            fetchNextPage();
        }
    }, [entry, inView, hasNextPage, isFetchingNextPage]);

    if (isLoading && (!interns || interns.length === 0)) {
        return <TableSkeleton />;
    }
    if (isError && error instanceof Error) {
        return <ErrorComponent message={error.message} />;
    }
    if (!interns || interns.length === 0) return <EmptyComponent />;

    return (
        <Table className="text-md mb-20">
            <DataTableHeader headers={headers} />
            <TableBody>
                {interns.map((intern, index) => (
                    <DataTableRow
                        key={intern.id}
                        intern={intern}
                        index={index}
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
