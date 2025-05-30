import { TableRow, TableCell } from "@/components/ui/table";

export const DataTableLoaderRow = ({
    isFetching,
    hasNextPage,
    ref,
}: {
    isFetching: boolean;
    hasNextPage: boolean;
    ref: (node?: Element | null) => void;
}) => (
    <TableRow>
        <TableCell colSpan={15}>
            {isFetching ? (
                <div>Загрузка...</div>
            ) : hasNextPage ? (
                <div ref={ref} />
            ) : null}
        </TableCell>
    </TableRow>
);
