import { Skeleton } from "@/components/ui/skeleton";

export const TableSkeleton = () => {
    const renderSkeletons = (count: number, widths: string[]) => {
        return Array.from({ length: count }).map((_, i) => (
            <Skeleton
                key={i}
                className={`${
                    widths[i % widths.length]
                } h-[30px] rounded-full bg-gray-200 mb-2`}
            />
        ));
    };

    return (
        <>
            <Skeleton className="w-full h-[30px] rounded-full bg-gray-200 mb-2" />
            <div className="flex gap-5 w-full">
                <div className="w-1/28 max-[1024px]:w-1/15">
                    {renderSkeletons(7, ["w-full"])}
                </div>
                <div className="w-1/10 max-[1024px]:hidden">
                    {renderSkeletons(7, ["w-full", "w-1/2"])}
                </div>
                <div className="w-1/10 max-[1024px]:hidden">
                    {renderSkeletons(7, ["w-full", "w-1/2"])}
                </div>
                <div className="w-1/28 max-[1024px]:hidden">
                    {renderSkeletons(7, ["w-full"])}
                </div>
                <div className="w-full">{renderSkeletons(7, ["w-full"])}</div>
            </div>
        </>
    );
};
