import React from "react";

interface ErrorComponent {
    message?: string;
}

export const ErrorComponent: React.FC<ErrorComponent> = ({ message }) => {
    return (
        <div className="text-red-600 text-center p-4 bg-red-100 rounded-md text-md">
            <p>Что-то пошло не так. Попробуйте позже.</p>
            <p>Инофрмация: {message || "Неизвестная ошибка"}</p>
        </div>
    );
};
