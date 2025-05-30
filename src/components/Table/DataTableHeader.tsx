import { TableHeader, TableRow, TableHead } from "@/components/ui/table";

export const DataTableHeader = ({ headers }: { headers: string[] }) => (
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
