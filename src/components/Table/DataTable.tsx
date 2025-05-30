import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Table, TableBody } from "@/components/ui/table";
import { useInternsContext } from "@/context/internContext";
import { DataTableHeader } from "./DataTableHeader";
import { DataTableRow } from "./DataTableRow";
import { DataTableLoaderRow } from "./DataTableLoaderRow";

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

export const DataTable = () => {
    const {
        interns,
        fetchNextPage,
        isFetchingNextPage,
        isLoading,
        hasNextPage,
        error,
    } = useInternsContext();

    const { ref, inView, entry } = useInView();

    useEffect(() => {
        if (entry && inView && hasNextPage && !isFetchingNextPage) {
            fetchNextPage();
        }
    }, [entry, inView, hasNextPage, isFetchingNextPage]);

    if (isLoading && (!interns || interns.length === 0)) {
        return <div>Загрузка...</div>;
    }
    if (error) return <div>Ошибка при загрузке данных</div>;
    if (!interns || interns.length === 0)
        return <div>Стажёров пока нет 😢</div>;

    return (
        <Table className="text-md">
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
