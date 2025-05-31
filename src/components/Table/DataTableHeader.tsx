import type { FC } from "react";
import { TableHeader, TableRow, TableHead } from "@/components/ui/table";

type DataTableHeaderProps = {
    headers: string[];
};

export const DataTableHeader: FC<DataTableHeaderProps> = ({ headers }) => (
    <TableHeader>
        <TableRow>
            {headers.map((header, index) => (
                <TableHead key={index} className="w-[100px] bg-gray-100">
                    {header}
                </TableHead>
            ))}
        </TableRow>
    </TableHeader>
);
