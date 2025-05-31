import type { FC } from "react";
import { TableRow, TableCell } from "@/components/ui/table";
import type { Intern } from "@/types/internTypes";

type Props = {
    intern: Intern;
    index: number;
    keys: (keyof Intern | "№")[];
};

export const DataTableRow: FC<Props> = ({ intern, index, keys }) => (
    <TableRow key={intern.id}>
        <TableCell className="font-medium">{index + 1}</TableCell>

        {keys
            .filter((key) => key !== "№")
            .map((key) => {
                const value = intern[key as keyof Intern];

                if (Array.isArray(value)) {
                    return (
                        <TableCell key={String(key)}>
                            {value.length ? value.join(", ") : "..."}
                        </TableCell>
                    );
                }

                return (
                    <TableCell key={String(key)}>
                        {value !== undefined && value !== null && value !== ""
                            ? String(value)
                            : "..."}
                    </TableCell>
                );
            })}
    </TableRow>
);
