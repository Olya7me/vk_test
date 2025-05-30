import { TableRow, TableCell } from "@/components/ui/table";
import type { Intern } from "@/types/internTypes";

export const DataTableRow = ({
    intern,
    index,
}: {
    intern: Intern;
    index: number;
}) => (
    <TableRow key={intern.id}>
        <TableCell className="font-medium">{index + 1}</TableCell>
        <TableCell>{intern.firstName}</TableCell>
        <TableCell>{intern.lastName}</TableCell>
        <TableCell>{intern.age}</TableCell>
        <TableCell>{intern.email}</TableCell>
        <TableCell>{intern.phone}</TableCell>
        <TableCell>{intern.university ?? "..."}</TableCell>
        <TableCell>{intern.faculty ?? "..."}</TableCell>
        <TableCell>{intern.yearOfStudy ?? "..."}</TableCell>
        <TableCell>
            {intern.skills?.length ? intern.skills.join(", ") : "..."}
        </TableCell>
        <TableCell>{intern.github ?? "..."}</TableCell>
        <TableCell>
            {intern.preferredTechStack?.length
                ? intern.preferredTechStack.join(", ")
                : "..."}
        </TableCell>
        <TableCell>{intern.availability ?? "..."}</TableCell>
        <TableCell>{intern.expectedSalary ?? "..."}</TableCell>
        <TableCell>{intern.status ?? "..."}</TableCell>
    </TableRow>
);
