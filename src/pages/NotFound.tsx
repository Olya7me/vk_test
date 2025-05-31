import type { FC } from "react";

export const NotFound: FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
            <h1 className="text-9xl font-extrabold text-red-600 mb-4">404</h1>
            <h2 className="text-2xl font-semibold mb-2">Страница не найдена</h2>
            <p className="text-gray-600">
                Ну, кажется, кто-то забрел не туда...
            </p>
        </div>
    );
};
