import type { Intern } from "@/types/internTypes";

const BASE_URL = "http://localhost:4000/interns";

export const fetchInterns = async (page: number): Promise<Intern[]> => {
    const res = await fetch(`${BASE_URL}?_start=${page * 10}&_limit=10`);
    if (!res.ok) {
        throw {
            status: res.status,
            message: `Ошибка при загрузке данных ${res.statusText}`,
        };
    }
    return res.json();
};

export const postInterns = async (data: Intern): Promise<Intern> => {
    const res = await fetch(`${BASE_URL}`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(data),
    });
    if (!res.ok) {
        throw {
            status: res.status,
            message: `Ошибка при добавлении: ${res.statusText}`,
        };
    }

    return res.json();
};
