import React from "react";

type ErrorScreenProps = {
    status?: number;
    message?: string;
};

export const ErrorScreen: React.FC<ErrorScreenProps> = ({
    status = 500,
    message = "Упс... У нас неполадки на сервере. Уже чиним!",
}) => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center text-center p-4">
            <h1 className="text-9xl font-bold text-accent">{status}</h1>
            <p className="mt-4 text-4xl font-bold  text-accent">ERROR</p>
            <p className="mt-4 text-xl text-gray-700">{message}</p>
        </div>
    );
};
