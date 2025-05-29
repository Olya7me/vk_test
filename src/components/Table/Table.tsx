import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { useInternsContext } from "@/context/internContext";

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
        if (entry && inView) {
            fetchNextPage();
        }
    }, [entry, inView]);

    if (isLoading) return <div>Загрузка...</div>;
    if (error) return <div>Ошибка при загрузке данных</div>;
    if (!interns || interns.length === 0)
        return <div>Стажёров пока нет 😢</div>;

    return (
        <>
            <Table className="text-md">
                <TableHeader>
                    <TableRow>
                        {headers.map((header, index) => (
                            <TableHead
                                key={index}
                                className="w-[100px] bg-gray-100"
                            >
                                {header}
                            </TableHead>
                        ))}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {interns.map((intern, index) => (
                        <TableRow key={intern.id}>
                            <TableCell className="font-medium">
                                {index + 1}
                            </TableCell>
                            <TableCell>{intern.firstName}</TableCell>
                            <TableCell>{intern.lastName}</TableCell>
                            <TableCell>{intern.age}</TableCell>
                            <TableCell>{intern.email}</TableCell>
                            <TableCell>{intern.phone}</TableCell>
                            <TableCell>{intern.university ?? "..."}</TableCell>
                            <TableCell>{intern.faculty ?? "..."}</TableCell>
                            <TableCell>{intern.yearOfStudy ?? "..."}</TableCell>
                            <TableCell>
                                {intern.skills?.join(", ") ?? "..."}
                            </TableCell>
                            <TableCell>{intern.github ?? "..."}</TableCell>
                            <TableCell>
                                {intern.preferredTechStack?.join(", ") ?? "..."}
                            </TableCell>
                            <TableCell>
                                {intern.availability ?? "..."}
                            </TableCell>
                            <TableCell>
                                {intern.expectedSalary ?? "..."}
                            </TableCell>
                            <TableCell>{intern.status ?? "..."}</TableCell>
                        </TableRow>
                    ))}
                    {isFetchingNextPage ? (
                        <>Loading...</>
                    ) : (
                        hasNextPage && <TableRow ref={ref}></TableRow>
                    )}
                </TableBody>
            </Table>
        </>
    );
};
