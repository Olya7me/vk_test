import { TableRow, TableCell } from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";

export const DataTableLoaderRow = ({
    isFetching,
    hasNextPage,
    ref,
}: {
    isFetching: boolean;
    hasNextPage: boolean;
    ref: (node?: Element | null) => void;
}) => {
    if (!hasNextPage && !isFetching) return null;

    return (
        <>
            {isFetching && (
                <>
                    {[...Array(3)].map((_, i) => (
                        <TableRow key={i}>
                            {[...Array(15)].map((__, j) => (
                                <TableCell key={j}>
                                    <Skeleton className="h-[30px] rounded-full bg-gray-200" />
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </>
            )}

            {!isFetching && hasNextPage && (
                <TableRow>
                    <TableCell colSpan={15}>
                        <div ref={ref} />
                    </TableCell>
                </TableRow>
            )}
        </>
    );
};
