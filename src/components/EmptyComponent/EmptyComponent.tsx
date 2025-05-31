import type { FC } from "react";
import emptyStateImg from "@/assets/cat_hungry.png";

export const EmptyComponent: FC = () => {
    return (
        <div className="text-center p-4 bg-blue-100 rounded-md text-3xl font-bold">
            <img src={emptyStateImg} alt="Пусто" className="mx-auto" />
            <p>Нет данных(</p>
        </div>
    );
};
